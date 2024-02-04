import { onMount } from "svelte";
export function externalOnMountSetup() {
  onMount(() => console.log("onMount! from 'externalOnMountSetup'"));
}
