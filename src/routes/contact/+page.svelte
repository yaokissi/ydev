<script>
    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
</script>

<TopNavbar />
<main class="min-h-screen bg-[var(--background)] text-white relative pt-20 mt-20">
    <div class="absolute inset-0 top-20 z-0">
        <img
                src="../src/assets/terminal.png"
                alt="terminal background"
                class="w-full h-[calc(100vh-5rem)] object-contain "
        />
    </div>

    <div class="relative container mx-auto mt-10 px-4 py-12">
        <div class="max-w-md mx-auto  backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
            <h1 class="text-4xl font-bold text-center mb-2">Let's talk</h1>
            <p class="text-gray-300 text-center mb-8">I commit to responding to your message within a maximum delay of 2 hours.</p>

            <form method="POST" action="/contact" class="space-y-6">
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-300">
                        Name
                        <input
                                name="senderName"
                                type="text"
                                class="mt-1 block w-full p-3 bg-[#27272A] border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your name"
                        />
                    </label>
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-300">
                        Email
                        <input
                                name="email"
                                type="email"
                                class="mt-1 block w-full p-3 bg-[#27272A] border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                        />
                    </label>
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-300">
                        Message
                        <textarea
                                name="message"
                                rows="4"
                                class="mt-1 block w-full p-3 bg-[#27272A] border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Your message here..."
                        ></textarea>
                    </label>
                </div>

                <button
                        type="submit"
                        class="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1a1a1c]"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
</main>
<FooterSection />

<style>
    @import "tailwindcss";
</style>