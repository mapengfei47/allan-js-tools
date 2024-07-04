/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-07-04 11:19:25
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-07-04 11:40:40
 * @FilePath: /allan-js-tools/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import pkg from "./package.json";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "hello",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return "index.mjs";
          case "cjs":
            return "index.cjs";
          default:
            return "index.min.js";
        }
      },
    },
    minify: true,
  },
  plugins: [
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    ),
  ],
});
