import React from "react";
import Header from "../shared/Header";

const Home = () => {
  return (
    <>
      <Header />
      
   <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <section class="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-12 px-6 rounded-lg shadow-xl mb-12 text-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to ShopSphere!</h1>
            <p class="text-lg sm:text-xl mb-6">Discover amazing products at unbeatable prices.</p>
            <a href="#" class="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Shop Now</a>
       </section>

        <section>
            <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">Featured Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden product-card">
                    <img src="https://placehold.co/600x400/E2E8F0/4A5568?text=Product+1" alt="Product Image 1" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Stylish Smartwatch</h3>
                         <p class="text-gray-600 text-sm mb-4">Latest model with advanced health tracking features and sleek design.</p>
                         <div class="flex items-center justify-between mb-4">
                            <span class="text-xl font-bold text-indigo-600">$199.99</span>
                            <span class="text-xs text-gray-500 line-through">$249.99</span>
                       </div>
                         <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                     </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden product-card">
                    <img src="https://placehold.co/600x400/D1FAE5/065F46?text=Product+2" alt="Product Image 2" class="w-full h-48 object-cover"/>
                     <div class="p-6">
                         <h3 class="text-lg font-semibold text-gray-800 mb-2">Wireless Headphones</h3>
                        <p class="text-gray-600 text-sm mb-4">Noise-cancelling over-ear headphones with superior sound quality.</p>
                        <div class="flex items-center justify-between mb-4">
                             <span class="text-xl font-bold text-indigo-600">$129.00</span>
                         </div>
                         <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
               </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden product-card">
                    <img src="https://placehold.co/600x400/FEF3C7/92400E?text=Product+3" alt="Product Image 3" class="w-full h-48 object-cover"/>                     <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Ergonomic Backpack</h3>
                        <p class="text-gray-600 text-sm mb-4">Durable and comfortable backpack, perfect for travel and daily use.</p>
                      <div class="flex items-center justify-between mb-4">
                             <span class="text-xl font-bold text-indigo-600">$79.50</span>
                        </div>
                        <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                             Add to Cart
                        </button>
                  </div>
                 </div>

                 <div class="bg-white rounded-lg shadow-lg overflow-hidden product-card">
                     <img src="https://placehold.co/600x400/FEE2E2/991B1B?text=Product+4" alt="Product Image 4" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Portable Coffee Maker</h3>
                        <p class="text-gray-600 text-sm mb-4">Compact and easy-to-use coffee maker for fresh brew anywhere.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xl font-bold text-indigo-600">$45.99</span>
                           <span class="text-xs text-gray-500 line-through">$55.00</span>
                        </div>
                        <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                          Add to Cart
                     </button>
                     </div>
                 </div>
                 </div>
        </section>
     </main>

    </>
  );
};

export default Home;
