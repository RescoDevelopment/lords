import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "./dist",
  format: ["cjs", "esm"],
  minify: true,
  minifySyntax: true,
  dts: true,
  clean: true,
});
