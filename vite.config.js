import { defineConfig } from "vite"; // 定義 Vite 組態
import react from "@vitejs/plugin-react"; // Vite 的 React 插件
import { fileURLToPath } from "url"; // 將 file URL 轉換為檔案路徑
import { dirname } from "path"; // 獲取路徑中的目錄名稱
import path from "path"; // 處裡文件和目錄路徑
import sass from "sass"; // 編譯 SCSS

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 將 '@' 別名設定為指向 src 目錄
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
