<script lang="ts">
    export let title: string;
    export let image: { src: string; alt: string };
</script>

<div class="album-item">
    <p class="text-2xl">{title}</p>
    <img {...image} />
</div>

<style lang="scss">
    p {
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
    }
    .album-item {
        box-shadow: 0px 2px 5px #ddd;
        min-width: 200px;
        padding: 16px;
        border-radius: 7px;
    }
    img {
        width: auto;
        height: 200px;
    }
</style>
