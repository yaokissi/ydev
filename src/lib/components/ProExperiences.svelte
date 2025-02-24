<script>
    import { BriefcaseBusiness } from 'lucide-svelte';

    import llclogo from '/src/assets/llclogo.png';
    import devours_logo from '/src/assets/devours_logo.jpeg';
    import logoEthicPortage from '/src/assets/logoEthicPortage.jpg';
    import plantaorLogo from '/src/assets/plantaorLogo.jpg';


    const Experiences = [

        {
            company: "LLC Consulting",
            companyLogo:llclogo,
            companyWebsite:"https://llc-consulting.fr/",
            role: "Web developer",
            startDate: "March 2024",
            endDate: "June 2024"
        },
        {
            company: "Devours",
            companyLogo:devours_logo,
            companyWebsite:"https://www.ethic-portage.fr/",
            role: 'Wordpress developer',
            startDate: 'December 2022',
            endDate: 'February 2023'
        },
        {
            company: "Ethic Portage",
            companyLogo:logoEthicPortage,
            companyWebsite:'https://www.ethic-portage.fr/',
            role: 'web developer',
            startDate: 'July 2022',
            endDate: 'August 2022'
        },
        {
            company: "Plantaor",
            companyLogo:plantaorLogo,
            companyWebsite:'Plantaor.com',
            role: 'Wordpress developer',
            startDate: 'July 2021',
            endDate: 'september 2021'},
    ]

</script>
    <div class="w-[100%] mx-auto p-10 flex justify-around text-white bg-[#010103]">
        <div>
            <h2>
                My <span>pro</span> experiences
            </h2>
        </div>
        <div class="bg-[#0e0e10] w-[30%] p-5 border border-gray-700 rounded-xl">
            <div class="flex">
                <BriefcaseBusiness class="text-gray-700"></BriefcaseBusiness>
                <p class="ml-3">Work</p>
            </div>
            {#each Experiences as experience}
            <div class="flex justify-between mt-5">
                <div class="flex justify-between ">
                    <div class="bg-[#27272A] rounded-full border-2 border-zinc-700 shadow-zinc-800">
                     <a href={experience.companyWebsite}> <img src={experience.companyLogo} width="45" alt="llc consulting logo"> </a>
                    </div>
                   <div class="ml-4">
                     <p>{experience.company}</p>
                       <p>{experience.role}</p>
                   </div>
                </div>
                <p>{experience.startDate} — {experience.endDate}</p>
            </div>
            {/each}
        </div>
    </div>
<style>

</style>