<template>
  <div>
    <div class="" v-if="project">
      <div class="flex flex-col justify-center items-center my-5 p-4">
        <h3 class="text-green-800 text-xl">This is Your Project</h3>
       <h3 class="text-xl text-green-700 ">Your Project has been approved by {{project.approvers.length}} instructors</h3>
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
            <div v-if="project.approvers.length==3">
              <button
              @click="handleApproval"
                class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {{project.approval}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  v-else>
    <div v-if="user">

        <div v-if="user.isAdmin">
        <div class="flex bg-white drop-shadow-md rounded-lg p-1.5 ml-64 mt-40">
        <img
          class="w-28 h-28 rounded-full border-4 border-slate-50 object-cover"
          src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.6435-9/176481516_3956642414452429_7671499091995897092_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Iyynv4gx54AX_AdR14&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AT84amXa6C54t8_C5xwXPxRKVjDax6Q1tnTkbHWW3RgiOw&oe=62C3CAE3"
        />
        <div class="flex flex-col px-5 py-1">
          <h4 class="font-bold text-lg text-pink-600">
            {{ user.first_username }} {{ user.last_username }}
          </h4>
          <h4 v-if="user.isAdmin">Instructor</h4>
<!-- 
          <nuxtLink
        to="pages/lecturers.vue"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
       <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
         Back
        </span>
        
        </nuxtLink
      > -->
          
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
  doc, getDoc
} from "firebase/firestore";
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
const router=useRoute()

const project = ref(null);
const firebaseUser = useFirebaseUser();
console.log("firebase user in users", firebaseUser.value.uid);
const user=ref(null)

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
  // get user data
  const userRef = doc(db, "users", firebaseUser.value.uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    user.value=userSnap.data()
  console.log("User data in my account :", userSnap.data());
  console.log('user information',user.value)
} else {
  // doc.data() will be undefined in this case
  console.log("No such document in my account!");
}

});
</script>

<style lang="scss" scoped></style>
