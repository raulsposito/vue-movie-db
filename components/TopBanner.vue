<template>
    <div>
    <div>
        <img class="h-32 w-full object-cover object-center lg:h-48" src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="Movie theater">
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <NuxtLink to="/curious" type="button" class="flex animate-spin">
            <img class="h-24 w-24 object-cover rounded-full ring-4 ring-white sm:h-32 sm:w-32 hover:animate-none" src="https://images.unsplash.com/photo-1622867072220-b76505e09a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Vintage movie roll">
        </NuxtLink>
        <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div class="sm:hidden md:block mt-6 min-w-0 flex-1">
            <h1 class="text-3xl font-bold text-gray-900 truncate">Vue Hired MovieDB!</h1>
            </div>
            <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <NuxtLink to="/whoami" type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <!-- Heroicon name: film -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <span class="pl-2 my-auto">Who am I?</span>
            </NuxtLink>
            </div>
        </div>
        </div>
        <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
        <h1 class="text-2xl font-bold text-gray-900 truncate">Vue Hired MovieDB!</h1>
        </div>
    </div>
    </div>
</template>