import React, { useState } from 'react';
import axios from 'axios';
import hero from '../../public/assets/herobg.png';
import backgroundimg from '../../public/assets/herobg.png';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const [frontPage, setFrontPage] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: '',
        contact: '',
        role: 'LABORER', // Default role value
        certifications: '',
        password: '',
        preferredLanguage: '',
        bankAccountNumber: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/v1/user', formData);
            console.log('User registered successfully:', response.data);
            navigate("/login")
            // Handle successful registration, e.g., redirect to another page or show a success message.
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure, e.g., show an error message to the user.
        }
    };

    return (
        <div className='flex gradient rounded p-20' style={{ backgroundImage: `url(${backgroundimg})` }}>
            <div className='p-2 m-1 w-full max-w-md m-auto bg-slate-900 rounded-lg border border-black shadow-default py-10 px-16 border-2'>
                <h1 className='text-2xl font-medium text-white text-center'>
                    Sign Up !!!!
                    <br />
                    Get yourself Started
                </h1>

                <form onSubmit={handleFormSubmit}>
                    {frontPage ? (
                        // First Page of the Form
                        <>
                            <div>
                                <label className='flex p-1 m-1 text-white ' htmlFor='email'>
                                    Username
                                </label>
                                <input
                                    type='name'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='name'
                                    placeholder='Your name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='email'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='email'
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='email'>
                                    Skills
                                </label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='skills'
                                    placeholder='Skills'
                                    value={formData.skills}
                                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='email'>
                                    Contact Number
                                </label>
                                <input
                                    type='number'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='contact'
                                    placeholder='Contact Number'
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                />
                            </div>
                        </>
                    ) : (
                        // Second Page of the Form
                        <>
                            <div className='flex p-1 m-1 text-white'>
                                <input
                                    type='radio'
                                    id='labourer'
                                    name='role'
                                    value='LABORER'
                                    checked={formData.role === 'LABORER'}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                />
                                <label htmlFor='labourer'>Labourer</label>

                                <input
                                    type='radio'
                                    id='employer'
                                    name='role'
                                    value='EMPLOYER'
                                    checked={formData.role === 'EMPLOYER'}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                />
                                <label htmlFor='employer'>Employer</label>

                                <input
                                    type='radio'
                                    id='administrator'
                                    name='role'
                                    value='ADMINISTRATOR'
                                    checked={formData.role === 'ADMINISTRATOR'}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                />
                                <label htmlFor='administrator'>Administrator</label>
                            </div>

                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='email'>
                                    Certifications
                                </label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='certificate'
                                    placeholder='Certifications'
                                    value={formData.certifications}
                                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='password'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='password'
                                    placeholder='Your Password'
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='password'>
                                    Preferred Language
                                </label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='preferredLanguage'
                                    placeholder='Preferred Language'
                                    value={formData.preferredLanguage}
                                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='flex p-1 m-1 text-white' htmlFor='password'>
                                    Bank Account Number
                                </label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='bankAccountNumber'
                                    placeholder='Bank Account Number'
                                    value={formData.bankAccountNumber}
                                    onChange={(e) => setFormData({ ...formData, bankAccountNumber: e.target.value })}
                                />
                            </div>
                        </>
                    )}

                    <div className='flex justify-center items-center mt-6'>
                        {frontPage ? (
                            <button
                                className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}
                                onClick={() => setFrontPage(false)}
                            >
                                Next
                            </button>
                        ) : (
                            <>
                                <button
                                    className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}
                                    onClick={() => setFrontPage(true)}
                                >
                                    Back
                                </button>
                                <button
                                    className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}
                                    type='submit'
                                >
                                    Register
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
