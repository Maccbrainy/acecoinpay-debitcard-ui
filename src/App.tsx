import './App.css'
import { PaymentCheckout, Header } from './components'
function App() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-[1000px] lg:h-[100vh] bg-[#ffffffc7] mt-12 mb-12 border'>
          <Header/>
          <PaymentCheckout/>
      </div>
    </div>
    
  )
}
export default App
