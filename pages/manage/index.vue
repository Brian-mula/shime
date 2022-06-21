<template>
  <div class="w-full grid grid-cols-3 gap-10 place-items-center mt-5">
    <div v-for="user in users" :key="user.id">
      <div class="flex bg-white drop-shadow-md rounded-lg p-1.5">
        <img
          class="w-28 h-28 rounded-full border-4 border-slate-50 object-cover"
          src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.6435-9/176481516_3956642414452429_7671499091995897092_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Iyynv4gx54AX_AdR14&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AT84amXa6C54t8_C5xwXPxRKVjDax6Q1tnTkbHWW3RgiOw&oe=62C3CAE3"
        />
        <div class="flex flex-col px-5 py-1">
          <h4 class="font-bold text-lg text-pink-600">
            {{ user.first_username }} {{ user.last_username }}
          </h4>
          <h4 v-if="user.isAdmin">Admin</h4>
          <button
          v-else
            type="button"
            @click="handleUpdate(user.id)"
            class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Make Admin
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs ,getFirestore,doc, updateDoc} from "firebase/firestore";
const users=ref([

])

let db;
onMounted(async()=>{
    db=getFirestore()
   const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    users.value.push({ ...doc.data(),id:doc.id})
  console.log(`${doc.id} => ${doc.data()}`);
  console.log('Users available',users.value)
});
})
const handleUpdate=async(id)=>{
    users.value.forEach((indiv)=>{
      if(indiv.id==id){
        const userRef = doc(db, "users", id);
         updateDoc(userRef, {
        isAdmin:true
          });
        }
    })

}
</script>

<style lang="scss" scoped></style>
