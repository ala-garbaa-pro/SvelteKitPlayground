import { onMount, onDestroy } from 'svelte';

let popupCount = 0;

export function scrollControlManager() {
    onMount(() => {
        if (popupCount++ === 0) {
            document.body.style.overflow = 'hidden';
        }
    });

    onDestroy(() => {
        if (--popupCount === 0) {
            document.body.style.overflow = '';
        }
    });
}
