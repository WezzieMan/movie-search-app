const Navbar = () => {
  return (  
    <div>
       <nav className='container flex justify-between items-center max-w-[1000px] mx-auto py-4'>
        <h1 className='text-2xl font-bold text-gray-900'>Movie Browser</h1>
        <ul className='pl-10 flex gap-5 text-gray-700'>
          <li><a href='#' className='hover:text-gray-900'>Home</a></li>
          <li><a href="#" className='hover:text-gray-900'>About</a></li>
          <li><a href='#' className='hover:text-gray-900'>Coming Soon...</a></li>
        </ul>

        <form className='flex items-center ml-auto'>
            <input
              className="px-3 py-1 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" className='ml-2 px-4 py-1 bg-gray-800 hover:bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50'>
              Search
            </button>
          </form>
      </nav>
    </div>
  );
}
 
export default Navbar;