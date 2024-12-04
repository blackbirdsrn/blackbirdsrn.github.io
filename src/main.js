import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


// Defina as traduções para cada idioma
const messages = {
  en: {
    telegram: "Access the channel {blackbird} on <a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'>Telegram</a>. <br><button class='email-btn'><a href='t.me/ LjTe1cdGQEs5OTcx' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:30px'> </i></a></button>",
    youtube: "Help the channel grow on YouTube, subscribe! <br><br><a style='color:black; display:flex; align-items:center; justify-content: center'color:black;  href='https://youtube.com/{blackbird}?sub_confirmation=1'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' width='30px' style='padding-right:5px'/> {blackbird}</a>",
    medias: "Diverse and useful topics (Sports, Artificial Intelligence, Economy, and Finance) in the context of Technology. Social media: <h3>{blackbird}</h3>",
    principaisvids: "Principais vídeos",
    badgeia: "{blackbird}",
    google: "Google connects its AI assistant (Gemini) with Spotify.",
    googlesummary: "Google Gemini, the AI assistant, now integrates with Spotify on Android devices. Users can play music using voice commands in English, searching by title, artist, album, or playlist. The integration requires linking Google and Spotify accounts and prioritizes the last music service used. It is the second non-Google app enabled for Gemini.",
    glb: "Mentes Digitais: Série sobre Inteligência Artificial",
    nvidia: "🤖 Fugatto: AI by Nvidia",
    bitcoin: "Guia sobre Bitcoin: A primeira criptomoeda!",
    bitcoinsummary: "This Infomoney guide covers the history of Bitcoin, the first cryptocurrency, created by Satoshi Nakamoto. It explains its decentralized peer-to-peer operation, mining (transaction validation with BTC rewards), purchasing methods (exchanges, ETFs, funds), the differences between Bitcoin and centralized digital currencies, and its volatility. Despite the creator's anonymity, the blockchain's security and investment potential are highlighted, but the high risk is also emphasized.",
  },
  pt: {
    telegram: "Acesse o canal {blackbird} no <a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'>Telegram</a>. <br><button class='email-btn'><a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:30px'> </i></a></button>",
    youtube: "Ajude o canal a crescer no YouTube, inscreva-se! <br><br><a style='color:black; display:flex; align-items:center; justify-content: center'color:black;  href='https://youtube.com/{blackbird}?sub_confirmation=1'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' width='30px' style='padding-right:5px'/> {blackbird}</a>",
    medias: "Assuntos diversos e úteis (Esporte, inteligência Artificial, Economia e Finanças) no contexto da Tecnologia.  Mídias socias: <h3>{blackbird}</h3>",
    principaisvids: "Principais vídeos",
    badgeia: "{blackbird}",
    google: "Google conecta seu assistente de IA (Gemini) com o Spotify.",
    googlesummary: "O Google Gemini, assistente de IA, agora integra o Spotify em aparelhos Android.  Usuários podem reproduzir músicas via comandos de voz em inglês, buscando por título, artista, álbum ou playlist.  A integração exige vincular contas Google e Spotify, e prioriza o último serviço de música usado.  É o segundo aplicativo que não é do Google habilitado ao Gemini.", 
    glb: "Mentes Digitais: Série sobre Inteligência Artificial",
    nvidia: "🤖 Nova IA da Nvidia: Fugatto",
    bitcoin: "Guia sobre Bitcoin: A primeira criptomoeda!",
    bitcoinsummary: "Este guia da Infomoney aborda a história do Bitcoin, a 1ª criptomoeda, criada por Satoshi Nakamoto.  Explica seu funcionamento descentralizado (peer-to-peer), a mineração (validação de transações com recompensa em BTC),  a compra (exchanges, ETFs, fundos),  as diferenças entre Bitcoin e moedas digitais centralizadas, e sua volatilidade.  Apesar do anonimato do criador, a segurança da blockchain e o potencial de investimento são destacados, mas o alto risco também é alertado.",
  }
}

const i18n = createI18n({
  locale: 'pt',
  messages
})


createApp(App).use(router).use(i18n).mount('#app')

