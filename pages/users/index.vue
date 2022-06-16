<template>
  <div>
    <div class="" v-if="project">
      <div class="flex flex-col justify-center items-center my-5 p-4">
        <h3 class="text-green-800 text-xl">This is Your Project</h3>
        <h3 v-if="project.approval=='pending'" class="text-green-600 text-lg">Your Project is undergoing review</h3>
      </div>
      <div
        class="h-2/3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-700"
      >
        <!-- <img
          class="rounded-t-lg w-full"
          src="https://cdn.pixabay.com/photo/2018/02/16/10/23/web-3157323__340.jpg"
          alt=""
        /> -->

        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-600"
          >
            {{ project.title }}
          </h5>

          <div class="flex justify-between items-center">
            <div class="mr-2">
              <h3 class="text-gray-600 text-xl py-2">About</h3>
              <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
                {{ project.description }}
              </p>
              <h3 class="text-gray-600 text-lg mb-2">Project Owner:</h3>
              <h3 class="text-gray-400 text-sm mb-2">
                {{ project.first_name }} {{ project.last_name }}
              </h3>
            </div>
            <div class="ml-2">
              <h3 class="text-gray-500 text-xl py-2">Problem statement</h3>
              <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
                {{ project.problem_statement }}
              </p>
              <h3 class="text-gray-600 text-lg">Area:</h3>
              <h3 class="text-gray-400 text-sm">
                {{ project.field_area }}
              </h3>
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <span
                class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {{ project.approval }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col justify-center items-center border border-gray-400 h-32 w-auto rounded-md mt-60 ml-40"
    >
      <h3 class="text-red-700 text-xl p-4">
        You don't have any project from your account
      </h3>
      <div class="flex justify-between items-center">
      <div>
      <nuxt-link to="/createProject"
        class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Submit Your Project
      </nuxt-link>
      </div>
       <div class="ml-10">
        <nuxt-link to="/"
        class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Back
      </nuxt-link>
       </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
const router=useRoute()

const project = ref(null);
const firebaseUser = useFirebaseUser();
console.log("firebase user in users", firebaseUser.value.uid);

onMounted(async () => {
  const db = getFirestore();
  const projectRef = collection(db, "projects");
  const userProject = query(
    projectRef,
    where("uid", "==", firebaseUser.value.uid)
  );

  const querySnapshot = await getDocs(userProject);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    project.value = doc.data();
    console.log(doc.id, " => ", doc.data());
    console.log("user project", project.value);
  });
});
</script>

<style lang="scss" scoped></style>
