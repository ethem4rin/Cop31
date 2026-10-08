import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proje OneDrive ile eşitlenen bir klasörde. OneDrive'ın sanal dosya
    // katmanı, Windows'un dosya değişikliği bildirimlerini güvenilir şekilde
    // iletmiyor; bu yüzden kaydettiğin değişiklikler bazen tarayıcıya
    // yansımıyordu. Yoklama (polling) modu bunu çözer.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
