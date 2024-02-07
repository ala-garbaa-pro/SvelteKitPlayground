// Import necessary statements
import { beforeUpdate, afterUpdate } from 'svelte';

// Setup autoscroll function
export function autoScroller() {
    let div: HTMLDivElement | undefined;
    let prevScrollHeight = 0;

    // Before update lifecycle hook
    beforeUpdate(() => {
        // Check if autoscroll is needed
        const shouldAutoscroll =
            div && div.scrollHeight - div.clientHeight <= div.scrollTop + 20;

        if (shouldAutoscroll && div) {
            prevScrollHeight = div.scrollHeight;
        }
    });

    // After update lifecycle hook
    afterUpdate(() => {
        // Perform autoscroll only if needed
        if (prevScrollHeight !== div?.scrollHeight) {
            div?.scrollTo(0, div.scrollHeight);
            prevScrollHeight = div?.scrollHeight || 0;
        }
    });

    // Return the action function
    return function c(node: HTMLDivElement) {
        div = node;

        // Return destroy function
        return {
            destroy() {
                div = undefined;
            },
        };
    };
}
