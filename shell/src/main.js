import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());

Promise.all([
    import("mf-accounts/AccountForm").catch(err => {
        console.error("Error loading mf-accounts:", err);
        return { default: { template: '<div>Error loading Accounts</div>' } };
    }),
    import("mf-movements/MovementsList").catch(err => {
        console.error("Error loading mf-movements:", err);
        return { default: { template: '<div>Error loading Movements</div>' } };
    }),
    import("mf-transactions/TransactionsList").catch(err => {
        console.error("Error loading mf-transactions:", err);
        return { default: { template: '<div>Error loading Transactions</div>' } };
    }),
    import("mf-user-preferences/UserPreferencesForm").catch(err => {
        console.error("Error loading mf-user-preferences:", err);
        return { default: { template: '<div>Error loading UserPreferences</div>' } };
    })
]).then(([Accounts, Movements, Transactions, UserPreferences]) => {
    app.component("Accounts", Accounts.default || Accounts);
    app.component("Movements", Movements.default || Movements);
    app.component("Transactions", Transactions.default || Transactions);
    app.component("UserPreferences", UserPreferences.default || UserPreferences);

    app.mount("#app");
}).catch(err => {
    console.error("Error initialazing app:", err);
    app.mount("#app");
});
