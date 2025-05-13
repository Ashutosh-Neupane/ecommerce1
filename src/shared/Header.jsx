import React from 'react'

const Header = () => {
  return (

    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between">
            <a href="#" class="text-2xl font-bold text-indigo-600">
                Shop<span class="text-pink-500">Sphere</span>
            </a>

            <button id="mobile-menu-button" class="lg:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div id="mobile-menu" class="hidden w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
                <ul class="lg:flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6 text-gray-700">
                    <li><a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-50">Home</a></li>
                    <li><a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-50">Products</a></li>
                    <li><a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-50">Categories</a></li>
                    <li><a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-50">About Us</a></li>
                    <li><a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-50">Contact</a></li>
                </ul>
            </div>

            <div class="flex items-center space-x-4 mt-4 lg:mt-0">
                <a href="#" class="text-gray-600 hover:text-indigo-600 relative">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </a>
                <a href="#" class="text-gray-600 hover:text-indigo-600">
                    <i class="fas fa-user-circle fa-lg"></i>
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header