import './App.css'
import {StickyNavbar} from './components/navbar'
function App() {
  return (
    <>
      <StickyNavbar/>
      <div className='flex justify-start p-2 m-2'>        
      <h1 className="p-4  mt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">We invest in the world’s potential</h1>
      </div>
      <div><p className="  align-text-bottom mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p></div>
      <div className='flex w-full'>
          <img src="\public\assets\food-saviours-high-resolution-color-logo.png" className='flex w-3/5 h-80 p-2 m-2'></img>
          <span className='w-full'>
            <button className='mt-56 align-bottom justify-items-end h-14 p-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Get Started</button>
          </span>
          
      </div>
  
    </>
      
  )
}

export default App
