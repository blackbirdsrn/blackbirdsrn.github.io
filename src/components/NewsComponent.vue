<template>
    <div class="news">
      <div class="cards-container">
      <h2><span> {{ $t('principaisvids') }}</span></h2>
  
        <div class="all-cards">
          <div
            v-for="newsItem in news"
            :key="newsItem.id"
            @click="openModal(newsItem)"
            class="card-news"
          >
            <img class="img-news" :src="newsItem.image" alt="News image">
            <h4>{{ newsItem.title }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
          </div>

        <div class="card-news" @click="openModal('google')">
            <img class="img-news" src="https://standfirst-designweek-production.imgix.net/uploads/2015/03/spotify.gif?fit=crop&crop=faces&q=80&auto=compress,format&w=364&h=291&dpr=2.625" alt="@blackbirdsrn">
            <h4>{{ $t('google') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>
          
          <div class="card-news">
            <a href="https://www.youtube.com/shorts/_mmnnJTAnmg" style="color:black">
                <img class="img-news" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I2unW5AuZJpdOeEYrjXLfquvseTp1qD5zw&s" alt="@blackbirdsrn">
                <h4>{{ $t('glb') }}</h4>
                <i id="external-link" class="fa fa-external-link"></i>
            </a>
          </div>
        </div>

        <div class="card-news" @click="openModal('nvidia')">
            <img class="img-news" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwa3cTnrdtdGcHzGnGQj6CuZdKm_VVE3pDSQ&s" alt="@blackbirdsrn">
            <h4>{{ $t('nvidia') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>

        <div class="card-news" @click="openModal('bitcoin')">
            <img class="img-news" src="https://static.vecteezy.com/system/resources/previews/030/314/348/large_2x/close-up-of-bitcoin-crypto-currency-vertical-mobile-wallpaper-ai-generated-free-photo.jpg" alt="@blackbirdsrn">
            <h4>{{ $t('bitcoin') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>
  
        <transition name="fade">
          <div v-if="selectedNews === 'nvidia'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }}{{ $t('nvidia') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> @blackbirdsrn{{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('nvidiasummary') }}
                </p>
                <p style="font-size: 10px">
                  Link: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://www.youtube.com/shorts/uNfgsziy4Ds">https://www.youtube.com/shorts/uNfgsziy4Ds</a>
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'google'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }}{{ $t('google') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> @blackbirdsrn{{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('googlesummary') }}
                </p>
                <p style="font-size: 10px">
                  Link: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://www.youtube.com/shorts/F_tWg3vJSb8">
                    https://www.youtube.com/shorts/F_tWg3vJSb8</a>
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'bitcoin'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }} {{ $t('bitcoin') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> @blackbirdsrn{{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('bitcoinsummary') }}
                </p>
                <p style="font-size: 10px">
                  Link: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://youtube.com/shorts/33yHVOXiA_8">
                    https://youtube.com/shorts/33yHVOXiA_8</a>
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        news: [],
        selectedNews: null
      }
    },
    methods: {
      openModal(item) {
        this.selectedNews = item;
      },
      closeModal() {
        this.selectedNews = null;
      }
    },
    mounted() {
    }
  }
  </script>
  
  <style>
  .news {
      margin-top: 40px;
      margin-left: -20px;
      margin-right: -20px;
      border-radius: 35px;
      background: #232323;
  }
  
  .cards-container {
      padding: 5px 30px;
  }
  
  .cards-container h2 {
      font-size: 40px;
      font-family: 'Times New Roman', Times, serif;
      color: white;
  }
  
  .cards-container span {
      font-family: 'Segoe UI', Ubuntu, 'Open Sans', sans-serif;
      font-size: 25px;
      font-style: italic;
      color: #c1c1c1;
      margin-left: -5px;
  }

  .all-cards {margin-top: 50px;}
  
  .img-news {
      border-radius: 100%;
      width: 50px;
      height: 50%;
      margin-top: -30px;
      display: flex;
      border: 1px solid black;
      float: right
  }
  
  /* Estilos dos cards */
  .card-news {
    background-color: white;
    color: black;
    border: none;
    margin-top: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 10px;
    width: auto;
    height: 100px;
    align-items: center;
    box-shadow: 2px 2px 1px #d81515;
  }
  
  /* Transição do Modal */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Estilos do Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 90%;
    max-height: 80%;
    overflow-y: auto;
    text-align: left;
  }
  
  .modal-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .modal-content {
    color: black;
  }

#external-link {
    margin-top: -25px;
    float: right;
    font-size: 10px;
    color: #2f2f2f;
}

#badge-ia {
    background: black;
    color: white;
    border-radius: 10px;
    font-size: 11px;
    padding: 5px;
}
</style>
