<template>
  <div class="" v-if="project">
    
    <div v-if="userInfo">
    <div v-if="userInfo.isAdmin">
    <nuxt-link to="/lecturers" class="cursor-pointer h-20 w-1/2 bg-gray-200 rounded-lg mt-5 ml-auto mr-auto flex justify-center items-center">
    <h3 class="text-gray-600 text-xl uppercase" v-if="project.approval=='ongoing'|| project.approval=='rejected'" >You Have Approved This Project</h3>
    <h3 class="text-gray-600 text-xl uppercase" v-if="project.approval=='pending'" >You Have not yet Approved This Project</h3>
    </nuxt-link>
    </div>
    </div>
    <div
      class="mt-10 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-700"
    >
      <!-- <img
        class="rounded-t-lg w-full "
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
            <h3 class="text-gray-600 text-lg mb-2">
              Project Owner:
            </h3>
            <h3 class="text-gray-400 text-sm mb-2">
              {{ project.first_name }} {{ project.last_name }}
            </h3>
          </div>
          <div class="ml-2">
            <h3 class="text-gray-500 text-xl py-2">
              Problem statement
            </h3>
            <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {{ project.problem_statement }}
            </p>
            <h3 class="text-gray-600 text-lg ">Area:</h3>
            <h3 class="text-gray-400 text-sm ">
              {{ project.field_area }}
            </h3>
          </div>
        </div>
        <div class="flex justify-between" v-if="project.approval!=='ongoing'&& project.approval!=='rejected' ">
          <div v-if="project.approval === 'pending'">
            <form>
              <input
                v-model="approval"
                class="block appearance-none w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="hidden"
              />
              <div v-if="project.approvers.length==0">
                <button
                  type="button"
                  @click="handleUpdate"
                  class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Approve Project 0
                </button>
              </div>
              <div v-if="project.approvers.length==1">
                <button
                  type="button"
                  @click="handleUpdate1"
                  class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Approve Project 1
                </button>
              </div>
              <div v-if="project.approvers.length==2">
                <button
                  type="button"
                  @click="handleUpdate2"
                  class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Approve Project 2
                </button>
              </div>
            </form>
          </div>
          <div v-else>
            <button
              class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Ongoing
            </button>
          </div>
          
          <div v-if="project.approval !=='pending' || project.approval !=='ongoing'">
            <button
              type="button"
              @click="handleReject"
              class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Reject Project
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, getFirestore, updateDoc,arrayUnion } from "firebase/firestore";
export default {
  setup() {
    const router = useRoute();
    const route=useRouter()
    const approval = ref("ongoing");
    const firebaseUser=useFirebaseUser()

    const project = ref(null);
    const userInfo=ref(null);
    let db;
    onMounted(async () => {
      
      db = getFirestore();
      const docRef = doc(db, "projects", router.params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        project.value = docSnap.data();
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! check your id in details");
      }
      // find the user
       db = getFirestore();
      const userRef = doc(db, "users", firebaseUser.value.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        userInfo.value = userSnap.data();
        console.log("User data data:", userSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! check your id in user details");
      }
    });
    const handleUpdate = async () => {
      const projoRef = doc(db, "projects", router.params.id);
      await updateDoc(projoRef, {
        approvers:arrayUnion(firebaseUser.value.uid),
        
      });
      console.log("approved");
      route.push('/lecturers')
      
    };
     const handleUpdate1 = async () => {
      const projoRef = doc(db, "projects", router.params.id);
      await updateDoc(projoRef, {
        approvers:arrayUnion(firebaseUser.value.uid),
        
      });
      console.log("approved");
      route.push('/lecturers')
      
    };
     const handleUpdate2 = async () => {
      const projoRef = doc(db, "projects", router.params.id);
      await updateDoc(projoRef, {
        approvers:arrayUnion(firebaseUser.value.uid),
        approval:approval.value
        
      });
      console.log("approved");
      route.push('/lecturers')
      
    };
    const handleReject = async () => {
      const projoRef = doc(db, "projects", router.params.id);
      await updateDoc(projoRef, {
        approval: "rejected",
      });
      console.log("approved");
      router.push('/lecturers')
    };
    return { project, approval, handleUpdate, handleReject,handleUpdate1,handleUpdate2 };
  },
};
</script>

<style lang="scss" scoped></style>
