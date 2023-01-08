<script>
import Footer from '../../components/Footer.svelte';
import Navbar from '../../components/Navbar.svelte';
	import Privacypolice from '../../components/Privacypolice.svelte';
	import SocmedOfficial from '../../components/SocmedOfficial.svelte';
</script>

<div class="bg-cyan-800">
	<Navbar />

	<div class="py-12 px-4 max-w-7xl mx-auto items-center ">
		<div class="text-center pb-4">
						<h1 class="text-4xl font-bold text-white">Documentation</h1>
						<p class="text-xl text-yellow-50 ">Halaman Petunjuk Menggunakan Dripsender</p>
		</div>
	
	</div>


<!-- Page header -->

<main class="pb-10 pt-2 bg-gray-100 px-5 lg:px-0">
	<div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3" >
		<div class="space-y-6 lg:col-start-1 lg:col-span-2">
			<!-- Description list-->
			<section aria-labelledby="applicant-information-title">
				<div class="bg-white rounded-b-lg mb-6">
					<div class="px-4 py-3 sm:px-6 bg-cyan-700 flex gap-2 items-center rounded-t-lg">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
							<path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
						  </svg>
					<h2 id="applicant-information-title" class="text-lg leading-6 font-lg text-gray-50 font-semibold">
						Video Pengantar Dokumentasi
					</h2>
					</div>
					<div class="border-t border-gray-200 px-4 py-5 sm:px-6">

					<div class="aspect-w-16 aspect-h-9">
							<!-- svelte-ignore a11y-missing-attribute -->
							<iframe src="https://www.youtube.com/embed/KqwJeu2Lm4w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						  </div>
						  
					</div>
				</div>

				<div class="bg-white rounded-b-lg mb-6">
					<div class="px-4 py-3 sm:px-6 bg-cyan-700 flex gap-2 items-center rounded-t-lg">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
						  </svg>
					<h2 id="applicant-information-title" class="text-lg leading-6 font-lg text-gray-50 font-semibold">
						Term Of Service & Privacy Policy
					</h2>
					</div>
					<div class="border-t border-gray-200 px-4 py-5 sm:px-6">

					<Privacypolice/>
						  
					</div>
				</div>
			</section>
		</div>

		<section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
			<div class="bg-white shadow sm:rounded-lg ">
			<div class="px-4 py-3 sm:px-6 bg-cyan-700 flex gap-2 items-center rounded-t-lg">
				
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
				  </svg>
				  
			<h2 id="applicant-information-title" class="text-lg leading-6 font-lg text-gray-50 font-bold">
				Akun Official
			</h2>
			</div>
			<div class="border-t border-gray-200 px-4 py-5 sm:px-6">

			<SocmedOfficial/>

			</div>
			</div>


		</section>
	</div>
</main></div>

<Footer />
