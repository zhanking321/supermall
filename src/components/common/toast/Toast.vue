<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div> 
</template>

<script>
export default {
    name: 'Toast',
    props: {
        message: {
            type: String,
            default: "詹金颖"
        },
        isShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        z-index: 99;
    }
</style>