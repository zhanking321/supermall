<template>
  <div class="profile-body">
    <div v-for="(item, idx) in listData" :key="idx" class="row">
        <span class="icon">
            <img :src="item.icon" alt="">
        </span>
        {{item.info}}
    </div>    
  </div>
</template>

<script>
export default {
    name: "ProfilBody",
    props: {
        listData: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .profile-body{
        font-size: 15px;
        color: #333;
        border-bottom: 20px solid rgb(243, 237, 237);
    }

    .row{
        padding-left: 20px;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }

    .row:last-child{
        border-bottom:none
    }

    .icon{
        position: relative;
        top: 5px;
    }
</style>