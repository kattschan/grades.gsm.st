<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.info);
	// Import onmount
	import { onMount } from 'svelte';
	// On mount, alert hi
	onMount(() => {
	// If we are not on grades.gsm.st, show any elements with the class .dev
	if (window.location.hostname !== 'grades.gsm.st') {
		document.querySelectorAll('.dev').forEach((e) => {
			e.style.display = 'block';
		});
	}
});
</script>
<style>
	/*Make any elements with class red red*/
	.red {
		color: red;
	}
	/*Don't display any elements with class dev by default*/
	.dev {
		display: none;
	}
</style>

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
		<div>v0.3 alpha</div>
		<a class="red dev">YOU ARE IN DEVELOPMENT MODE</a>
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
