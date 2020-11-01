<script>
  // export let emoji;
  // let currentEmoji = emoji;
	// setTimeout(function() {
  // 	currentEmoji = '😍';
  // }, 1000)
  
  export let currentEmoji;
  let current = 'button1';
</script>

<style>
  div {
    font-size: 3em;
    margin-bottom: 0.5em;
  }
  /* button {
    color: orange;
  }
  .active {
    background-color: #db1057;
    color: #fff;
  } */
</style>

<div>{currentEmoji}</div>
<button
  class="btn"
  class:btn-primary={current === 'button1'}
  on:click={() => current = 'button1'}>
  Button 1
</button>
<button
  class="btn"
  class:btn-primary={current === 'button2'}
  on:click={() => current = 'button2'}>
  Button 2
</button>
<button
  class="btn"
  class:btn-primary={current === 'button3'}
  on:click={() => current = 'button3'}>
  Button 3
</button>