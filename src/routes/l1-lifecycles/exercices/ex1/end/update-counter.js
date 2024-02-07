import { afterUpdate } from "svelte";
import { writable } from "svelte/store";

export function createUpdateCounter() {
  let updateCount = writable(0);

  let measuring = false;

  afterUpdate(() => {
    if (measuring) {
      // THIS WILL NOT WORK!!! updateCount.update(($count) => $count++);
      //END.
      updateCount.update(($count) => ($count = $count + 1));
      // or will both work with without $ sign
      // updateCount.update((count) => count++);
    }
  });

  function startMeasuring() {
    updateCount.set(0);
    measuring = true;
  }

  function stopMeasuring() {
    measuring = false;
  }

  return { updateCount, startMeasuring, stopMeasuring };
}
