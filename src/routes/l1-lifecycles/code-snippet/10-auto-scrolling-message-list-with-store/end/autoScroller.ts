// FILE: autoScroller.ts

import { beforeUpdate, afterUpdate } from 'svelte';

export function setupAutoscroll(div: HTMLElement | null) {
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


}
