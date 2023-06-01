import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { MdVerified } from 'react-icons/md';
import { MasterCardIcon } from "../assets"
import { InputForm, DebitCardAndInvoiceSummary } from ".";

interface DebitCardCredentials {
    card_number: number,
    cvv_number: number,
    expiry_month: number,
    expiry_year: number,
    password: string 
}
const PaymentCheckout = () => {
    const [debitCardCredentials, setDebitCardCredentials] = useState<DebitCardCredentials>({
        card_number: 0,
        cvv_number: 0,
        expiry_month: 0,
        expiry_year: 0,
        password: ""
    });
    const handleChange = (event: { target: { name: string; value: string } }) => {
        setDebitCardCredentials((prevState) => ({...prevState, [event.target.name]:event.target.value}))
    }
    const payNowCheckout = (event: React.FormEvent) => {
        event.preventDefault();
        const {card_number, cvv_number, expiry_month, expiry_year, password} = debitCardCredentials
        if(!card_number || !cvv_number || !expiry_month || !expiry_year || !password) return;
        console.log("Pay Now", debitCardCredentials);
    }
    const editPaymentCard = () => {
        console.log("Edit:");
    }
    return(
        <section className="flex flex-col lg:flex-row justify-between lg:mx-10 my-4">
            <form onSubmit={payNowCheckout} className="relative w-full lg:w-[65%] flex flex-col items-start space-y-6">
                <button onClick={editPaymentCard} type="button" title="edit" className="absolute right-0 top-7 flex items-center text-[#015dfe] text-[13px] leading-5 font-semibold gap-1">
                    <HiPencil fontSize={21}/>
                    <span>Edit</span>
                </button>
                <InputForm 
                    title="Card Number" 
                    description="Enter the 16-digit card number on the card" 
                    type="text" 
                    placeholder="2412  -  7512  -  3412  -  3456" 
                    name="card_number" 
                    handleChange={handleChange} 
                    className="flex-col w-full" 
                    prefixIcon={<MasterCardIcon className="w-6 h-6"/>} 
                    suffixIcon={<MdVerified fontSize={21} className="text-[#015dfe]"/>}/>

                <InputForm 
                   title="CVV Number" 
                   description="Enter 3 or 4 digit number on the card" 
                   type="number"  
                   placeholder="327" 
                   name="cvv_number"   
                   handleChange={handleChange} 
                   className="flex-col lg:flex-row w-full text-center" 
                   suffixIcon={<CgMenuGridO className="text-[#a3abb0] w-7 h-7 cursor-pointer"/>}/>
                
                <div className="flex flex-wrap lg:flex-nowrap w-full gap-2 justify-center items-center">
                    <InputForm 
                        type="number"
                        title="Expiry Date" 
                        description="Enter the expiry date of the card" 
                        placeholder="09"
                        name="expiry_month"   
                        handleChange={handleChange} 
                        className="w-full flex-col lg:flex-row text-center"/> 
                    <span>/</span>
                    <InputForm 
                        type="number"  
                        placeholder="22" 
                        name="expiry_year"   
                        handleChange={handleChange} 
                        className="w-[inherit] text-center"/>
                </div>
                <InputForm 
                    title="Password" 
                    description="Enter dynamic password" 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    handleChange={handleChange} 
                    className="flex-col lg:flex-row w-full" 
                    suffixIcon={<CgMenuGridO className="text-[#a3abb0] w-7 h-7 cursor-pointer"/>}/>

                <button type="submit" className="bg-[#015dfe] text-white w-full h-14 flex justify-center items-center rounded-md text-[16px] font-bold outline-none transition-all hover:scale-105 active:scale-100" title="Pay Now">Pay Now</button>
            </form>
            <DebitCardAndInvoiceSummary />
        </section>
    )
}
export default PaymentCheckout;