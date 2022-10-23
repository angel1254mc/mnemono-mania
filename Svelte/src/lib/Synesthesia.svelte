<script lang="ts">
    // imported assets
    import { Button } from 'sveltestrap';

	let colorCodes = {};
    $: numColors = Object.keys(colorCodes).length;
    function click(){
        alert('color coding');
    };
</script>

<div>
    <h2>Synesthesia</h2>
	<input type='text' id='synesthesia-input' placeholder='Enter word here...'/>
    <Button name='submit' on:click/>
</div>