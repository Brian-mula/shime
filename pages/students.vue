<template>
  <div>
    <div class="text-center bg-gray-50 text-gray-800 py-24 px-6">
      <h1
        class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
      >
        The best project management system <br /><span
          class="text-blue-600 py-2"
          >for senior year projects</span
        >
      </h1>

      <nuxt-link to="/landingProjects"
        class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-lg leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        href="#!"
        role="button"
      >
        View Some Cool Projects?
      </nuxt-link>
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
