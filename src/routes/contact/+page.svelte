<script>
    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
</script>

<TopNavbar></TopNavbar>
<main class="h-[100vh] bg-[#0e0e10] text-white">
    <article class="pt-30 ml-auto mr-auto w-[90%]">
        <h1 class="text-white-500 text-4xl font-bold ">Let's talk</h1>
        <p>I commit to responding to your message within a maximum delay of 2 hours.</p>
        <form method="POST" action="/contact">
            <div>
                <label>
                    Name
                    <input name="senderName" type="text" class="p-2 border border-gray-700 rounded-xl">
                </label>
            </div>

           <div>
               <label>
                   Email
                   <input name="email" type="email" class="p-2 border border-gray-700 rounded-xl">
               </label>
           </div>
            <div>
                <label>
                    Message
                    <textarea name="message" type="password" class="p-2 border border-gray-700 rounded-xl"></textarea>
                </label>
            </div>
            <button
                    class="border
                    border-gray-300
                    mt-10
                    text-gray-800
                    px-5 py-2
                    rounded
                    cursor-pointer
                    w-70
                    hover:bg-gray-10
                    text-white">
                Send</button>
        </form>
    </article>
</main>
<FooterSection></FooterSection>

<style>
    @import "tailwindcss";
</style>
