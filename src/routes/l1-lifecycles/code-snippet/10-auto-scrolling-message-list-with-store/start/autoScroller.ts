import { beforeUpdate, afterUpdate } from 'svelte';

export function setupAutoscroll() {
    let div: HTMLElement | null = null;
    let prevScrollHeight = 0;

    beforeUpdate(() => {
        // Check if autoscroll is needed
        const shouldAutoscroll =
            div && div.scrollHeight - div.clientHeight <= div.scrollTop + 20;

        if (shouldAutoscroll && div) {
            prevScrollHeight = div.scrollHeight;
        }
    });

    afterUpdate(() => {
        // Perform autoscroll only if needed
        if (prevScrollHeight !== div?.scrollHeight) {
            div?.scrollTo(0, div.scrollHeight);
            prevScrollHeight = div?.scrollHeight || 0;
        }
    });

    return {
        setDiv(_div: HTMLElement) {
            div = _div;
        },
    };
}
