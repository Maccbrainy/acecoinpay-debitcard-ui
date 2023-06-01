import { AiFillApple } from "react-icons/ai";
import { HiWifi } from "react-icons/hi";
import { MasterCardIcon, SmartCardChipIcon, ScrollListIcon } from "../assets"

const DebitCard = () => {
    return(
        <div className="bg-[url('/src/assets/debit-card-bg.svg')] object-cover object-center bg-no-repeat absolute inset-0 shadow-2xl m-auto -translate-y-36 w-[200px] h-[260px] flex flex-col justify-between rounded-xl bg-[#ffffffc7] backdrop-blur-sm p-6 capitalize text-[13px] leading-4">
            <div className="flex justify-between items-center">
                <img className="w-10 h-10" src={SmartCardChipIcon} alt="Smart card"/>
                <HiWifi fontSize={25} className="text-[#202951]"/>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <span>Jonathan Michael</span>
                    <div className="flex items-center text-sm font-bold gap-4">
                        <div className="flex gap-[5px]">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#202951]"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-[#202951]"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-[#202951]"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-[#202951]"></div>
                        </div>
                        <span>3456</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">9/22</span>
                    <div className="flex flex-col items-center">
                        <MasterCardIcon />
                        <span className="text-[6px] lowercase">mastercard</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const InvoiceSummary = () => {
    return(
        <div className="pb-6 capitalize text-[13px] leading-4 space-y-3">
            <div className="flex flex-row justify-between items-center">
                <span>Company</span>
                <div className="flex flex-row justify-center items-center space-x-2">
                    <div className="flex justify-center items-center w-4 h-4 bg-[#202951] rounded-full"><AiFillApple fontSize={12} className=" text-white"/></div>
                    <span className="font-bold">apple</span>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span>Order Number</span>
                <span className="font-bold">1266201</span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span>Product</span>
                <span className="font-bold">MarkBook Air</span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span>VAT (20%)</span>
                <span className="font-bold">$100.00</span>
            </div>
        </div>
    )
}
const InvoiceSummaryAmount = () => {
    return(
        <div className="relative flex flex-row justify-between items-center pt-6 border-t-2 border-dashed text-[13px] leading-5">
            <div className="absolute w-8 h-8 rounded-full bg-white -left-12 -top-4"></div>
            <div className="absolute w-8 h-8 rounded-full bg-white -right-12 -top-4"></div>
            <div className="flex flex-col">
                <span>You have to Pay</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold">549.99</span>
                    <span> USD</span>
                </div>
            </div>
            <img className="w-6 h-6 font-extrabold" src={ScrollListIcon} alt="scroll list icon"/>
        </div>
    )
}

const DebitCardInvoiceSummary = () => {
    return(
        <div className="w-full lg:w-[30%] h-[460px] m-auto lg:m-0">
            <div className="h-full bg-[#ecf1f4] rounded-lg p-8 mt-24 lg:mt-0 relative flex flex-col justify-end">
                <DebitCard/>
                <InvoiceSummary/>
                <InvoiceSummaryAmount/>
            </div>
        </div>
    )
}
export default DebitCardInvoiceSummary;