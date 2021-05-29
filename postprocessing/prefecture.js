import { writeJSON, readTXT } from "https://deno.land/x/flat@0.0.9/mod.ts";

const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace(".ndjson", ".json");

const rawJson = await readTXT(inputFilename);
const contents = JSON.parse(
  JSON.stringify(rawJson.toString().trim().split("\n").map(JSON.parse))
);

await writeJSON(outputFilename, contents);
