/* eslint-disable */
<template>
  <div id="app">
    <div class="profile">
      <div class="profile-img">
        <img src="https://avatars.githubusercontent.com/u/188633910?v=4" alt="Foto de Perfil" class="evt-img">
      </div>
      <div class="me">
        <h1>blackbird</h1>
        <a style="display:flex; align-items:center; justify-content: center" href="https://youtube.com/@blackbirdsrn?sub_confirmation=1">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="30px" style="padding-right:5px"/><p>@blackbirdsrn</p>
        </a>
      </div>

      <p class="contact">
        <!-- Botão de escolha de idioma -->
        <label class="language-switcher">
          <input type="checkbox" v-model="isEnglish" @change="toggleLanguage">
          <span class="slider round"></span>
          <span class="select-en"><img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" width="20px" height="20px"/></span>
          <span class="select-ptbr"><img src="https://cdn-icons-png.flaticon.com/128/630/630591.png" width="21px" height="21px"/></span>
        </label>

      </p>
    </div>
    <!--<div class="links">
      <a href="https://github.com/"><button class="link-btn"><i class="fa-brands fa-github"></i> GitHub</button></a>
      <button @click="openModal('Portfólio')" class="link-btn"><i class="fa-solid fa-briefcase"></i> Portfólio</button>
      <a href="https://dev.to/"><button class="link-btn"><i class="fa-brands fa-dev"></i> dev.to</button></a>
    </div>
    -->
    <transition name="fade">
      <div v-if="selectedLink" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <button @click="closeModal" class="close-button">&times;</button>
          <h2 class="modal-title">{{ selectedLink }}</h2>
          <div class="modal-content">
            <p v-if="selectedLink === 'GitHub'">
              Github
            </p>
            <p v-if="selectedLink === 'dev.to'">
            </p>
          </div>
        </div>
      </div>
    </transition>
    <TtsComponent />
    <NewsComponent />
   <!--<FooterComponent />-->
  </div>
</template>

<script>
import TtsComponent from './components/TtsComponent.vue'
import NewsComponent from './components/NewsComponent.vue'
//import FooterComponent from './components/FooterComponent.vue'


export default {
  data() {
    return {
      selectedLink: null
    }
  },
  components: {
    TtsComponent,
    NewsComponent,
    //FooterComponent,
  },
  computed: {
    // Obter o idioma atual diretamente do i18n
    currentLanguage() {
      return this.$i18n.locale;
    }
  },
  methods: {
    openModal(link) {
      this.selectedLink = link;
    },
    closeModal() {
      this.selectedLink = null;
    },
    toggleLanguage() {
      const newLanguage = this.currentLanguage === 'pt' ? 'en' : 'pt';
      this.$i18n.locale = newLanguage;
      console.log(newLanguage)
      localStorage.setItem('language', newLanguage);
    }
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  padding: 10px;
  min-height: 85vh;
}

/* Perfil e Links em Layout Desktop */
.profile {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

.profile h1 {
  font-family: 'Ubuntu', sans-serif;
  margin-top: 20px;
  margin-bottom: -5px;
  font-size: 20px;
  color: white;
}

.profile p {
  font-family: 'Ubuntu', sans-serif;
  font-style: italic;
  color: #931010;
  font-size: 10px;
}

.profile-img {
  margin: 0 auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  /*background: linear-gradient(4deg, red, yellow, #e6530e, #ed232a, #ed232a, #db0909, red);*/
  /*border: 2px solid transparent;*/
  /*overflow: hidden; / Esconde partes do pseudo-elemento que saem do círculo */
  /*box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para dar um efeito de destaque */
}

.evt-img {
  border-radius: 50%;
  border: 5px solid black;
  width: 90px;
}

.contact {
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 20px;
}

a {
  text-decoration: none;
}

.links {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.links button {
  padding: 25px;
  margin-bottom: 30px;
}

/* Estilos dos Botões */
.link-btn {
  background-color: #1f1e1e;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 1px #d81515;
}
.link-btn i {
  margin-right: 10px;
}
.link-btn:hover {
  color: black;
  background-color: white;
  box-shadow: 3px 5px 1px red;
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
  color: black;
}

.modal-content {
  color: black;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  color: #c0c0c0;
}

.close-button:hover {
  color: #555;
}

.projects {
  text-align:center;
  margin: 10px 0px;
  padding: 25px 60px;
}

.projects a {
  color: black;
}

.fa-bullseye {
  color: red;
  font-size: 6px;
}

.projects p {
  font-size: 20px;
}

#img-sft img {
  width: 25%;
}

.email-btn {
  margin-top: 15px;
  margin-right:10px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  float: right;
  border: 1px solid black;
  border-radius: 50px;
}

.email-btn:hover {
    background-color: white;
    color: black;
}

.email-btn a {
  color: white;
}

/* Remover o highlight que aparece ao clicar nos cards */
.card, .email-btn {
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.card:focus, .card:active, .email-btn:focus, .email-btn:active {
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent; 
}

a {
  -webkit-tap-highlight-color: transparent;
}

* {
  -webkit-tap-highlight-color: transparent;
}

/* Responsividade para dispositivos móveis */
@media screen and (max-width: 767px) {
  #app {
    margin-top: 8px;
  }

  .contact {
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .links {
    display: block;
    text-align: center;
    padding: 25px;
  }

  .links button {
    padding: 20px;
    margin-bottom: 35px;
  }

  .link-btn {
    margin-bottom: 10px;
    width: 100%;
    font-size: 1rem;
    padding: 10px;
  }

  .modal {
    max-width: 95%;
    max-height: 90%;
    padding: 15px;
  }

  .modal-title {
    font-size: 1.2rem;
  }

  .projects p {
    margin-top: 10px;
    margin-bottom: 35px;
  }

  #img-sft img{
    width: 20%;
  }
}


.language-switcher {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  transform: translateY(10%);
}

input {
  opacity: 0;
  width: 0;
  height: 0;
}

.select-ptbr, .select-en {
  position: absolute;
  font-size: 14px;
  top: 10px;
  color: #fff;
}

.select-ptbr {
  left: 10px;
}

.select-en {
  right: 10px;
}

/* Slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f1e1e;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 36px;
  width: 36px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider:before {
  transform: translateX(40px);
}
</style>
