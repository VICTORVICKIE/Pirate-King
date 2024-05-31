<script>
    import { onMount } from "svelte";
    import board from "./lib/board"
    let grid;
    const N = 9;

    onMount(() => {
        for (let i = 0; i < N; ++i) {
            const x = i;
            grid.children[x].style.setProperty("--bg-color", "red")
            grid.children[N * N - N + x].style.setProperty("--bg-color", "red")

            const y = i;
            grid.children[N * y].style.setProperty("--bg-color", "red")
            grid.children[N * y + N - 1].style.setProperty("--bg-color", "red")
        }
    });
</script>

<div bind:this={grid} class="grid-container">
    {#each { length: N * N } as _}
        <div class="grid-item"></div>
    {/each}
</div>

<style>
    /* General grid container styling */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(9, 1fr); /* 4 columns */
        grid-template-rows: repeat(9, 1fr); /* 4 rows */
        gap: 5px; /* Optional: space between grid items */
        width: 100%;
        max-width: 400px; /* Optional: limit the maximum width */
        margin: auto;
    }

    /* General grid item styling */
    .grid-item {
        aspect-ratio: 1 / 1; /* Make grid items square */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        color: white;
        font-weight: bold;
        background-color: var(--bg-color, gray);
    }
</style>
