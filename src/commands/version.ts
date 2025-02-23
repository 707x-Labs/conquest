import { version } from "~/shared/lib/deno-config.ts";

export function versionCmd() {
  console.log(version);
  Deno.exit();
}
