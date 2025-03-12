<script>
    import { onMount } from "svelte";

    let hasCopied = false;

    function handleCopy() {
        navigator.clipboard.writeText("yaokissi.pro@gmail.com");
        hasCopied = true;

        setTimeout(() => {
            hasCopied = false;
        }, 2000);
    }
</script>
<section class="c-space my-20" id="about">
    <div class="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div class="col-span-1 xl:row-span-3">
            <div class="grid-container">
                <img src="src/assets/grid1.png" alt="grid-1" class="w-full sm:h-[276px] h-fit object-contain" />

                <div>
                    <p class="grid-headtext">Hi, I’m Adrian Hajdin</p>
                    <p class="grid-subtext">
                        With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                        and responsive websites.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-span-1 xl:row-span-3">
            <div class="grid-container">
                <img src="src/assets/grid2.png" alt="grid-2" class="w-full sm:h-[276px] h-fit object-contain" />

                <div>
                    <p class="grid-headtext">Tech Stack</p>
                    <p class="grid-subtext">
                        I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                        applications
                    </p>
                </div>
            </div>
        </div>

        <div class="col-span-1 xl:row-span-4">
            <div class="grid-container">
                <div class="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <img
                            alt="globe"
                            class="object-contain w-full h-[276px]"
                            src="/src/assets/3d-Earth-Globe.svg"
                    >
                </div>
                <div>
                    <p class="grid-headtext">I’m very flexible with time zone communications & locations</p>
                    <p class="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
                    <span class="btn-ping_dot"></span>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>

        <div class="xl:col-span-2 xl:row-span-3">
            <div class="grid-container">
                <img src="src/assets/grid3.png" alt="grid-3" class="w-full sm:h-[266px] h-fit object-contain" />

                <div>
                    <p class="grid-headtext">My Passion for Coding</p>
                    <p class="grid-subtext">
                        I love solving problems and building things through code. Programming isn&apos;t just my
                        profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                    </p>
                </div>
            </div>
        </div>

        <div class="xl:col-span-1 xl:row-span-2">
            <div class="grid-container">
                <img
                        src="src/assets/grid4.png"
                        alt="grid-4"
                        class="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                />

                <div class="xl:col-span-1 xl:row-span-2">
                    <div class="grid-container">
                        <img src="/src/assets/grid4.png" alt="grid-4" class="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div class="space-y-2">
                            <p class="grid-subtext text-center">Contact me</p>
                            <div class=""  on:click={handleCopy}>
                                <img src={hasCopied ? "/src/assets/tick.svg" : "/src/assets/copy.svg"} alt="copy mail" />
                                <p class="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yaokissi.pro@gmail.com</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    /*
    .rightSideAboutSection {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 100%;  Changed from h-screen to h-full
    }
    .rightSideAboutSection > div:first-child {
        flex: 7;  This makes the first div take up roughly 70% of the space
    }
    .rightSideAboutSection > div:last-child {
        flex: 3;  This makes the second div take up roughly 30% of the space
    }
*/
    .btn-ping_dot {
        position: relative;
        display: inline-flex;
        margin-right: 12px;
        height: 0.75rem;
        width: 0.75rem;
        border-radius: 9999px;
        background-color: rgb(34 197 94);
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping {
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }
</style>