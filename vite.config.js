import path from 'path';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default {
  root: path.resolve(__dirname, 'src'),
  resolve:{
    alias: {
    '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 5775,
    hot: true
  },
  plugins:[
    VitePluginFonts({
      google: {
        families: [
          {
            /**
             * Family name (required)
             */
            name: 'Montserrat',

            /**
             * Family styles
             */
            styles: 'ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ]
      }
    })
  ]
}