<script lang="ts">
    // imported assets

    // local assets
    function naiveAcronym(s: string){
        return s?.split(' ').map(word => word[0]);
    };
    function input(){
        let text: string = document.querySelector('input')?.value;
        document.querySelector('quote').textContent = text;
    }
</script>

<div>
    <h2>Acronym</h2>
    <input type='text' id='acronym-input' placeholder='Enter word here...' on:input={input}/>
    <div>
        <quote id="acronym"></quote>
    </div>
</div>