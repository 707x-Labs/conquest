import { Args, parseArgs } from "@std/cli/parse-args";
import { red } from "@std/fmt/colors";

const options = {
  boolean: ["version", "branch"],
  alias: { v: "version", b: "branch" },
  unknown: () => {
    console.error(red("Run cq --help for more information."));
    Deno.exit(1);
  },
};

/**
 * Parses command-line arguments and returns the args.
 *
 * @param args - The array of command-line arguments (only).
 * @returns The parsed args object.
 */
export function getParsedArgs(args: string[]): Args {
  return parseArgs(args, options);
}
