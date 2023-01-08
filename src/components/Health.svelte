<dl class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2">
	<div
		x-data="Components.serverHealth('https://hud-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">HUD</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(11G / 208G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>5%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 5%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(10.420 / 30.096 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>34%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 34%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">126</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://adam-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">ADAM</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(111G / 833G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>13%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 13%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(24.942 / 30.096 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>82%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 82%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">261</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://abubakar-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">ABUBAKAR</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(38G / 104G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>36%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 36%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(15.322 / 16.008 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>95%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 95%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">141</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://ali-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">ALI</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(45G / 208G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>21%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 21%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(25.491 / 30.096 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>84%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 84%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">112</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://usman-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">USMAN</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(49G / 104G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>47%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 47%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(15.368 / 16.008 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>96%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 96%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">471</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://idris-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">IDRIS</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(61G / 208G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>29%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 29%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(27.977 / 30.096 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>92%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 92%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">93</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://shaleh-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">SHALEH</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(84G / 208G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>40%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 40%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(27.386 / 30.096 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>90%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 90%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">120</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://ibrahim-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">IBRAHIM</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(39G / 208G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>18%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 18%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(14.883 / 16.008 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>92%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 92%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">141</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://rajab-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">RAJAB</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(56G / 420G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>13%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 13%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(12.325 / 16.013 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>76%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 76%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">103</span><span class="ml-1">ms</span>
		</p>
	</div>
	<div
		x-data="Components.serverHealth('https://umar-api.dripsender.id')"
		class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
	>
		<dt class="text-lg font-medium text-gray-600 truncate">UMAR</dt>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>Disk <span x-text="disk_usage">(128G / 417G )</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="disk_persentage"
				>30%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+disk_persentage"
				style="width: 30%"
			/>
		</div>

		<div class="flex justify-between mb-1 mt-3">
			<span class="text-base font-medium text-blue-700 dark:text-white"
				>RAM <span x-text="memory_usage">(14.321 / 16.008 mb)</span></span
			>
			<span class="text-sm font-medium text-blue-700 dark:text-white" x-text="memory_persentage"
				>89%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				class="bg-blue-600 h-2.5 rounded-full"
				:style="'width: '+memory_persentage"
				style="width: 89%"
			/>
		</div>

		<p class="mt-5 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			<template x-if="data.redis == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data == 'PONG'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data != 'PONG'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Read
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.redis_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.redis_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Redis Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.dripsender_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.dripsender_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Data Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->
			<template x-if="data.message_data_set == 'OK'">
				<svg
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</template><svg
				class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<template x-if="data.message_data_set != 'OK'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</template>
			Message Write
		</p>

		<p class="mt-3 flex items-center  text-sm text-gray-500">
			<!-- Heroicon name: solid/check-circle -->

			Load Time : <span class="ml-1" x-text="loadTime">120</span><span class="ml-1">ms</span>
		</p>
	</div>
</dl>
