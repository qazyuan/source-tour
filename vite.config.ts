import {defineConfig} from 'vitest/config'
export default defineConfig({
  test: {
    coverage: {
      provider: 'c8' // or 'c8'
    },
  },
})
