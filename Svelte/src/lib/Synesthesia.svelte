<script lang="ts">
    // imported assets
    import { Button } from 'sveltestrap';
    import WordCloud from 'wordcloud';
    // import createGraph from 'ngraph.graph';
    // import renderGraph from 'ngraph.pixel';
    // import nthree from 'ngraph.three';

    // let graph = createGraph();
    // let graphics = nthree(graph, {interactive: true});
    // function createNodeUI(node) {
    //     return {
    //         color: 0xFF00FF,
    //         size: 20
    //     };
    // };

    function click(){
        let text: string = document.querySelector('input').value; 
        let words: string[] = text?.split(' ');
        let wordTuples = words .map(d => [d, d.length * 10]);
        // alert(text);
        // alert(words.length);
        // alert(wordTuples[0]);

        WordCloud(document.getElementById('wordcloud-canvas'), { list: wordTuples } );
        // graph.addNode(words[0], 0);
        // for(let i = 1; i < words.length; ++i) { 
        //     graph.addNode(words[i], i);
        //     graph.addLink(words[i - 1], words[i]);
        // }
        
        // var renderer = renderGraph(graph, {
        //     node: createNodeUI
        // });

        // renderer.on('nodehover', function(node) {
        //     console.log(JSON.stringify(node));
        // });
        // graphics.run();
    };
</script>

<div>
    <h2>Synesthesia</h2>
	<input type='text' id='synesthesia-input' placeholder='Enter word here...'/>
    <Button class='primary' type='submit' name='submit' size='lg' on:click={click}>Submit</Button>
    <canvas id='wordcloud-canvas'></canvas>
</div>