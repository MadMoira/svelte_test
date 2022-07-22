<script>
import { onMount } from "svelte";
    let data = [];

    onMount(async() => {
        const res = await fetch("synthesis_actions.json")
        data = await res.json();
    });
</script>

{#each data as action}
    <div class="action">
        <h2>{action.name}</h2>
        <p>{action.description}</p>
        <img src="{action.icon}" alt="">
    </div>
{/each}
