import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './style.css';
import App from './App.vue';
import Accounts from "mf-accounts/AccountForm";
import Movements from "mf-movements/MovementsList";
import Transactions from  "mf-transactions/TransactionsList";
import UserPreferences from  "mf-user-preferences/UserPreferencesForm";

const app = createApp(App);
app.component("Accounts", Accounts);
app.component("Movements", Movements);
app.component("Transactions", Transactions);
app.component("UserPreferences", UserPreferences);
 
app.use(createPinia());
app.mount("#app");
