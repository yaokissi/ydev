<script>
import GlobeComponent from "./GlobeComponent.svelte";

</script>
<div class=" bg-[#010103] p-10 width flex justify-around items-center">
    <div>
        <div class="flex w-full max-w-6xl gap-6 justify-around items-stretch">
            <div class="bg-[#0e0e10] p-8 border border-gray-700 rounded-lg flex-1 max-w-[700px]   flex flex-col">
                <img
                        src="/assets/grid1.png"
                        alt="avatar"
                        class="object-contain w-full h-[276px]"
                />
                <h2 class="text-white font-bold mt-4">Hi, I'm Yao</h2>
                <p class="text-white mt-5">
                    With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.
                </p>
            </div>
            <div class="bg-[#0e0e10] border border-gray-700 p-8 rounded-lg flex-1 max-w-[700px]  flex flex-col">
                <img
                        src="/assets/grid2.png"
                        alt="avatar"
                        class="object-contain w-full h-[276px]"
                />
                <h2 class="text-white font-bold mt-4">Tech Stack</h2>
                <p class="text-white mt-5">
                    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
                </p>
            </div>
        </div>

        <div class=" border border-gray-700 mt-5 bg-[#0e0e10] p-8 rounded-lg ">
            <img
                    src="/assets/grid3.png"
                    alt="avatar"
                    class="object-contain w-full h-[276px]">
            <h2 class="text-white font-bold mt-4 ">My Passion for Coding</h2>
            <p class="text-white mt-5 "> I love solving problems and building things through code. Programming isn't just my profession , t's my passion. I enjoy exploring new technologies, and enhancing my skills. </p>
        </div>
    </div>
    <div class=" rightSideAboutSection p-5 flex flex-col justify-between ">
        <div class="border border-gray-700 mt-5 bg-[#0e0e10] p-8 rounded-lg">
            <img src="/assets/3d-Earth-Globe.svg" alt="globe image" class="object-contain w-full h-[276px]" />
            <h2 class="text-white font-bold mt-4">
                I'm very flexible with time zone communications & locations
            </h2>
            <p class="text-white mt-5">
                I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
            <button class="border border-gray-300 text-gray-800 px-5 py-2 rounded cursor w-full hover:bg-gray-100 text-white mt-4">
                Contact me
            </button>
        </div>
        <div class=" border border-gray-700 mt-5 bg-[#0e0e10] p-8 rounded-lg">
            <img src="/assets/grid4.png" alt="avatar" class="object-contain w-full h-[276px]">
            <h2 class="text-white text-center font-bold mt-2">Contact Me </h2>
            <p class="text-white text-center " >
                <a href="mailto:yaokissi.pro@gmail.com"> yaokissi.pro@gmail.com </a>
            </p>
        </div>
    </div>
</div>

<style>
    .width {
        width: 100%;
        justify-content: space-around;
    }

    .rightSideAboutSection {
        display: flex;
        flex-direction: column;
        height: 100%; /* Changed from h-screen to h-full */
    }
    .rightSideAboutSection > div:first-child {
        flex: 7; /* This makes the first div take up roughly 70% of the space */
    }
    .rightSideAboutSection > div:last-child {
        flex: 3; /* This makes the second div take up roughly 30% of the space */
    }
</style>