<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {
        try {
            const response = await fetch("/api/random-numbers?min=3&max=8", {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            });

            const number = await response.json();
            console.log(number);
        } catch (error) {
            console.error("Error fetching random number:", error);
        }
    });
</script>
