<template>
  <div>
    <div class="w-64 rounded overflow-hidden shadow-lg transition duration-1000 hover:scale-110 cursor-pointer">
      <img
        class="w-full"
        src="https://cdn.pixabay.com/photo/2018/02/16/10/23/web-3157323__340.jpg"
        alt="Project photo"
      />
      <div class="px-6 py-4">
      
        <div class=" text-xl mb-2 text-gray-600">{{project.field_area}}</div>
        <p class="text-gray-700 text-base">{{project.title.slice(0,22)}} <span v-if="project.title.length > 22" class="text-gray-800 text-base">...</span></p>
      </div>
      <div class="px-6 pt-4 pb-2 flex items-center start">
        <span
          class="inline-block px-3 py-1 text-sm  text-gray-500 mr-2 mb-2"
          >By:</span
        >
        <span
          class="inline-block  px-3 py-1 text-sm text-gray-500 mr-2 mb-2"
          >{{project.first_name}} {{project.last_name}}</span
        >
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'project'
  ],
  setup(props) {
    console.log(props.project)
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
