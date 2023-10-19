import React from 'react';
import hero from '../../public/assets/herobg.png'
import backgroundimg from '../../public/assets/herobg.png'
const RegisterFinal = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // let email = e.target.elements.email?.value;
        // let password = e.target.elements.password?.value;

        // console.log(email, password);
    };
    // style={{backgroundImage : `url(${hero})`}}
    return (
        <div className='flex gradient rounded p-10'  style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className='p-1 m-1 w-full max-w-md m-auto bg-slate-900 rounded-lg border border-black  shadow-default py-10 px-16 border-2'>
                <h1 className='text-2xl font-medium text-white text-center m-1'>
                    Sign Up &
                    <br></br>
                    Get youself Started
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        
                        <form className='flex justify-start text-white rounded'>
                            <input
                                type='radio'
                                className={` m-2 p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                name='role'
                                value={'Labourer'}
                            /> Labourer
                            <br/>
                            <input
                                type='radio'
                                className={`m-2 p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                name='role'
                                value={'Employer'}
                            />
                            Employer
                            <br/>
                            <input
                                type='radio'
                                className={`m-2 p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                name='role'
                                value={'Administrator'}
                            />
                            Admin
                            <br/>
                        </form>
                        
                    </div>

                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='email'>Certifications</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='certificate'
                            placeholder='Certifications'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='password'>Prefered Language</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Prefered Language'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='password'>Bank Account Number</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Bank Account Number'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}>
                            <a href='registerFinal'>Register</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default  RegisterFinal;
