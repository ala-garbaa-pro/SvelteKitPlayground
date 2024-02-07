// popup-on-mount.js
import { onMount } from "svelte";
import { showPopup } from "./popup";
import { timeoutIdStore } from "./timeoutIdStore";

export function showPopupOnMount(duration) {
  onMount(() => {
    const timeoutId = setTimeout(() => {
      showPopup();
    }, duration ?? 5000);

    console.log("🚀 ~ L12 timeoutId=:", timeoutId);

    timeoutIdStore.set(timeoutId);

    return () => clearTimeout($timeoutIdStore);
  });
}
