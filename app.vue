<template>
  <div>
    <div class="flex w-full bg-gray-50">
      <div class="bg-gray-100 max-h-max">
        <Sidebar />
      </div>
      <div class="flex justify-between w-full">
        <div class="flex flex-col mx-4">
          <!-- <div class="text-white">
            <TopNav1 />
          </div> -->
          
          <NuxtPage />
        </div>
        <div class="w-60 ml-auto bg-gray-100">
          <Account_details />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getFirestore,doc,getDoc} from 'firebase/firestore'
import Sidebar from "./components/sidebar.vue";
import Account_details from "./components/account_details.vue";
import TopNav1 from "./components/topNav.vue";
import { onMounted } from "vue";


const firebaseUser=useFirebaseUser();
console.log('_______APP__________')
console.log("firebase user running from app",firebaseUser)



const user=ref(null)
onMounted(async()=>{
  const db=getFirestore()
  const docRef=getDoc(doc(db,'users',firebaseUser.value.uid))
  const docSnap=await getDoc(docRef)
  if (docSnap.exists){
    user.value=docSnap.data()
    console.log('user data',docSnap.data())
    console.log('user info',user.value)
  }else{
    console.log('The document does not exist')
  }
  
})

</script>

<style lang="scss" scoped></style>
