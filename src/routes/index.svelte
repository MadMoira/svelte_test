<script>
    import { onDestroy } from 'svelte';

    import synt_data from '$lib/synthesis_actions.json';
    import touch_data from '$lib/touch_actions.json';
    import buff_data from '$lib/buff_actions.json';
    import other_data from '$lib/other_actions.json';

    import { actions } from '$lib/stores/actions_store.js';
    import ListActions from '$lib/components/ListActions.svelte';
    import MacroResult from '$lib/components/MacroResult.svelte';
    
    let currentActions = [];
    $: macro_text = currentActions.map(function(action){
        return `\\ac "${action}" <wait.3>`;
    }).join("<br>");
     
    const actions_unsubscribe = actions.subscribe(value => currentActions = value);

    function copyMacroToClipboard() {
        let result = currentActions.map(function(action) {
            return `/ac "${action}" <wait.3>`;
        }).join("\n");
        navigator.clipboard.writeText(result);
    }

    function resetMacro() {
        actions.update(actions => actions = []);
    }

    onDestroy(actions_unsubscribe);
</script>

<div class="navbar bg-black">
    <div class="flex-1">
        <a class="text-white btn btn-ghost normal-case text-xl">Maly Crafter</a>
    </div>
</div>

<div class="bg-gray-100 flex sm:flex-row flex-col">
    <div class="sm:basis-2/3" >
        <ListActions title="Synthesis" data={synt_data} />
        <ListActions title="Touch" data={touch_data} />
        <ListActions title="Buff" data={buff_data} />
        <ListActions title="Other" data={other_data} />
    </div>
    <div class="p-3 sm:basis-1/3">
        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn m-1">Macro Options</label>
            <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box">
                <li><div class="btn-info btn glass btn-block" on:click={copyMacroToClipboard}>Copy Macro</div></li>
                <li><div class="btn-info btn glass btn-block" on:click={resetMacro}>Clear Macro</div></li>
            </ul>
        </div>
        <MacroResult />
        <!-- <p class="pt-3">{@html macro_text}</p> -->
    </div>
</div>

    


