import React, { useState } from 'react'

function MainPage() {

    //state for the felid
    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

    return (
        <div>
            <h1 className="lg:mx-32 text-5xl text-center font-bold text-blue-500">
                Currency Converter
            </h1>
            <p className='lg:mx-32 opacity-70 py-3 font-sans'>
                A Currency Converter Website allows users to easily convert between different currencies using real-time exchange rates. It features an intuitive interface with dropdowns for currency selection, an input field for the amount, and a convert button to display instant results. Users can swap currencies, view live exchange rates, and access historical data. The site is designed to be fast, responsive, and user-friendly, making currency conversions simple for travelers, businesses, and financial analysts.
            </p>
            <div className="mt-5 items-center justify-center flex-col">
                <section className='w-full lg:w-1/2'>
                    <form >
                        <div className="mb-5">
                            <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input type="date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                    </form>
                </section>
            </div>
            <div className='mt-5 items-center justify-center flex-col'>
                <form className="max-w-sm ">
                    <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                    <select id={sourceCurrency} name={sourceCurrency} value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </form>
                <div className='mt-5'>
                    <form class="max-w-sm ">
                        <label htmlFor={targetCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                        <select onChange={(e) => setTargetCurrency(e.target.value)} id={targetCurrency} name={targetCurrency} value={targetCurrency} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </form>
                </div>
                <div className="mt-5">
                    <form className='max-w-sm'>
                        <div className="mb-5">
                            <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Of Source Currency</label>
                            <input onChange={(e) => amountInSourceCurrency(e.target.value)} type="number" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount Of Source Currency" required />
                        </div>
                    </form>
                </div>
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Currency</button>
            </div>
        </div>
    )
}

export default MainPage