<script>
    import { actions } from '$lib/stores/actions_store.js';
    import Sortable, {MultiDrag, Swap} from 'sortablejs';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import arrowsMove from '@iconify/icons-bi/arrows-move';

    let el;

    onMount(() => {
        let sortable = Sortable.create(el, {
            handle: '.sort-icon',
            animation: 150,
            onUpdate: function(evt) {
                console.log($actions);
                [$actions[evt.oldIndex], $actions[evt.newIndex]] = [$actions[evt.newIndex], $actions[evt.oldIndex]];
                console.log($actions);
            }
        });
    });
</script>

<div bind:this={el}>
    {#each $actions as action}
    <div data={action} class="bg-red-200 border-black border-2 m-2"><Icon icon={arrowsMove} class="sort-icon inline my-auto mx-3"/><span>{action}</span></div>
    {/each}
</div>