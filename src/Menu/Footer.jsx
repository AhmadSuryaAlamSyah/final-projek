const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center ">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            AlamSyah
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="Loker" className="hover:underline me-4 md:me-6">
              Loker
            </a>
          </li>
          <li>
            <a href="Data" className="hover:underline me-4 md:me-6">
              Data
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
