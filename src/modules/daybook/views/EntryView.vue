<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">20</span>
            <span class="mx-1 fs-3">Junio</span>
            <span class="mx-2 fs-4 fw-light fw-bold">2022, lunes</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedio hoy?"></textarea>

    </div>

    <FabComponent
        :icon="'fa-save'"
    ></FabComponent>

    <img src="https://i.scdn.co/image/ab67616d0000b273a18291a1854b9b6371ff9663" 
        class="img-thumbnail"
        alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        FabComponent: defineAsyncComponent( () => import('../components/FabComponent.vue'))
    }
}
</script>

<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color:#000000, $alpha: 0.5);
    }

</style>