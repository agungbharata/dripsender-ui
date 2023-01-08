<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="bg-cyan-800">
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="border-b border-cyan-700">
			<div class="flex items-center justify-between h-16 px-4 sm:px-0">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<img class="h-8 w-auto" src="https://sin1.contabostorage.com/a196457ae22540fb8b66fd8bd8a37ae4:driplab/logo.png" alt="Dripsender" />
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4 ">
							<a href="/" class="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a >
							<a href="/serverhealth" class="text-gray-300 hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium use:active">Server Health</a >
							<a href="/archived" class="text-gray-300 hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Archived</a >
							<a href="/ecosystem" class="text-gray-300 hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Ecosystem</a >
							<a href="/documentation" class="text-gray-300 hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Documentation</a >
							<a href="/" class="text-gray-300 hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Upgrade</a >
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<button type="button" class="bg-cyan-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-50" >
							<span class="sr-only">View notifications</span>
							<!-- Heroicon -->
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
							</svg>
						</button>

						<!-- Profile dropdown -->
						<div class="ml-3 relative">
							<div>
								<button on:click={toggleNavbar} type="button" class="max-w-xs bg-cyan-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-50" id="user-menu-button" aria-expanded="false" aria-haspopup="true" >
									<span class="sr-only">Open user menu</span>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-200 hover:text-white focus:ring-offset-gray-800 focus:ring-white">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</button>
							</div>

							<div class="{showMenu || 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-cyan-500 ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a href="/" class="block px-4 py-2 text-sm text-gray-700 active:bg-green-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a >
								<a href="/" class="block px-4 py-2 text-sm text-gray-700 active:bg-green-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a >
								<a href="/" class="block px-4 py-2 text-sm text-gray-700 active:bg-green-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a >
							</div>
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button on:click={toggleNavbar} type="button" class="bg-cyan-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" >
						<span class="sr-only">Open main menu</span>
						<svg class="{!showMenu || 'hidden'} block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						
						<svg class="{showMenu || 'hidden'} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="border-b border-cyan-700 md:hidden" id="mobile-menu">
		<div class="{showMenu || 'hidden'} px-2 py-3 space-y-1 sm:px-3">
			<a href="/" class="bg-cyan-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a >
			<a href="/serverhealth" class="text-gray-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Server Health</a >
			<a href="/archived" class="text-gray-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Archived</a >
			<a href="/ecosystem" class="text-gray-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Ecosystem</a >
			<a href="/documentation" class="text-gray-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Documentation</a >
			<a href="/" class="text-gray-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Upgrade</a >
		</div>
		<div class="{showMenu || 'hidden'} md-hidden pt-4 pb-3 border-t border-cyan-700">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
				</div>
				<div class="ml-3">
					<div class="text-base font-medium leading-none text-white">Agung Bharata</div>
					<div class="text-sm font-medium leading-none text-gray-400">agung@driplab.com</div>
				</div>
				<button type="button" class="ml-auto bg-cyan-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
					<span class="sr-only">View notifications</span>
					<!-- Heroicon name: outline/bell -->
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
				</button>
			</div>
			<div class="mt-3 px-2 space-y-1">
				<a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-cyan-600" >Your Profile</a >
				<a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-cyan-600" >Settings</a >
				<a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-cyan-600" >Sign out</a >
			</div>
		</div>
	</div>
</nav>
