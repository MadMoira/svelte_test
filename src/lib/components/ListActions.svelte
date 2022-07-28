<script>
    import { actions } from '$lib/stores/actions_store.js';

    export let data;
    export let title;

    function handleClick(action) {
        $actions = [...$actions, action];
    }
</script>

<div class="container md-mx-auto border-2 border-black m-1">
    <p class="mb-6 text-center text-lg font-semibold">{title} Actions</p>
    <div class="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 select-none" >
        {#each data as action}
        <div class="grid justify-items-center border-2 border-black m-1 pt-2 hover:scale-105 active:scale-90" on:click={() => handleClick(action.name)}>
            <img style="width: 32px" src="{action.icon}" alt="">
            <p>{action.name}</p>
        </div>
        {/each}
    </div>
</div>
