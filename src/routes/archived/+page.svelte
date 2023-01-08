<script>
	import Footer from '../../components/Footer.svelte';
	import Newsletter from '../../components/Newsletter.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ArchivedWhatsapp from '../../components/WarningArchived.svelte';
	import ListArchived from '../../components/ListArchived.svelte';
</script>

<Navbar />

<div class="min-h-full bg-gray-50 font-normal">
	<div class="bg-cyan-800 pb-32">
		<div class="py-10 px-4 text-center">
			<div class="p-4">
				<h1 class="text-4xl font-bold text-white">Whatsapp Archived</h1>
				<p class="text-xl text-yellow-50 ">Berikut Adalah Data Archived Nomor Whatsapp Anda</p>
				
			</div>
		</div>
	</div>

	<main class="relative -mt-32">

		
		<div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
			
			<div class="bg-gray-100 rounded-lg shadow overflow-hidden">
				<div class="w-full flex flex-col lg:flex-row divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
					<div class="divide-y divide-gray-200 lg:w-3/4">

						<div class="py-6 px-4 sm:p-6 lg:pb-8">

							<!-- Warning Page Archived -->
							<div class="col-span-1 flex shadow-sm rounded-md mb-6">
								<div class="flex-shrink-0 flex items-center justify-center w-16 bg-red-500 text-white text-sm font-medium rounded-l-md">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
									  </svg>
								</div>
								<div class="flex-1 flex items-center border-t border-r border-b border-gray-200 bg-white rounded-r-md">
								  <div class="flex-1 px-4 py-2 text-md">
									<a href="/" class="text-gray-900 font-normal hover:text-gray-600">Data campaign akan dihapus permanen dan tidak dapat dikembalikan jika nomor Whatsapp tidak di-restore dalam waktu 14 hari sejak berada di Archive</a>
									</div>
								</div>
							  </div>

							<ListArchived />
						</div>

						
					</div>
					

					<aside class="py-6 pb-12 bg-white lg:w-1/4">
						<Newsletter />
					</aside>
				</div>
			</div>
		</div>
	</main>
</div>

<Footer />
