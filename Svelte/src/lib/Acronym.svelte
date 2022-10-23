<script lang="ts">
    // imported assets
    import * as jq from 'jquery';

    // local assets
    let text: string = jq('#acronym-input').textContent; 
    function naiveAcronym(s: string){
        return s.split(' ').map(word => word[0]);
    };
</script>

<div>
    <h2>Acronym</h2>
    <input type='text' id='acronym-input' placeholder='Enter word here...'/>

    <div>
        <quote>
            A.C.R.O.N.Y.M. goes here
        </quote>
    </div>
</div>