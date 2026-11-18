// The entry an app loads states the same name and needs as the code it re-exports.
import * as entry from "../index.js";
import * as lib from "../lib/index.js";
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
if (!same(entry.name, lib.name) || !same(entry.inject, lib.inject) || typeof entry.apply !== "function") {
  console.error("FAIL: index.js does not match lib/index.js", { entry: [entry.name, entry.inject], lib: [lib.name, lib.inject] });
  console.log("ENTRY SMOKE FAILED");
  process.exit(1);
}
console.log("ENTRY SMOKE PASSED");
