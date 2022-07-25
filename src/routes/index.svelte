<script>
    import { onDestroy } from 'svelte';

    import synt_data from '$lib/synthesis_actions.json';
    import touch_data from '$lib/touch_actions.json';
    import buff_data from '$lib/buff_actions.json';
    import other_data from '$lib/other_actions.json';

    import { actions } from '$lib/stores/actions_store.js';
    import ListActions from '$lib/components/ListActions.svelte';
    
    let currentActions = [];
    $: macro_text = currentActions.map(function(action){
        return `\\ac "${action}" <wait.3>`;
    }).join("<br>");
     
    const actions_unsubscribe = actions.subscribe(value => currentActions = value);

    function copyMacroToClipboard() {
        let result = currentActions.map(function(action) {
            return `\\ac "${action}" <wait.3>`;
        }).join("\n");
        navigator.clipboard.writeText(result);
    }

    function resetMacro() {
        actions.update(actions => actions = []);
    }

    onDestroy(actions_unsubscribe);
</script>

<div class="flex flex-row">
    <div class="basis-1/2">
        <ListActions title="Synthesis" data={synt_data} />
        <ListActions title="Touch" data={touch_data} />
        <ListActions title="Buff" data={buff_data} />
        <ListActions title="Other" data={other_data} />
    </div>
    <div class="basis-1/2">
        <button class="btn-primary" on:click={copyMacroToClipboard}>Copy macro</button>
        <button class="btn-primary" on:click={resetMacro}>Clear macro</button>
        <p>{@html macro_text}</p>
    </div>
</div>

    


