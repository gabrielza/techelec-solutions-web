#!/usr/bin/env node
/**
 * Create a brand-new Netlify site for the Techelec Solutions marketing website
 * and deploy it to production. Refuses to run if this folder is already linked
 * to an existing Netlify site, so we never accidentally overwrite an unrelated
 * project.
 *
 * Usage:  npm run deploy:new
 *
 * Requires: `netlify-cli` installed globally (`npm i -g netlify-cli`)
 *           and `netlify login` already run once.
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const SITE_NAME = "techelec-solutions";
const root = process.cwd();
const linkedStateFile = resolve(root, ".netlify", "state.json");

function run(cmd, opts = {}) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

if (existsSync(linkedStateFile)) {
  console.error(
    `\n✖ This folder is already linked to a Netlify site (.netlify/state.json exists).\n` +
    `  If that is the Techelec Solutions site, just run:  npm run deploy\n` +
    `  Otherwise unlink it first:                         netlify unlink\n` +
    `  Then re-run:                                       npm run deploy:new\n`
  );
  process.exit(1);
}

console.log(`\n► Creating a brand-new Netlify site for "${SITE_NAME}"…`);

// 1. Build the static site
run("npm run build");

// 2. Create a new Netlify site (Netlify will append a suffix if the name is taken)
run(`netlify sites:create --name ${SITE_NAME} --with-ci`);

// 3. Production deploy
run("netlify deploy --prod --dir=dist");

console.log(
  `\n✓ Done. Open the Netlify dashboard to:\n` +
    `   • Add the custom domain (techelecsolutions.co.za)\n` +
    `   • Enable form notifications under Forms → quote\n`
);
