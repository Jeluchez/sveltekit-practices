<script>
    import { count } from "$lib/store/store";
    import Incrementer from "../components/Incrementer.svelte";
    import Decrementer from "../components/Decrementer.svelte";
    import Reseter from "../components/Reseter.svelte";
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Reseter />
