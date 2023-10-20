import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundimg from "../../public/assets/herobg.png";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/v1/user/login', {
                email: email,
                password: password
            });
            console.log(response);

            // Store the token in localStorage
            localStorage.setItem('jwtToken', response.data.jwtToken);

            // Store the token and user details in your application (e.g., in state, context, or local storage)
            // For example, if using state:
            // setToken(token);
            // setUser(user);
            navigate("/")

            // Redirect to another page after successful login

        } catch (error) {
            // Handle error responses (e.g., incorrect credentials)
            setError('Incorrect email or password');
        }
    };

    return (
        <div className='h-screen flex bg-blue-gray gradient rounded' style={{backgroundImage:`url{${backgroundimg}}`}}>
            <div className='w-full max-w-md m-auto bg-slate-300 rounded-lg border border-black  shadow-default py-10 px-16 border-2'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                {error && <div className='text-red-500 text-center mb-4'>{error}</div>}

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className='flex p-1 m-1' htmlFor='email'>
                            Email
                        </label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1' htmlFor='password'>
                            Password
                        </label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className='bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
