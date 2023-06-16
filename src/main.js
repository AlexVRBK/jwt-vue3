import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import PrimeVue from 'primevue/config';
import './api'


import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyDK9atx1T-bh0DbOLv0P7pYwIBOmx4ZtiI",
    authDomain: "jwt-firebase-vue3-e2a4d.firebaseapp.com",
    projectId: "jwt-firebase-vue3-e2a4d",
    storageBucket: "jwt-firebase-vue3-e2a4d.appspot.com",
    messagingSenderId: "727944835867",
    appId: "1:727944835867:web:6cc232b77621659bccd9be",
    measurementId: "G-YQX2W97KBE"
  }

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')

