<template>
  <div>
    {{ this.$store.getters.sayHello }}
    <input type="text" v-model="value" />
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: null
    }
  },
  methods: {
    changeName() {
      this.$store.dispatch('changeName', this.value)
    }
  }
}
</script>