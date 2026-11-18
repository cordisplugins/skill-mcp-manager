// The plugin as an ACRYL Blends app loads it. The code is lib/, bundled with its npm dependencies (the MCP SDK, cross-spawn) into
// dist/server.js by `npm run build`, because a pull installs nothing. The name and the services it needs are written out here so the
// pull can read them without running the plugin; test/entry-smoke.mjs checks they match lib/index.js.
export const name = "skill-mcp-manager";
export const inject = ["tools", "skills"];
export { apply, Config, PLUGIN_VERSION } from "./dist/server.js";
