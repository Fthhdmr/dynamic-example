<template>
  <div class="home">
    <div class="container">
      <!--<pre> {{data}} </pre>-->
      <!-- Önemli Haber -->
      <div class="row">
        <div v-for="news in featuredNews" v-bind:key="news.id" class="cart">
          <img class="content-img" src="http://placehold.it/800x389" :alt="news.title" />
          <div class="content col-lg-12">
            <h2>{{ news.title }}</h2>
            <p>{{ news.snippet }}</p>
            <router-link class="btn-link" :to="{name: 'detail', params: {id: news.id}}">Detaya Git</router-link>
          </div>
        </div>
      </div>
      <!-- Daha Az Önemsiz Haber -->
      <div class="row">
        <div v-for="news in nonFeaturedNews" v-bind:key="news.id" class="cart-2">
          <img class="content-img" src="http://placehold.it/800x389" :alt="news.title" />
          <div class="content col-lg-12">
            <h2>{{ news.title }}</h2>
            <p>{{ news.snippet }}</p>
            <router-link class="btn-link" :to="{name: 'detail', params: {id: news.id}}">Detaya Git</router-link>
          </div>
        </div>
      </div>  
      <div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    detayGit(id) {
      this.$router.push({
        name: "detail",
        params: {
          id: id
        }
      });
    },
    getItem() {
      axios.get("http://sandbox.arabamd.com/news").then((response) => {
        this.data = response.data;
      });
    },
  },
  created() {
    this.getItem();
  },
  computed: {
    featuredNews() {
      return this.data.filter(news => news.isFeatured)
    },
    nonFeaturedNews() {
      return this.data.filter(news => !news.isFeatured)
    }
  }
};
</script>


<style lang="scss">
  .home {
    .cart {
      color: white;
      background: black;
      margin-top: 50px;
      margin-bottom: 50px;
      .btn-link {
          position: relative;
          font-weight: 700;
          color: white;
          text-decoration: underline;
        }
      img {
        width: 100%;
        height: auto;
      }
      .content {
        padding: 20px 20px;
        h2 {
        font-size: 2rem;
        left: 20px;
        }
        p {
          font-size: 1.2rem;
          font-weight: 300;
          left: 20px;
        }
      }
    }
    .cart-2 {
      color: white;
      background: black;
      margin-top: 50px;
      margin-bottom: 50px;
      .btn-link {
          position: relative;
          font-weight: 700;
          color: white;
          text-decoration: underline;
        }
      img {
        width: 100%;
        height: auto;
      }
      .content {
        padding: 20px 20px;
        h2 {
        font-size: 2rem;
        left: 20px;
        }
        p {
          font-size: 1.2rem;
          font-weight: 300;
          left: 20px;
        }
      }
    }
  }
</style>