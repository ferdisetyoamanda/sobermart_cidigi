import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../utils/ApiConfig';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    const isSuccess = await loginUser(username, password, rememberMe);

    if (isSuccess) {
      navigate('/');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="text-2xl font-semibold mb-8 justify-center text-center border-b-2">
          <h6 className='text-xl font-semibold mb-1'>Log In Your Account</h6>
        </div>
        <div>
          <div className="mb-4 mt-10">
            <label className="block text-sm font-medium text-gray-700">Nama Pengguna</label>
            <input
              type="email"
              name='email'
              className="mt-1 p-2 w-full border rounded"
              value={username}
              onChange={handleUsernameChange}
              placeholder='Masukkan Nama Pengguna'
              required={true}
              aria-errormessage='email harus diisi'
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="mt-1 p-2 w-full border rounded"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Masukkan Kata Sandi'
                required={true}
                aria-errormessage='password harus diisi'
                pattern='[A-Za-z0-9]{8,}'
                title='Password harus terdiri dari 8 karakter huruf dan angka'
              />
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="text-sm text-gray-700">Simpan Login</label>
          </div>
          <div className="flex justify-between">
            <button
              className="text-sm text-gray-500"
              onClick={() => console.log('Lupa Kata Sandi')}
            >
              Lupa Kata Sandi?
            </button>
            <button
              className="text-sm text-blue-500"
              onClick={() => console.log('Buat Akun')}
            >
              Buat Akun
            </button>
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded w-full mt-4"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
