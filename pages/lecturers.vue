<template>
  <div class="">
    <div class="flex justify-center items-center p-4">
      <input
        v-model="search"
        type="text"
        placeholder="search in projects"
        class="border border-gray-300 rounded-lg block w-full p-2.5 text-gray-900"
      />
    </div>
    <div class="flex justify-between items-center my-8">
      <div class="content-center">
        <div
          @click="handlePendingProjects"
          class="w-60 bg-orange-700 rounded overflow-hidden shadow-lg transition duration-1000 hover:scale-110 cursor-pointer"
        >
          <div class="px-6 py-4">
            <div class="text-gray-50 font-bold text-xl mb-2 content-center">
              Pending 
            </div>
            <div class="text-gray-50 text-base content-center">
              {{ pendingAprovals.length }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-gray-600">
        <div
          class="w-60 bg-green-700 rounded overflow-hidden shadow-lg transition duration-1000 hover:scale-110 cursor-pointer"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-gray-50">Ongoing</div>
            <p
              class="text-gray-50 text-base"
              v-if="ongoingApprovals.length > 0"
            >
              {{ ongoingApprovals.length }}
            </p>
            <p class="text-gray-50 text-base" v-else>0</p>
          </div>
        </div>
      </div>
      <div class="text-gray-600">
        <div
          class="w-60 bg-red-700 rounded overflow-hidden shadow-lg transition duration-1000 hover:scale-110 cursor-pointer"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-gray-50">Rejected</div>
            <p
              class="text-gray-50 text-base"
              v-if="rejectedApprovals.length > 0"
            >
              {{ rejectedApprovals.length }}
            </p>
            <p class="text-gray-50 text-base" v-else>0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full grid grid-cols-3 gap-10" v-if="!isPending">
      <div class="" v-for="project in searchedProjects" :key="project.id">
        <nuxt-link
          :to="{ name: 'projects-id', params: { id: project.id } }"
          class=""
        >
          <Card_item :project="project" />
        </nuxt-link>
      </div>
    </div>
    <div class="w-full grid grid-cols-3 gap-10" v-else>
      <div class="" v-for="project in pendingAprovals" :key="project.id">
        <nuxt-link
          :to="{ name: 'projects-id', params: { id: project.id } }"
          class=""
        >
          <Card_item :project="project" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card_item from "~~/components/card_item.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
export default {
  setup() {
    const firebaseUser = useFirebaseUser();

    var projects = ref([]);
    const pendingAprovals = computed(() => {
      return projects.value.filter((project) => project.approval === "pending");
    });
    const ongoingApprovals = computed(() => {
      return projects.value.filter((project) => project.approval === "ongoing");
    });
    const rejectedApprovals = computed(() => {
      return projects.value.filter(
        (project) => project.approval === "rejected"
      );
    });
    const search = ref("");
    const searchedProjects = computed(() => {
      return projects.value.filter((project) =>
        project.title.match(search.value)
      );
    });

    const isPending = ref(false);
    const isOngoing=ref(false)
    const handlePendingProjects = () => {
      isPending.value=!isPending.value
      console.log('You clicked pending')
    };
    const handleOngoingProjects=()=>{
      isOngoing.value=!isOngoing.value
    }

    onMounted(async () => {
      const db = getFirestore();
      const mydata = await getDocs(collection(db, "projects"));

      mydata.forEach((doc) => {
        projects.value.push({ ...doc.data(), id: doc.id });

        console.log(projects.value);
      });
    });
    return {
      projects,
      pendingAprovals,
      ongoingApprovals,
      rejectedApprovals,
      searchedProjects,
      search,
      isPending,
      handlePendingProjects
    };
  },
  components: { Card_item },
};
</script>

<style lang="scss" scoped></style>
