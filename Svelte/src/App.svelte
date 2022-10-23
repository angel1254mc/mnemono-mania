<script lang="ts">
  // imported assets
  import svelteLogo from './assets/svelte.svg';
  import Counter from './lib/Counter.svelte';
  import { 
          Dropdown, 
          DropdownItem, 
          DropdownMenu, 
          DropdownToggle,
          Styles
        } from 'sveltestrap';

  // mnemonic categories
  import Acronym from './lib/Acronym.svelte';
  import Synesthesia from './lib/Synesthesia.svelte';

  // local assets
  let page: string = 'Acronym';
</script>
<Styles/>

<main>
  <h1><span style:color='blue'>Mnemono</span> - <span style:color='orange'>Mania</span></h1>

  <Dropdown nav>
    <DropdownToggle nav caret> Memory Technique </DropdownToggle>
    <DropdownMenu dark>
      <DropdownItem header active on:click={()=>{page='Acronym';}}> Acronym </DropdownItem>
      <DropdownItem header on:click={()=>{page='Synesthesia';}}> Synesthesia </DropdownItem>
    </DropdownMenu>
  </Dropdown>

  <div class='lg-4'>
    <script>
      console.log(page)
      console.log(page === 'Acronym');
    </script>
    {#if page === 'Acronym'}
      <Acronym/>
    {:else if page == 'Synesthesia'}
      <Synesthesia/>
    {/if}
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  Dropdown { 
    align: right;
  }
</style>