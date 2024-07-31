<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<form method="POST" action="?/update">
    <div class="formContainer">
        <label>
            Name
            <input type="tex" value={data.user.name} />
        </label>
        <label>
            Type
            <input type="tex" value={data.user.type} />
        </label>
        <label>
            spouse
            <input type="tex" value={data.user.spouse} />
        </label>

        <button>Update</button>
    </div>
</form>

{#if form?.success}
    <p>data were update Successfully</p>
{/if}

<style>
    .formContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
