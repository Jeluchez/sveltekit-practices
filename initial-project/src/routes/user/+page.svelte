<script lang="ts">
    import { getContext } from "svelte";
    const user: any = getContext("user");
</script>

<p>Welcome {$user?.name}</p>
