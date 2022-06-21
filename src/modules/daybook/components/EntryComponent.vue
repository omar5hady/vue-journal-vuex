<template>
    <div
        @click="$router.push({name: 'entry', params:{ id:10 } })" 
        class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">20</span>
            <span class="mx-1 fs-5">Junio</span>
            <span class="mx-2 fw-light">2022, lunes</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil et odit veritatis laborum quasi alias nam 
            sapiente praesentium, eius perferendis distinctio? Fugiat rem voluptatum, et enim recusandae pariatur atque? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Molestias atque similique, autem provident ratione doloribus aspernatur 
            officiis! Nesciunt odio cupiditate maxime labore minus, nostrum voluptatibus, voluptates eaque, eius atque porro!
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>