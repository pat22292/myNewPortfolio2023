const PortfolioNav = () => {

    return (
        <nav className=" bg-transparent fixed w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">

                    <svg className="w-16 h-12" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" viewBox="0 0 720 720" >
                        <path fill="#272828" d="M267.3,222.2v-16.4c0-4.6-4-8.3-9-8.3H122.2c-5,0-9,3.7-9,8.3v100.8c0,4.6,4,8.3,9,8.3h136.2
	c5,0,9-3.7,9-8.3v-24h73.4v82.1c0,4.6-4,8.3-9,8.3H123c-5,0-9,3.7-9,8.3v219.3c0,4.6-4,8.3-9,8.3H32.9c-5,0-9-3.7-9-8.3V145.3
	c0-4.6,4-8.3,9-8.3h298.9c5,0,9,3.7,9,8.3v76.8H267.3z"/>
                        <path fill="#4B88C8" d="M459,222.2H160.1c-5,0-9,3.7-9,8.3v84.3h73.4v-24c0-4.6,4-8.3,9-8.3h152.1c5,0,9,3.7,9,8.3v100.8
	c0,4.6-4,8.3-9,8.3H233.5c-5,0-9-3.7-9-8.3V373h-73.4v227.7c0,4.6,4,8.3,9,8.3h72.1c5,0,9-3.7,9-8.3V466.5c0-4.6,4-8.3,9-8.3h118.7
	c5,0,9,3.7,9,8.3v134.2c0,4.6,4,8.3,9,8.3H459c5,0,9-3.7,9-8.3V230.5C467.9,225.9,463.9,222.2,459,222.2z"/>
                        <path fill="#272828" d="M696.1,145.3v59.8c0,4.6-4,8.3-9,8.3h-87.7c-5,0-9,3.7-9,8.3v378.9c0,4.6-4,8.3-9,8.3h-72.9
	c-5,0-9-3.7-9-8.3V221.8c0-4.6-4-8.3-9-8.3H388.2c-5,0-9-3.7-9-8.3v-59.8c0-4.6,4-8.3,9-8.3h298.9
	C692.1,137,696.1,140.7,696.1,145.3z"/>
                    </svg>


                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                    {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Patrick Madlang-awa</span> */}
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-24 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default PortfolioNav