import { createApp, VueElement } from 'vue'
import App from './App.vue'
import testApp from './test.vue'

createApp(App).mount('#app')
createApp(testApp).mount('#testing')

