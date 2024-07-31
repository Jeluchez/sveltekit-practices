<script lang="ts">
    let quantity = 1;
    let price = 4000;
    function addToCart() {
        quantity = ++quantity;
    }
    $: total = price * quantity;

    $: console.log(`the quantity is ${total}`);
</script>

<div>Your shopping cart has {quantity - 1} items.</div>
<button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={addToCart}>Add To Cart</button
>

<h1>Price: {price}</h1>
<h1>Quantity: {quantity}</h1>
<h1 class="font-bold text-lg">Total: {total}</h1>
