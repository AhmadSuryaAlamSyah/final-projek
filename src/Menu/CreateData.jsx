import { useContext,useEffect } from 'react';
import { GlobalContext } from '../data/GlobalContext';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
const CreateData = () => {
  let { ID_GAMES } = useParams();
  const { state, handel } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handelInput, handelSubmit } = handel;

  useEffect(() => {
    if (ID_GAMES !== undefined) { 
        axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`,
        { name: input.name },
        {
          headers: { Authorization: 'Bearer ' + Cookies.get('token') },
        }
      )
      .then((res) => {
        let data = res.data;
        console.log(data);
        setInput({
          title: data.title,
          company_image_url: data.company_image_url,
          job_description: data.job_description,
          company_name: data.company_name,
          company_city: data.company_city,
        });
      });
    }
  }, []);
  return (
    <div className="mt-8">
      <h2 className="font-bold text-xl">Create Data</h2>
      <div className="border-2"></div>
      <form onSubmit={handelSubmit} className="mt-2 px-10">
        <p className="font-bold">Image URL : </p>
        <input className="w-full p-2 rounded-lg font-normal bg-gray-100" onChange={handelInput} value={input.company_image_url} name="company_image_url" type="text" required />
        <br></br>
        <p className="font-bold">Title : </p>
        <input className="w-full p-2 rounded-lg font-normal bg-gray-100" onChange={handelInput} value={input.title} name="title" type="text" required />
        <br></br>
        <p className="font-bold mt-5">Deskripsi : </p>
        <input className="w-full p-2 rounded-lg font-normal bg-gray-100" onChange={handelInput} value={input.job_description} name="job_description" type="text" required />
        <br></br>
        <p className="font-bold mt-5">Company Name : </p>
        <input className="w-full p-2 rounded-lg font-normal bg-gray-100" onChange={handelInput} value={input.company_name} name="company_name" type="text" required />
        <br></br>
        <p className="font-bold mt-5">Company City : </p>
        <input className="w-full p-2 rounded-lg font-normal bg-gray-100" onChange={handelInput} value={input.company_city} name="company_city" type="text" required />
        <br></br>
        <input className="bg-violet-500 p-4 rounded-lg text-white font-semibold mt-5 hover:bg-violet-600 hover:scale-95 active:bg-violet-700 focus:ring focus:ring-violet-400" type={'submit'} />
      </form>
    </div>
  );
};
export default CreateData;
