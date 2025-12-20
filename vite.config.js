import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';


// https://vite.dev/config/
export default defineConfig( {
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Icons(),
    Components( {
      resolvers: [IconsResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "$": fileURLToPath(new URL("./src/components", import.meta.url)),
      "#": fileURLToPath(new URL("./src/pages", import.meta.url))
    },
  },
})