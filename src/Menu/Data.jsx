import axios from 'axios';
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../data/GlobalContext';
import Cookies from 'js-cookie';

const Data = () => {
  const { state, handel } = useContext(GlobalContext);
  const { data, setData, setFetchStatus, input } = state;
  const { handelEdit, handleDelete } = handel;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy', { name: input.name }, { headers: { Authorization: 'Bearer ' + Cookies.get('token') } });
      setData([...response.data.data]);
      setFetchStatus(false);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  return (
    <div className="container flex flex-col mx-auto ">
      <div className="search-box mt-3 sm:mt-0 my-5">
        <a href="/create-data" className="search-btn bg-violet-500 py-2 px-4 rounded-lg ml-2 text-white font-semibold hover:bg-violet-600 ">
          Create
        </a>
      </div>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white text-gray-700 uppercase bg-violet-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company City
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data !== null &&
            data.map((res, index) => {
              return (
                <tbody key={res.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{res.title}</td>
                    <td className="px-6 py-4">{res.job_description}</td>
                    <td className="px-6 py-4">{res.company_name}</td>
                    <td className="px-6 py-4">{res.company_city}</td>
                    <td>
                      <button className="w-1/2 font-medium shadow-sm text-slate-800 hover:scale-95 hover:bg-slate-100 hover:underline dark:text-cyan-500" href="/tables" onClick={() => handelEdit(res.id)}>
                        <p>Edit</p>
                      </button>
                      <button className="w-1/2 font-medium shadow-sm bg-rose-500 hover:scale-95  hover:bg-rose-600 text-white hover:underline dark:text-cyan-500" href="/tables" onClick={() => handleDelete(res.id)}>
                        <p>Delete</p>
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};
export default Data;
