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
	console.log(data.gradebook);
</script>
<a href="/gradebook">
<button class="transparent square left left-align">
	<i>arrow_back</i>
  </button>
</a>
<table class="border medium-space">
	<thead>
		<tr>
			<th><b>Asignment</b></th>
			<th><b>Date</b></th>
			<th><b>Grade</b></th>
		</tr>
	</thead>
	<tbody>
		{#each data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Marks.Mark.Assignments.Assignment as selected}
			<tr>
				<td>{selected.Measure}</td>
				<td>{selected.Date}</td>
				<td>{selected.Score}</td>
			</tr>
		{/each}
	</tbody>
</table>
