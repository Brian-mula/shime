<template>
  <div class="w-full ml-auto mr-auto">
    <!-- testing -->

    <div class="flex flex-col justify-center bg-gray-100 mx-12 px-5 py-3">
      <div class="p-4 flex flex-col items-center justify-center">
        <img
          src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.6435-9/176481516_3956642414452429_7671499091995897092_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Iyynv4gx54AX_AdR14&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AT84amXa6C54t8_C5xwXPxRKVjDax6Q1tnTkbHWW3RgiOw&oe=62C3CAE3"
          class="h-12 mr-3 sm:h-12"
        />
        <h3 class="p-4 font-bold text-2xl text-gray-600">
          UEAB SENIOR PROJECT PROPOSAL
        </h3>
        <h3 class="p-4 font-bold text-2xl text-gray-600">
          Show us what you learnt
        </h3>
        
      </div>
      <form class="w-full max-w-lg" autocomplete="off">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name:
            </label>
            <input
              v-model="first_name"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Rebecca"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name:
            </label>

            <input
              v-model="last_name"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Nishimwe"
            />
          </div>
        </div>
         <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Project title:
            </label>
            <input
            v-model="title"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>
        </div>
          <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Field Area:
            </label>
            <input
            v-model="field_area"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="mb-3 xl:w-full">
            <label
              class="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold"
              >Project Description:</label
            >
            <textarea
              v-model="description"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-red-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3"
              placeholder="Project description"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="mb-3 xl:w-full">
            <label
              class="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold"
              >Problem Statement:</label
            >
            <textarea
              v-model="problem_statement"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-red-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3"
              placeholder="Problem statement"
            ></textarea>
          </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Phone:
            </label>
            <input
              v-model="phone"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="tel"
              placeholder="Website"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Major:
            </label>
            <div class="relative">
              <select
                v-model="major"
                class="block appearance-none w-full bg-gray-200 border border-red-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option v-for="course in majors" :key="course" :value="course">
                  {{ course }}
                </option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Instructor:
            </label>
            <div class="relative">
              <select
                v-model="instructor"
                class="block appearance-none cursor-pointer w-full bg-gray-200 border border-red-500   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option
                  v-for="teacher in instructors"
                  :key="teacher"
                  :value="teacher"
                >
                  {{ teacher }}
                </option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-5">
          <button
            type="button"
            @click="handleSubmit"
            class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-600 rounded"
          >
            Submit Project
          </button>
        </div>
      </form>
      {{ major }} {{ instructor }}
      {{ description }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { uuid } from 'vue-uuid';



export default {
  async setup() {

definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

const router=useRouter()
const firebaseUser=useFirebaseUser()

    const first_name = ref("");
    const last_name = ref("");
    const description = ref("");
    const problem_statement = ref("");
    const title=ref('');
    const major = ref("");
    const instructor = ref("");
    const phone = ref("");
    const field_area=ref('');
    const approvers=ref([]);
    const majors = ref(["BBIT", "Networking", "Software"]);
    const instructors = ref([
      "Mr.Omambia",
      "Mr.Mayaka",
      "Mr.Sagas",
      "Mrs. Nyamwamu",
      "Madam Kansiime",
    ]);
    
    let db
    onMounted(()=>{
      db=getFirestore()
    })
    const handleSubmit =  async(e) => {
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "projects"), {
          uuid: uuid.v1(),
          uid:firebaseUser.value.uid,
          first_name: first_name.value,
          last_name: last_name.value,
          description:description.value,
          problem_statement:problem_statement.value,
          major:major.value,
          phone:phone.value,
          approval:'pending',
          title:title.value,
          field_area:field_area.value,
          approvers:approvers.value


        });
        console.log("Document written with ID: ", docRef.id);
        router.push('/')
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    };
    const testing = ref("");
    console.log("am in test mode");
    
    return {

      first_name,
      last_name,
      description,
      problem_statement,
      title,
      major,
      field_area,
      phone,
      majors,
      instructors,
      instructor,
      handleSubmit,
      firebaseUser
    };
  },
};
</script>

<style lang="scss" scoped></style>
