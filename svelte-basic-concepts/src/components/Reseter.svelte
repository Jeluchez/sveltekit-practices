<script>
    import { count } from "$lib/store/store";

    function reset() {
        count.set(0);
    }
</script>

<button on:click={reset}> reset </button>
