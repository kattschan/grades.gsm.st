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
	<title>{data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Title} - gsm.st</title>
</svelte:head>
<header>
	<nav>
		<a href="/gradebook">
	  <button class="circle transparent">
		<i>arrow_back</i>
	  </button>
	  </a>
	  <h5 class="max">{data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Title}</h5>
	  </nav>
	  </header>
<!--
<a href="/gradebook">
	<div class="row">
<button class="transparent circle">
	<i>arrow_back</i>
  </button>
  <h4 style="text-overflow:ellipsis;">{data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Title}</h4>
</div>
</a>-->
<table class="border medium-space">
	<thead>
		<tr>
			<th><b>Assignment</b></th>
			<th><b>Date</b></th>
			<th><b>Grade</b></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Marks.Mark.Assignments.Assignment as selected}
			<tr>
				<td>{selected.Measure}</td>
				<td>{selected.Date}</td>
				<td>{selected.Score}</td>
				<th>
					<button class="circle transparent">
							<i>calculate</i>
					</button>
				</th>
			</tr>
		{/each}
	</tbody>
</table>