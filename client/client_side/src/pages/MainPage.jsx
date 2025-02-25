import React from 'react'

function MainPage() {
    return (
        <div>
            <h1 className="lg:mx-32 text-5xl text-center font-bold text-blue-500">
                Currency Converter
            </h1>
            <p className='lg:mx-32 opacity-70 py-3 font-sans'>
                A Currency Converter Website allows users to easily convert between different currencies using real-time exchange rates. It features an intuitive interface with dropdowns for currency selection, an input field for the amount, and a convert button to display instant results. Users can swap currencies, view live exchange rates, and access historical data. The site is designed to be fast, responsive, and user-friendly, making currency conversions simple for travelers, businesses, and financial analysts.
            </p>
            <div className="mt-5 items-center justify-center flex-col">
                <section>
                    <form >
                        <div class="mb-5">
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>

                    </form>
                </section>
            </div>
        </div>


    )
}

export default MainPage