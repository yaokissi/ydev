<script>
    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import ProExperiences from "$lib/components/ProExperiences.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
    import "../app.css";
    import { onMount } from "svelte";

    let modelSrc = "../models/hacker-room.glb";
    onMount(() => {
        import("@google/model-viewer");
    });
</script>

<header>
    <TopNavbar></TopNavbar>

    <div class="
                   bg-[#010103]
         "
    >
        <p class="text-white text-center text-3xl pt-35 ">Hi, I'm Yao The big </p>
        <h1
                class="
            ml-10 font-bold text-2xl text-white mt-10 text-center
           "
        >
            Frontend Developer passionate about creating beautiful websites.
        </h1>
        <div class="
                    bg-[url(/assets/HomePageCover.webp)]
                    bg-center
                    bg-no-repeat
                    bg-contain
                    "
        >
            <model-viewer
                    class=""
                    src={modelSrc}
                    alt="My setup 3d model"
                    auto-rotate
                    camera-controls
                    camera-orbit="180deg 65deg 105%"
                    field-of-view="30deg"
                    disable-zoom
                    loading="lazy"
                    style="width: 100%; height: 650px;">
            </model-viewer>
        </div>

        <div class="flex justify-center mt-10">
        <button class="border border-gray-300  text-gray-800 px-5 py-2 rounded cursor w-100 hover:bg-gray-10 text-white">
            <span class="btn-ping_dot"></span>
            Let's Work Together
        </button>
        </div>
    </div>
</header>
<AboutSection
id="about">

</AboutSection>
<ProExperiences></ProExperiences>
<hr class="text-gray-700">
<FooterSection></FooterSection>
<style>
    @import "tailwindcss";
* {
    background-color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
        .btn-ping_dot {
            position: relative;
            display: inline-flex;
            margin-right: 20px;
            height: .75rem;
            width: .75rem;
            border-radius: 9999px;
            --tw-bg-opacity: 1;
            background-color: rgb(34 197 94 / var(--tw-bg-opacity));
        }
hr {

}
</style>