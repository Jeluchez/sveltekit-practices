<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<h1>Settings</h1>
<main>
    <div class="submenu">
        {#each data.sections as section}
            <a href="/settings/{section.slug}">{section.title}</a>
        {/each}
    </div>
    <slot></slot>
</main>

<style lang="scss">
    main {
        display: flex;
        gap: 2rem;
    }
    .submenu {
        display: flex;
        flex-direction: column;
    }
</style>
