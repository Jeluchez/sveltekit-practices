<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.body}</div>

{#await data.comments}
    Loading comments...
{:then comments}
    {#each comments as comment}
        <p>{comment.body}</p>
    {/each}
{:catch error}
    <p>error loading comments: {error.message}</p>
{/await}
