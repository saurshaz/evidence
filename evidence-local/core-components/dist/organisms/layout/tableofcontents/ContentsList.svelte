<script>
	import { onMount, onDestroy } from 'svelte';

	let headers = [];
	let observer;

	function updateLinks() {
		headers = Array.from(document.querySelectorAll('h1.markdown, h2.markdown, h3.markdown'));
	}

	function observeDocumentChanges() {
		observer = new MutationObserver(() => {
			updateLinks();
		});

		headers.forEach((header) => {
			observer.observe(header, { subtree: true, characterData: true, childList: true });
		});

		return observer;
	}

	onMount(() => {
		updateLinks();
		observer = observeDocumentChanges();
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

{#if headers && headers.length > 1}
	<span class="block text-xs sticky top-0 mb-2 text-gray-950 bg-white shadow-white font-medium">
		On this page
	</span>
	{#each headers as header}
		<a href="#{header.id}" class={header.nodeName.toLowerCase()}>
			{header.innerText}
		</a>
	{/each}
{/if}

<style>
	a {

    display: block;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    font-size: 0.75rem;

    line-height: 1rem;

    --tw-text-opacity: 1;

    color: rgb(75 85 99 / var(--tw-text-opacity));

    transition-property: all;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    transition-duration: 200ms
}

	a:hover {

    text-decoration-line: underline
}

	a.h2 {

    padding-left: 0px;

    --tw-text-opacity: 1;

    color: rgb(107 114 128 / var(--tw-text-opacity))
}

	a.h3 {

    padding-left: 1rem;

    --tw-text-opacity: 1;

    color: rgb(107 114 128 / var(--tw-text-opacity))
}

	a.h1 {

    margin-top: 0.75rem;

    display: block;

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    font-weight: 600;

    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    --tw-shadow-color: #fff;

    --tw-shadow: var(--tw-shadow-colored)
}</style>
