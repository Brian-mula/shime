<template>
    <div>
    <div v-if="projects">
    <div class="w-full grid grid-cols-3 gap-10">
      <div class="" v-for="project in sotwareProjects" :key="project.id">
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
    There are currently no software projects
    </div>
    </div>
</template>

<script setup>
import {
  collection,
  getDocs,
  getFirestore,

} from "firebase/firestore";

 const projects=ref([])
onMounted(async()=>{
    const db = getFirestore();
      const mydata = await getDocs(collection(db, "projects"));

      mydata.forEach((doc) => {
        projects.value.push({ ...doc.data(), id: doc.id });

        console.log(projects.value);
        // finding the user
      });
})

const sotwareProjects = computed(() => {
      return projects.value.filter((project) => project.major === "Software");
    });

</script>

<style lang="scss" scoped>

</style>