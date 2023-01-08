<script>
	import Footer from '../../components/Footer.svelte';
	import Health from '../../components/Health.svelte';
	import Navbar from '../../components/Navbar.svelte';
</script>

<div class="min-h-full">
	<div class="bg-cyan-800 pb-32">
		<Navbar />
		<div class="py-10 px-4 text-center">
			<div class="p-4">
				<h1 class="text-4xl font-bold text-white">Server Health</h1>
				<p class="text-xl text-yellow-50 ">Kondisi Server Saat Ini Bisa Anda Lihat..</p>
			</div>
		</div>
	</div>

	<main class="-mt-32">
		<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<div class="bg-gray-50 rounded-lg shadow px-5 pt-2 pb-6 sm:px-6">
				<Health />
			</div>
			<!-- /End replace -->
		</div>
	</main>
</div>
<Footer />
