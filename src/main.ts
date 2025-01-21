import {createApp, h, provide} from 'vue';
import router from './router';
import App from './App.vue';
import { DefaultApolloClient} from '@vue/apollo-composable';
import apolloClient from "./apollo.ts";
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
});

app.use(router);
app.mount('#app');