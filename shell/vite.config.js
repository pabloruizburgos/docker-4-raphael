import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
},
cacheDir: 'node_modules/.cacheDir',
plugins: [
    vue(),
    federation({
        name: 'layout',
        filename: 'remoteEntry.js',
        remotes: {
            // Abstractamente 'home' apunta a la vista del 
            // formulario ubicado en 
            // "microfrontend-1-formulario/src/components/Formulario.vue"
            'mf-accounts': { 
                external: `Promise.resolve('http://localhost:3001/assets/remoteEntry.js')`,
                externalType: "promise"
            },
            'mf-transactions': {
                external:`new Promise(resolve=>resolve('http://localhost:3002/assets/remoteEntry.js'))`,
                externalType:"promise"
            },
            'mf-movements': 'http://localhost:3003/assets/remoteEntry.js',
            'mf-user-preferences': 'http://localhost:3004/assets/remoteEntry.js'
        },
        shared: {
            vue:{
                // This is an invalid configuration, because the generate attribute is not supported on the host side
            },
            pinia:{
            }
        }
    })
],
build: {
    target: 'es2015',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
        output: {
            minifyInternalExports: false
        }
    }
},
esbuild: {
    target: 'es2015'
},
define: {
    global: 'globalThis'
}
})
