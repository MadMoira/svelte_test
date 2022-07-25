<script>
    import { actions } from '$lib/stores/actions_store.js';

    export let data;
    export let title;

    function handleClick(action) {
        actions.update(value => [...value, action]) ;
    }
</script>

<div class="container md-mx-auto border-2">
    <p class="mb-6">{title} Actions</p>
    <div class="grid grid-cols-3">
        {#each data as action}
        <div class="grid justify-items-center" on:click={() => handleClick(action.name)}>
            <img style="width: 32px" src="{action.icon}" alt="">
            <p>{action.name}</p>
        </div>
        {/each}
    </div>
</div>
