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

    <div
      class="text-center bg-cover bg-hero text-gray-800 md:py-32 py-16 md:px-16 px-8"
    >
      <h1
        class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
      >
        The best tool to manage<br /><span class="text-blue-600 py-2"
          >senior year projects</span
        >
      </h1>
       <div class="mt-8 py-4">
      <h2 class="text-center text-gray-800 md:text-5xl text-4xl font-bold">
        Approved Projects
      </h2>
    </div>
    </div>
   

    <div class="w-full grid grid-cols-3 gap-10">
      <div class="" v-for="project in searchedProjects" :key="project.id">
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
import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";
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
      return ongoingApprovals.value.filter((project) =>
        project.title.match(search.value)
      );
    });

    const isPending = ref(false);
    const handlePendingProjects = () => {
      isPending.value = !isPending.value;
      console.log("You clicked pending");
    };

    const userInfo = ref(null);

    onMounted(async () => {
      const db = getFirestore();
      const mydata = await getDocs(collection(db, "projects"));

      mydata.forEach((doc) => {
        projects.value.push({ ...doc.data(), id: doc.id });

        console.log(projects.value);
        // finding the user
      });

      const userRef = doc(db, "users", firebaseUser.value.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        userInfo.value = userSnap.data();
        console.log("User data data:", userSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! check your id in user details");
      }
    });
    return {
      projects,
      pendingAprovals,
      ongoingApprovals,
      rejectedApprovals,
      searchedProjects,
      search,
      isPending,
      handlePendingProjects,
    };
  },
  components: { Card_item },
};
</script>

<style lang="scss" scoped></style>
