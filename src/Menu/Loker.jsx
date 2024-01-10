import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../data/GlobalContext';

const Loker = () => {
  const { state } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
  const { data, setData } = state;

  useEffect(() => {
    axios
      .get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData]);

  const filteredData = data !== null ? data.filter((res) => res.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  return (
    <div>
      <div className="py-10 px-5">
        <div className="sm:flex sm:justify-between">
          <h1 className="text-3xl font-bold">Loker Yang Tersedia</h1>
          <input type="text" placeholder="Search Jobs" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="border-2 mt-1"></div>
      </div>
      <div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-4 px-5 ">
        {filteredData.map((res) => (
          <div className="flex justify-center" key={res.id}>
            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 py-4 drop-shadow-sm relative">
              <a href="#">
                <img className="rounded-t-lg" src={res.company_image_url} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{res.job_description}</p>
                <div className="flex gap-1">
                  <p>{res.company_name},</p>
                  <p>{res.company_city}</p>
                </div>
                <a
                  href="#"
                  className="absolute bottom-3 right-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-violet-600 hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lamar
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loker;
