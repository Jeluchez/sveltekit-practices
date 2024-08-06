<script>
    import { count } from "$lib/store/store";

    function increment() {
        count.update((n) => n + 1);
    }
</script>

<button on:click={increment}> + </button>
