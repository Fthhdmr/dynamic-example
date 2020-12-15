<template>
    <div class="container">
        <div class="detail-cart">
            <img src="http://placehold.it/800x389" :alt="detay.title">
            <h2>{{ detay.title }}</h2>
            <h3>{{ detay.snippet }}</h3>
            <p>{{ detay.body }}</p>

            <!-- <pre> {{detay}} </pre> -->
         </div> 
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            detay: {},
        }
    },
    created() {
        const id = this.$route.params.id;
         Axios.get(`http://sandbox.arabamd.com/news/${id}`)
        .then((response) => {
            this.detay = response.data;
        })
    },
}
</script>

<style lang="scss">
.detail-cart {
    margin-top: 50px;
    margin-bottom: 50px;
    img {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
    }
    h2 {
        font-size: 2rem;
        left: 20px;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        left: 20px;
    }
}
</style>