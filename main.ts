import { Args } from "@std/cli/parse-args";
import { versionCmd } from "~/commands/index.ts";
import { currentBranch } from "~/commands/git-branch.ts";
import { getParsedArgs } from "~/shared/lib/get-parsed-args.ts";
import isArgsEmpty from "~/shared/lib/is-args-empty.ts";

import { red } from "@std/fmt/colors";

function main(argv: Args) {
  if (argv.version) {
    return versionCmd();
  }

  if (argv.branch) {
    return currentBranch();
  }
}

if (import.meta.main) {
  const argv = getParsedArgs(Deno.args);

  if (isArgsEmpty(argv)) {
    console.error(red("Run cq --help for more information."));
    Deno.exit(1);
  }

  main(argv);
}
