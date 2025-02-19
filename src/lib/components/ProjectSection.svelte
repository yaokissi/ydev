
<script>
    import { fade, fly } from 'svelte/transition';
    let visible = false;
</script>

<button on:click={() => visible = !visible}>Toggle Image</button>

{#if visible}
    <img
            transition:fly="{{ y: 200, duration: 2000 }}"
            src="/path/to/image.png"
            alt="Flying image"
    />
{/if}