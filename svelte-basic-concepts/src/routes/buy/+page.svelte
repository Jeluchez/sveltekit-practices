<script lang="ts">
    import Counter from "../../components/Counter.svelte";

    let quantity = 1;
    let inventory: number[] = [];
    function addToCart() {
        inventory.push(quantity);
        inventory = inventory;
        quantity = ++quantity;
    }
    $: remaining = 11 - quantity;
</script>

<div>Your shopping cart has {quantity - 1} items.</div>
<button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={addToCart}>Add To Cart</button
>
<div class="bg-red-200 text-lg">Remaining Inventory: {remaining}</div>

<div>{inventory}</div>

<h1>Counter component</h1>
<Counter />
