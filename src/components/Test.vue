<template>
  <div class="test">
    Test count: {{ count }}
    data: {{ data }}
  </div>
</template>

<script>import { mapState } from "vuex";

export default {
  name: 'Test',
  computed:{
    ...mapState(['count']),
    aaa(){
      return '123'
    }
  },
  data:()=>({
    data:'132'
  })
}
</script>

<style lang="postcss">
.test {
}
</style>
