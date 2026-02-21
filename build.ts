import bun from "bun"

console.log("build start");

const output = await bun.build({
    entrypoints: [
        "./src/index.ts"
    ],
    outdir: "./dist",
    target: "node",
    format: "esm",
    external: []
});

console.log("build finished: " + (output.success ? "successful" : "failure"));
