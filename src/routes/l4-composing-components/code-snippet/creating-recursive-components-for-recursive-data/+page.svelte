<script lang="ts">
  import JsonPresenter from "./JSONPresenter.svelte";
  import JsonPresenterSelf from "./JsonPresenterSelf.svelte";
  import JsonTree from "./JsonTree.svelte";

  const folder = [
    { type: "file", name: "a.js" },
    { type: "file", name: "b.js" },
    { type: "folder", name: "c", children: [{ type: "file", name: "d.js" }] },
  ];
</script>

<JsonPresenter {folder} />

<hr />
svelte:self

<JsonPresenterSelf {folder} />
<hr />
JSON tree viewer
<br />
<JsonTree data={folder} />
