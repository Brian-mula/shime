<template>
  <div class="bg-gray-100 p-4">
    <div class="flex justify-end items-center">
      
      <nuxtLink
      v-if="!firebaseUser"
        to="/login"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
       <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Login
        </span>
        
        </nuxtLink
      >
      <button
      v-if="firebaseUser"
      @click="handleLogout"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Logout
        </span>
      </button>
    </div>
   <!-- here goes side bar details -->
   <div class="mt-8 bg-gray-200 rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-700 ">
      <h3 class="p-4 text-gray-600 mt-2">ISC DEPT</h3>
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-100 rounded-lg border shadow-md hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        
        <div class="flex flex-col px-0 py-4">
          <nuxt-link to="/software">
            <span class="text-gray-600 ">Software Engneering</span>
          </nuxt-link>
         
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
      <!-- funds transfer -->
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-100 rounded-lg border shadow-md hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        
        <div class="flex flex-col px-0 py-4">
          <div>
            <span class="text-gray-600">Networking</span>
          </div>
          
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
      <!-- bank draft -->
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-100 rounded-lg border shadow-md hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        
        <div class="flex flex-col px-0 py-4">
          <div>
            <span class="text-gray-600">BBIT</span>
          </div>
          
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
       <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-100 rounded-lg border shadow-md hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        
        <div class="flex flex-col px-0 py-4">
          <div>
            <span class="text-gray-600">Diploma</span>
          </div>
          
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
    </div>
   <!-- hend of side details -->
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const router=useRouter()

const handleLogout=async()=>{
  await signOut()
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
