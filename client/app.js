import Vue from 'vue';
import App from './App.vue';

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('https://kanban-ajengrf.herokuapp.com');
// const socket = io('http://localhost:3000');

Vue.use(VueSocketIOExt, socket);

new Vue({
  render:
    createElement => createElement(App)
}).$mount('#kanban');

