<script lang="ts">
  import favicon from "$lib/assets/favicon.png";
  import "../app.css";
</script>

<svelte:head>
  <title>BlackPaws SAS</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  <slot />
</main>
