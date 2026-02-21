import bun from "bun"

console.log("build start");

const output = await bun.build({
    entrypoints: [
        "./src/main.ts"
    ],
    outdir: "./dist",
    target: "node",
    format: "esm",
    external: [],
    minify: true
});

console.log("build finished: " + (output.success ? "successful" : "failure"));
