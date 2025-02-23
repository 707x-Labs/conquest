import { Args } from "@std/cli/parse-args";
import { empty } from "~/shared/lib/check-nullish.ts";

export function invalidCmd(args: Args) {
  if (args._.length !== 1 || empty(args._[0])) {
    console.error(`Run cq --help for more information.`);
    Deno.exit(1);
  }
  return;
}
