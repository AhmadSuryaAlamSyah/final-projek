import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
    if (name === 'email') {
      const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let isValidEmail = regex.test(value);

      if (!isValidEmail) {
        setErrors({ ...errors, email: 'Invalid email format' });
      } else {
        setErrors({ ...errors, email: null });
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
      } else {
        setErrors({ ...errors, password: null });
      }
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (errors.email || errors.password) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    let { email, password } = input;

    axios
      .post('https://dev-example.sanbercloud.com/api/login', { email, password })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set('token', data.token, { expires: 1 });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="flex py-5 sm:10 items-center justify-center">
      <div>
        <h1 className="py-5 text-center text-xl font-semibold -3xl">Login</h1>
        <form className="gap-3 px-15" onSubmit={handleLogin}>
          <label className="flex flex-col rounded-lg -lg">
            Email
            <input value={input.email} onChange={handleInput} type="email" placeholder="email" name="email" />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </label>
          <label className="flex flex-col mt-2">
            Password
            <input value={input.password} onChange={handleInput} type="password" placeholder="password" name="password" />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </label>
          <button className="flex mx-auto py-3 px-4 -6 bg-violet-500 hover:bg-violet-600 hover:scale-95 text-white font-bold mt-3 rounded-lg type=submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
