import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


// Defina as traduções para cada idioma
const messages = {
  en: {
    greeting: 'Hello!',
    description: 'This is a sample description in English.',
    aboutme: "",
  },
  pt: {
    greeting: 'Olá!',
    description: 'Esta é uma descrição de exemplo em português.',
    aboutme: "",
    }
}

const i18n = createI18n({
  locale: 'en',
  messages
})


createApp(App).use(router).use(i18n).mount('#app')

