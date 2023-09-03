<script>
    // import on mount
    import { onMount } from 'svelte';
    // onMount, alert hi
    onMount(() => {
        // Set nav.gb and nav.m.gb to active
        document.getElementById('nav.m.gb').classList.add('active');
        document.getElementById('nav.gb').classList.add('active');
        // Remove activate from nav.home and nav.m.home
        document.getElementById('nav.m.home').classList.remove('active');
        document.getElementById('nav.home').classList.remove('active');
    });    
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data.gradebook)
</script>
<table class="border medium-space">
    <thead>
      <tr>
        <th><b>Class</b></th>
      <th><b>Teacher</b></th>
    <th><b>Grade</b></th>
      </tr>
    </thead>
    <tbody>
        {#each data.gradebook.Gradebook.Courses.Course as selected}
        <tr>
        <td>{selected.Title}</td>
        <td>{selected.Staff}</td>
        <td>{selected.Marks.Mark.CalculatedScoreString}</td>
    </tr>
    {/each}
    </tbody>
  </table>