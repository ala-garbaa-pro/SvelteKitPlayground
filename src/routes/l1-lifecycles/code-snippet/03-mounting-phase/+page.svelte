<script lang="ts">
  function action(node: HTMLElement) {
    // wat i can do here
    node.setAttribute("data-custom-attribute", "some value");

    const newElement = document.createElement("p");
    newElement.textContent = "New element";
    node.appendChild(newElement);
  }
</script>

<div use:action />
