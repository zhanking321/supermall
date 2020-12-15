<template>
  <div class="check-button" :class="{checked: isCheck}">
      <img src="~assets/img/cart/tick.svg" >
  </div>
</template>

<script>
export default {
    name: "CheckButton",
    props: {
        isCheck: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
  .check-button{
      border-radius: 50%;
      border: 1px solid grey;
  }

  .check-button img{
      width: 16px;
      height: 16px;
  }

  .checked{
      border-color: var(--color-tint);
      background: var(--color-tint);
  }



</style>