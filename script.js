<script>
  document.addEventListener("DOMContentLoaded", () => {
    const customButton = document.createElement("custom-sdom");
    const shadowRoot = customButton.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <h1> Shadow DOM Header
        <button> Shadow button </button>
      </h1>
      <style>h1 { color: grey } button { color: grey }</style>`;
    document.body.append(customButton);
  });
</script>
