<template>
  <div>
    <div class="flex justify-between items-center p-4 bg-gray-100">
      <div>
      <nuxt-link
          to="/students"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-gray-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-gray-200"
          >
            Back
          </span>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link
          to="/createProject"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-gray-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-gray-200"
          >
            New Project
          </span>
        </nuxt-link>
      </div>
    </div>
    <div id="projects">
      <div class="w-full grid grid-cols-3 gap-10">
        <div class="" v-for="project in ongoingApprovals" :key="project.id">
          <nuxt-link
            :to="{ name: 'projects-id', params: { id: project.id } }"
            class=""
          >
            <Card_item :project="project" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card_item from "~~/components/card_item.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";

var projects = ref([]);
onMounted(async () => {
  const db = getFirestore();
  const mydata = await getDocs(collection(db, "projects"));

  mydata.forEach((doc) => {
    projects.value.push({ ...doc.data(), id: doc.id });

    console.log(projects.value);
  });
});
const ongoingApprovals = computed(() => {
  return projects.value.filter((project) => project.approval === "ongoing");
});
</script>

<style lang="scss" scoped></style>
