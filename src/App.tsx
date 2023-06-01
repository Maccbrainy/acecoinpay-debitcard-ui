import './App.css'
import { MdClear } from 'react-icons/md';
import { PaymentCheckout, Header } from './components'
function App() {
  return (
    <div className='min-h-screen flex items-center justify-center overflow-x-auto px-4'>
      <div className="bg-[url('/src/assets/payment-checkout-bg.svg')] object-contain bg-no-repeat w-full max-w-[1000px] h-full lg:h-[100vh] text-[#202951] lg:mt-12 lg:mb-10 lg:border relative">
          <div className='w-full h-full bg-[#ffffffc7] backdrop-blur'>
            <MdClear fontSize={35} className="p-[9.5px] bg-[#f8f8f8] right-0 absolute  text-[#202951] cursor-pointer" />
            <Header/>
            <PaymentCheckout/>
          </div>
      </div>
    </div>
    
  )
}
export default App
