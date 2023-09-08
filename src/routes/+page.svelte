<script>
	// import on mount
	import { onMount } from 'svelte';
	// onMount, alert hi
	onMount(() => {
		// Set nav.home and nav.m.home to active
		document.getElementById('nav.home').classList.add('active');
		document.getElementById('nav.m.home').classList.add('active');
		// Remove activate from nav.gb and nav.m.gb
		document.getElementById('nav.gb').classList.remove('active');
		document.getElementById('nav.m.gb').classList.remove('active');
		// Determine if we are saying good morning, good afternoon, or good evening
		let greeting = document.getElementById('greeting');
		let date = document.getElementById('date');
		let today = new Date();
		let hour = today.getHours();
		let minute = today.getMinutes();
		let second = today.getSeconds();
		let day = today.getDate();
		let month = today.getMonth();
		let year = today.getFullYear();
		let time = hour + ':' + minute + ':' + second;
		let dateText = month + '/' + day + '/' + year;
		if (hour < 12) {
			greeting.innerHTML = 'Good Morning!';
		} else if (hour < 18) {
			greeting.innerHTML = 'Good Afternoon!';
		} else {
			greeting.innerHTML = 'Good Evening!';
		}
		date.innerHTML = dateText;
	});

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.schedule);
</script>
<svelte:head>
	<!--Set title to Grades - {data.gradebook.Gradebook.Courses.Course[data.selectedCourse-1].Title}-->
	<title>Home - gsm.st</title>
</svelte:head>
<h2 id="greeting" />
<h6 id="date" />

<table class="border medium-space">
	<thead>
		<tr>
			<th><b>Period</b></th>
			<th><b>Class</b></th>
			<th><b>Time</b></th>
		</tr>
	</thead>
	<tbody>
		{#if data.schedule.StudentClassSchedule.TodayScheduleInfoData.SchoolInfos.SchoolInfo}
			<!-- For each in StudentClassSchedule►TodayScheduleInfoData►SchoolInfos►SchoolInfo►Classes►ClassInfo (in svelte notation, with brackets)-->
			{#each data.schedule.StudentClassSchedule.TodayScheduleInfoData.SchoolInfos.SchoolInfo.Classes.ClassInfo as selected}
				<tr>
					<td>{selected.Period}</td>
					<td>{selected.ClassName}</td>
					<td>{selected.StartTime}-{selected.EndTime}</td>
				</tr>
			{/each}
		{:else if data.schedule.StudentClassSchedule.ClassLists}
			<!-- For each in StudentClassSchedule►ClassLists►ClassListing (in svelte notation, with brackets)-->
			{#each data.schedule.StudentClassSchedule.ClassLists.ClassListing as selected}
				<tr>
					<td>{selected.Period}</td>
					<td>{selected.CourseTitle}</td>
					<td>Unavailable</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
