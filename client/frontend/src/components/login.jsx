import React from 'react';
import hero from '../../public/assets/herobg.png'
import backgroundimg from '../../public/assets/herobg.png'
const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // let email = e.target.elements.email?.value;
        // let password = e.target.elements.password?.value;

        // console.log(email, password);
    };
    // style={{backgroundImage : `url(${hero})`}}
    return (
        <div className='h-screen flex bg-blue-gray gradient rounded'  style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className='w-full max-w-md m-auto bg-slate-300 rounded-lg border border-black  shadow-default py-10 px-16 border-2'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className='flex p-1 m-1' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
