import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
const Singup = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
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

  const handleSignup = (event) => {
    event.preventDefault();
    let { email, password, name } = input;
    axios
      .post('https://dev-example.sanbercloud.com/api/register', {
        email,
        password,
        name,
      })
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);

        alert(error.message);
      });
  };

  return (
    <div className="flex py-5 sm:10 items-center justify-center">
      <div>
        <h1 className="py-5 text-center text-xl font-semibold -3xl">Sing Up</h1>
        <form className="gap-3 px-15" onSubmit={handleSignup}>
          <label className="flex flex-col rounded-lg -lg">
            Name
            <input value={input.name} onChange={handleInput} type="text" placeholder="Name" name="name" />
          </label>
          <label className="flex flex-col rounded-lg -lg">
            Email
            <input value={input.email} onChange={handleInput} type="text" placeholder="email" name="email" />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </label>
          <label className="flex flex-col mt-2">
            Password
            <input value={input.password} onChange={handleInput} type="password" placeholder="password" name="password" />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </label>
          <button className="flex mx-auto py-3 px-4 -6 bg-violet-500 hover:bg-violet-600 hover:scale-95 text-white font-bold mt-3 rounded-lg type=submit">Daftar</button>
        </form>
      </div>
    </div>
  );
};

export default Singup;
