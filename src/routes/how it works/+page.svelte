<script>
	import Footer from '../../components/Footer.svelte';
	import ListAccount from '../../components/ListAccount.svelte';
	import Navbar from '../../components/Navbar.svelte';
</script>

<div class="bg-cyan-800">
	<Navbar />

	<div class="py-10 px-4 md:flex justify-between max-w-7xl mx-auto items-center ">
		<div class="flex items-center space-x-5">
			<div class="p-4">
				<h1 class="text-3xl font-bold text-white">Hallo, User Dripsender</h1>
				<div class="flex gap-2">
					<div class="flex gap-1 text-gray-100 text-base  my-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
							/>
						</svg>
						<p>Verified Account</p>
					</div>

					<div class="flex gap-1 text-gray-100 text-base  my-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<p>Paket 5 Whatsapp (23-12-2022)</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
		>
			<button
				type="button"
				class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
				>Disqualify</button
			>
			<button
				type="button"
				class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
				>Advance to offer</button
			>
		</div>
	</div>
</div>

<!-- Page header -->

<main class="pb-10 ">
	<div
		class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
	>
		<div class="space-y-6 lg:col-start-1 lg:col-span-2">
			<!-- Description list-->
			<section aria-labelledby="applicant-information-title">
				<div class="bg-white shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:px-6 bg-cyan-900">
						<h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-50">
							List Whatsapp Account
						</h2>
					</div>
					<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
						<ListAccount />
					</div>
					<div>
						<a
							href="/"
							class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
							>Read full application</a
						>
					</div>
				</div>
			</section>
		</div>

		<section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
			<div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
				<h2 id="timeline-title" class="text-lg font-medium text-gray-900">Latest News</h2>

				<!-- Activity Feed -->
				<div class="mt-6 flow-root">
					<!-- svelte-ignore a11y-no-redundant-roles -->
					<ul role="list" class="-mb-8">
						<li>
							<div class="relative pb-8">
								<span
									class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
									aria-hidden="true"
								/>
								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
										>
											<!-- Heroicon name: solid/user -->
											<svg
												class="w-5 h-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</div>
									<div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
										<div>
											<p class="text-sm text-gray-500">
												Applied to <a href="/" class="font-medium text-gray-900"
													>Front End Developer</a
												>
											</p>
										</div>
										<div class="text-right text-sm whitespace-nowrap text-gray-500">
											<time datetime="2020-09-20">Sep 20</time>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<div class="relative pb-8">
								<span
									class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
									aria-hidden="true"
								/>
								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"
										>
											<!-- Heroicon name: solid/thumb-up -->
											<svg
												class="w-5 h-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
												/>
											</svg>
										</span>
									</div>
									<div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
										<div>
											<p class="text-sm text-gray-500">
												Advanced to phone screening by <a href="/" class="font-medium text-gray-900"
													>Bethany Blake</a
												>
											</p>
										</div>
										<div class="text-right text-sm whitespace-nowrap text-gray-500">
											<time datetime="2020-09-22">Sep 22</time>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<div class="relative pb-8">
								<span
									class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
									aria-hidden="true"
								/>
								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white"
										>
											<!-- Heroicon name: solid/check -->
											<svg
												class="w-5 h-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</div>
									<div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
										<div>
											<p class="text-sm text-gray-500">
												Completed phone screening with <a href="/" class="font-medium text-gray-900"
													>Martha Gardner</a
												>
											</p>
										</div>
										<div class="text-right text-sm whitespace-nowrap text-gray-500">
											<time datetime="2020-09-28">Sep 28</time>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<div class="relative pb-8">
								<span
									class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
									aria-hidden="true"
								/>
								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"
										>
											<!-- Heroicon name: solid/thumb-up -->
											<svg
												class="w-5 h-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
												/>
											</svg>
										</span>
									</div>
									<div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
										<div>
											<p class="text-sm text-gray-500">
												Advanced to interview by <a href="/" class="font-medium text-gray-900"
													>Bethany Blake</a
												>
											</p>
										</div>
										<div class="text-right text-sm whitespace-nowrap text-gray-500">
											<time datetime="2020-09-30">Sep 30</time>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<div class="relative pb-8">
								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white"
										>
											<!-- Heroicon name: solid/check -->
											<svg
												class="w-5 h-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</div>
									<div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
										<div>
											<p class="text-sm text-gray-500">
												Completed interview with <a href="/" class="font-medium text-gray-900"
													>Katherine Snyder</a
												>
											</p>
										</div>
										<div class="text-right text-sm whitespace-nowrap text-gray-500">
											<time datetime="2020-10-04">Oct 4</time>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="mt-6 flex flex-col justify-stretch">
					<button
						type="button"
						class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>Advance to offer</button
					>
				</div>
			</div>
		</section>
	</div>
</main>

<Footer />
