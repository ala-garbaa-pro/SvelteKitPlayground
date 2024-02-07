// Importing necessary functions from the 'svelte' library
import { onMount, onDestroy } from 'svelte';
import { writable } from 'svelte/store';

// Defining a module-level Svelte store variable named 'counter' and initializing it with a value of 0
export let counter = writable(0);

// Creating a function named 'setupGlobalCounter' that sets up and manages the lifecycle of the 'counter' variable
export function setupGlobalCounter() {
    // Executing code when the component is mounted to the DOM
    onMount(() => {
        // Updating the 'counter' value by incrementing it by 1
        counter.update($counter => $counter + 1);
    });

    // Executing code when the component is about to be destroyed
    onDestroy(() => {
        // Updating the 'counter' value by decrementing it by 1
        counter.update($counter => $counter - 1);
    });

    // Returning the 'counter' Svelte store, making it accessible to other parts of the application
    return counter;
}
