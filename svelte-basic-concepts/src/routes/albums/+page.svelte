<script lang="ts">
    import AlbumsItem from "../../components/AlbumsItem.svelte";

    export let data;

    const mapAlbums = () => {
        const list = data.albums.map((album) => {
            let addedPhoto = null;
            for (let i = 0; i < data.photos.length; i++) {
                if (album.id === data.photos[i].albumId) {
                    addedPhoto = data.photos[i];
                    break;
                }
            }
            return {
                title: album.title,
                image: {
                    src: addedPhoto?.url,
                    alt: addedPhoto?.title,
                },
            };
        });

        return list;
    };
    const albums = mapAlbums();
</script>

<div class="albums-container">
    {#each albums as album}
        <AlbumsItem {...album} />
    {/each}
</div>

<style lang="scss">
    .albums-container {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        justify-content: space-between;
        padding: 32px;
    }
</style>
