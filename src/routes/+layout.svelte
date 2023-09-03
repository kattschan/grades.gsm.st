<script>
    /** @type {import('./$types').PageData} */
    export let data;
  console.log(data.info);
</script>

<nav class="left m l">
    <a id="nav.home" href="/">
      <i>home</i>
      <div>Home</div>
    </a>
    <a id="nav.gb" href="/gradebook">
      <i>fact_check</i>
      <div>Gradebook</div>
    </a>
    <a class="bottom" href="/logout">
      <i>logout</i>
      <div>Sign Off</div>
    </a>
    <a>
      <div>v0.2a alpha</div>
    </a>
</nav>
  
  <nav class="bottom s">
      <a id="nav.m.home" href="/">
          <i>home</i>
          <div>Home</div>
        </a>
        <a id="nav.m.gb" href="/gradebook">
          <i>fact_check</i>
          <div>Gradebook</div>
        </a>
        <a class="bottom" href="/logout">
          <i>logout</i>
          <div>Sign Off</div>
        </a>
  </nav>
  
  <main class="max responsive">
    <slot />
  </main>