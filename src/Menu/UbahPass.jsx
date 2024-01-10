import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const UbahPass = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    new_password: '',
    current_password: '',
    new_confirm_password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    // Check for current_password and new_password separately
    if (name === 'current_password' || name === 'new_password') {
      if (value.length < 8) {
        setErrors({ ...errors, [name]: 'Password must be at least 8 characters long' });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    }

    // Check for new_confirm_password
    if (name === 'new_confirm_password') {
      if (value.length < 8 || value !== input.new_password) {
        setErrors({ ...errors, new_confirm_password: 'Passwords do not match or must be at least 8 characters long' });
      } else {
        setErrors({ ...errors, new_confirm_password: null });
      }
    }

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Check for errors in any of the password fields
    if (errors.current_password || errors.new_password || errors.new_confirm_password) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    let { new_password, current_password, new_confirm_password } = input;

    axios
      .post('https://dev-example.sanbercloud.com/api/change-password', { new_password, current_password, new_confirm_password })
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="flex py-5 sm:10 items-center justify-center">
      <div>
        <h1 className="py-5 text-center text-xl font-semibold -3xl">Change Password</h1>
        <form className="gap-3 px-5" onSubmit={handleLogin}>
          <label className="flex flex-col rounded-lg -lg">
            Password
            <input value={input.current_password} onChange={handleInput} type="password" placeholder="Password" name="current_password" />
            {errors.current_password && <p className="text-red-500">{errors.current_password}</p>}
          </label>
          <label className="flex flex-col mt-2">
            New Password
            <input value={input.new_password} onChange={handleInput} type="password" placeholder="New Password" name="new_password" />
            {errors.new_password && <p className="text-red-500">{errors.new_password}</p>}
          </label>
          <label className="flex flex-col mt-2">
            Confirm Password
            <input value={input.new_confirm_password} onChange={handleInput} type="password" placeholder="Confirm Password" name="new_confirm_password" />
            {errors.new_confirm_password && <p className="text-red-500">{errors.new_confirm_password}</p>}
          </label>
          <button className="flex mx-auto py-3 px-4 -6 bg-violet-500 hover:bg-violet-600 hover:scale-95 text-white font-bold mt-3 rounded-lg" type="submit">
            Ubah
          </button>
        </form>
      </div>
    </div>
  );
};

export default UbahPass;
