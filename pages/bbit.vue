<template>
  <div>
 
    <div v-if="bbitProject">
    <div class="w-full grid grid-cols-3 gap-10">
      <div class="" v-for="project in bbitProject" :key="project.id">
        <nuxt-link
          :to="{ name: 'projects-id', params: { id: project.id } }"
          class=""
        >
          <Card_item :project="project" />
        </nuxt-link>
      </div>
    </div>
    </div>
    <div v-else>
    <h2 class="mt-40 text-red-600 text-xl ml-60 ">There are no BBIT Projects</h2>
    </div>
  </div>      
</template>

<script setup>
import { collection, getDocs, getFirestore } from "firebase/firestore";

const projects = ref([]);
  const bbitProject = computed(() => {
      return projects.value.filter((project) => project.major === "BBIT");
    });
onMounted(async () => {
  const db = getFirestore();
  const mydata = await getDocs(collection(db, "projects"));

  mydata.forEach((doc) => {
    projects.value.push({ ...doc.data(), id: doc.id });

    console.log(projects.value);
    // finding the user
  });
});
</script>

<style lang="scss" scoped>

</style>