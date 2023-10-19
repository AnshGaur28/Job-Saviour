import React from 'react';
import hero from '../../public/assets/herobg.png'
import backgroundimg from '../../public/assets/herobg.png'
const Register = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // let email = e.target.elements.email?.value;
        // let password = e.target.elements.password?.value;

        // console.log(email, password);
    };
    // style={{backgroundImage : `url(${hero})`}}
    return (
        <div className='flex gradient rounded p-20'  style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className='p-2 m-1 w-full max-w-md m-auto bg-slate-900 rounded-lg border border-black  shadow-default py-10 px-16 border-2'>
                <h1 className='text-2xl font-medium text-white text-center'>
                    Sign Up !!!!
                    <br></br>
                    Get youself Started
                </h1>

                <form onSubmit={handleFormSubmit}>

                    <div>
                        <label className='flex p-1 m-1 text-white ' htmlFor='email'>Username</label>
                        <input
                            type='name'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your name'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='email'>Skills</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='skills'
                            placeholder='skills'
                        />
                    </div>
                    
                    <div>
                        <label className='flex p-1 m-1 text-white' htmlFor='email'>Contact Number</label>
                        <input
                            type='number'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='contact'
                            placeholder='Contact Number'
                        />
                    </div>
                    

                    <div className='flex justify-center items-center mt-6'>
                        <button className={'bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'}>
                            <a href='registerFinal'>Next</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default  Register;
