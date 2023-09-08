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
<svelte:head>
	<!--Set title to Grades - {data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Title}-->
	<title>Your Grades - gsm.st</title>
</svelte:head>
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
				<td><a href="/gradebook/{selected.Period}">{selected.Title}</a></td>
				<td><a href="/gradebook/{selected.Period}">{selected.Staff}</a></td>
				<td><a href="/gradebook/{selected.Period}">{selected.Marks.Mark.CalculatedScoreString}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
