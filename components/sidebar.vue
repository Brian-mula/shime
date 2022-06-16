<template>
  <div class="">
    <div class="w-60 bg-gray-100 pl-4 h-screen">
      <div class="overflow-y-auto py-6 px-3">
        <nuxt-link to="/" class="flex items-center pl-2.5 mb-5">
          <img
            src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.6435-9/176481516_3956642414452429_7671499091995897092_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Iyynv4gx54AX_AdR14&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AT84amXa6C54t8_C5xwXPxRKVjDax6Q1tnTkbHWW3RgiOw&oe=62C3CAE3"
            class="h-6 mr-3 sm:h-7"
            alt="Flowbite Logo"
          />
          <span
            class="text-gray-800 self-center text-xl font-semibold whitespace-nowrap"
            >UEAB</span
          >
        </nuxt-link>
        <ul class="space-y-2">
         
          <li>
            <nuxt-link
              to="/users/"
              class="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-gray-700 hover:bg-gray-600 dark:hover:bg-gray-300"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">My Account</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
const firebaseUser=useFirebaseUser()

const userDoc=ref(null)

onMounted(async()=>{
    const db = getFirestore();
      const docRef = doc(db, "users", firebaseUser.value.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        userDoc.value = docSnap.data();
        console.log("Document data in sideBar:", docSnap.data());
        console.log('the current user in sidebar ',userDoc.value)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! check your id in sideBar");
      }
});
</script>

<style lang="scss" scoped></style>
