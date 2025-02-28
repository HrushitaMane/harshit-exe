import React, { useState } from 'react';
import './App.css';

const LoginPage = () => {
  const[formData, setFormData]=
  useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange = (e) => {
    const { name,value }=e.target;
    setFormData(prevState => ({...prevState, [name]:value}));
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:",formData);
};

return(<div className='flex screen'>
      <div className='w-half bg-orange-500 flex items-center justify-center'>
        <div className='text-white'>
          <h1 className="text-5xl text-bold mb-2 fontstl">ΛI ПӨƬΣMΛƬΣ</h1>
          <p className="text-xl">A summarizer for all your notes</p></div></div>

          <div className="max-w-md mx-auto w-full">
            <h2 className='text-4xl font-semibold text-orange-500 md-12'>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                  <label htmlFor='username' className='block text-orange-400 uppercase text-sm font-medium md-2'>Username</label>
                  <input type="text" id="username" placeholder='Enter your username'
                  value={formData.username} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2
                </div>
              </form>
          </div>
</div>)

