<script>
    import Favorites from "../components/Favorites.svelte";
    import Profile from "../components/Profile.svelte";
    import Settings from "../components/Settings.svelte";

    const options = [
        { id: "favorite", component: Favorites },
        { id: "profile", component: Profile },
        { id: "settings", component: Settings },
    ];
    let selected = Favorites;

    const handleChange = (id) => {
        const item = options.find((item) => item.id === id);
        selected = item?.component;
    };
</script>

<div class="flex mx-10 p-4">
    <div class="flex flex-col w-60">
        <button
            class="bg-blue-400 rounded my-4 p-4"
            on:click={() => handleChange("profile")}
        >
            Profile
        </button>
        <button
            class="bg-blue-400 rounded my-4 p-4"
            on:click={() => handleChange("favorite")}
        >
            Favorite
        </button>
        <button
            class="bg-blue-400 rounded my-4 p-4"
            on:click={() => handleChange("settings")}
        >
            Settings
        </button>
    </div>
    <div class="px-8">
        <svelte:component this={selected} />
    </div>
</div>
