#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax";

export async function currentBranch() {
  const branch = await $`git branch --show-current`.text();
  console.log(branch);
  Deno.exit();
}
// $.shell = "C:/Program Files/Git/git-bash.exe"
