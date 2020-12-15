<template>
    <div class="tab-bar">
      <slot/>
    </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style>
  .tab-bar{
    background: white;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .15);
  }
</style>