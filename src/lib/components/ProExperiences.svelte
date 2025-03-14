<script>
    import { BriefcaseBusiness } from 'lucide-svelte';

    import CvButton from '/src/lib/components/CvButton.svelte';


    import llclogo from '/src/assets/llclogo.png';
    import devours_logo from '/src/assets/devours_logo.png';
    import logoEthicPortage from '/src/assets/logoEthicPortage.png';
    import plantaorLogo from '/src/assets/plantaorLogo.png';


    const Experiences = [

        {
            company: "LLC Consulting",
            companyLogo:llclogo,
            companyWebsite:"https://llc-consulting.fr/",
            role: "Web developer",
            startDate: "Mar 2024",
            endDate: "Jun 2024"
        },
        {
            company: "Devours",
            companyLogo:devours_logo,
            companyWebsite:"https://www.ethic-portage.fr/",
            role: 'Web developer',
            startDate: 'Dec 2022',
            endDate: 'Feb 2023'
        },
        {
            company: "Ethic Portage",
            companyLogo:logoEthicPortage,
            companyWebsite:'https://www.ethic-portage.fr/',
            role: 'web developer',
            startDate: 'Jul 2022',
            endDate: 'Aug 2022'
        },
        {
            company: "Plantaor",
            companyLogo:plantaorLogo,
            companyWebsite:'Plantaor.com',
            role: 'Web developer',
            startDate: 'Jul 2021',
            endDate: 'sep 2021'},
    ]

</script>

        <div class="bg-[#0e0e10] w-[30%] p-5 border-1 border-gray-700 rounded-xl workDiv">
            <div class="flex">
                <BriefcaseBusiness class="text-gray-700"></BriefcaseBusiness>
                <p class="ml-3">Work</p>
            </div>
            {#each Experiences as experience}
                <div class="flex justify-between items-center mt-5 border border-gray-700 rounded-xl p-5 sm:w-full">
                    <div class="flex items-center min-w-0">

                        <div class=" bg-[#27272A] rounded-full border border-zinc-700 w-[45px] companyLogoDiv">
                            <a href="{experience.companyWebsite}" target="_blank">
                                <img src="{experience.companyLogo}" class="rounded-full" title="{experience.company} logo" width="45" alt="{experience.company} logo">
                            </a>
                        </div>

                        <div class="ml-4 min-w-0">
                            <p class="">{experience.company}</p>
                            <p class="text-xs text-gray-200 ">{experience.role}</p>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500">{experience.startDate} — {experience.endDate}</p>
                </div>
            {/each}
         <CvButton class="mt-10"></CvButton>
        </div>

<style>
    @media screen and (max-width: 1024px) {
       div {
            width: 100%;

        }
        .workDiv{
            margin-top: 30px;
        }
        .companyLogoDiv {
            width: 50px;

            border-radius: 100% ;
        }
        .companyLogoDiv img{
            width: 50px;

            border-radius: 100% ;
        }

    }


    @media screen and (max-width: 480px) {
        div {
            width: 100%;

        }
        .workDiv{
            margin-top: 30px;
        }
.companyLogoDiv {
            width: 50px;
    border-radius: 100% ;
}
.companyLogoDiv img{
    width: 50px;

    border-radius: 100% ;
}
    }
</style>