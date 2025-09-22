import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import CustomButton from "ui-components/CustomButton";

const app = createApp(App);

app.component("CustomButton", CustomButton);
 
app.use(createPinia());
app.mount("#app");
