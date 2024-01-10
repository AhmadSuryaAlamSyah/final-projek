import axios from 'axios';
import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [text, setText] = useState('');
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    title: '',
    company_company_image_url_url: '',
    job_description: '',
    company_name: '',
    company_city: '',
  });

  const handelInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'title') {
      setInput({ ...input, title: value });
    } else if (name === 'company_image_url') {
      setInput({ ...input, company_image_url: value });
    } else if (name === 'job_description') {
      setInput({ ...input, job_description: value });
    } else if (name === 'company_name') {
      setInput({ ...input, company_name: value });
    } else if (name === 'company_city') {
      setInput({ ...input, company_city: value });
    }
  };

  const handleDelete = (ID_GAMES) => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`, {
        headers: { Authorization: 'Bearer ' + Cookies.get('token') },
      })
      .then((res) => {
        alert('Berhasil dihapus');
        console.log(res);
        setFetchStatus(true);
      });
  };

  const handelEdit = (ID_GAMES) => {
    setCurrentId(ID_GAMES);
    navigate(`/create-data/${ID_GAMES}`);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    let { title, company_image_url, job_description, company_name, company_city } = input;
    if (currentId === -1) {
      axios
        .post(
          'https://dev-example.sanbercloud.com/api/job-vacancy',
          { title, company_image_url, job_description, company_name, company_city },
          {
            headers: { Authorization: 'Bearer ' + Cookies.get('token') },
          }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          { title, company_image_url, job_description, company_name, company_city },
          {
            headers: { Authorization: 'Bearer ' + Cookies.get('token') },
          }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    }

    setCurrentId(-1);

    setInput({
      title: '',
      company_image_url: '',
      job_description: '',
      company_name: '',
      company_city: '',
    });
  };

  let state = {
    data,
    setData,
    text,
    setText,
    fetchStatus,
    setFetchStatus,
    input,
    setInput,
  };

  let handel = {
    handelInput,
    handelSubmit,
    handleDelete,
    handelEdit,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handel,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
