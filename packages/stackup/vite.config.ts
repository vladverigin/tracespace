// import {defineLibraryConfig} from '../../config/vite.config.base'
// import packageMeta from './package.json'
import {defineConfig} from 'vite'
// import {resolve} from 'node:url'

// export default defineLibraryConfig(packageMeta)
// export default defineLibraryConfig(packageMeta)

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "stackup",
      fileName: "stackup",
    },
    rollupOptions: {
      output: [
        {
          dir: "../../dist",
          name: "trace-core",
          plugins: [],
        },
        // {
        //   dir: "dist/esm",
        //   format: "esm",
        //   entryFileNames: "index.js",
        //   sourcemap: true,
        // },
      ],
      external: ["@uppy/core"],
    },
  },
});