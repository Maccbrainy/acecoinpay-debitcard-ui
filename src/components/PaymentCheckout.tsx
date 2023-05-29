const DebitCard = () => {
    return(
        <div className="absolute inset-0 shadow-2xl m-auto -translate-y-40 w-52 h-60 flex flex-col justify-between rounded-xl bg-[#ffffffc7] backdrop-blur-sm p-6 text-[13px] leading-4">
            <div className="flex justify-between">
                <span>chip icon</span>
                <span>Wifi icon</span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <span>Jonathan Michael</span>
                    <div className="flex items-center text-sm font-bold gap-4">
                        <div className="flex gap-[5px]">
                            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                        </div>
                        <span>3456</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">9/22</span>
                    <div className="flex flex-col items-center">
                        <span>Master card</span>
                        <span className="text-[6px]">mastercard</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const InvoiceSummary = () => {
    return(
        <div className="pb-6 text-[13px] leading-4 space-y-3">
            <div className="flex flex-row justify-between items-center">
                <span>Company</span>
                <div className="flex space-x-2">
                    <span>Icon</span>
                    <span className="font-bold">Apple</span>
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
        <div className="relative flex flex-row justify-between items-center pt-6 border-t border-dashed text-[13px] leading-5">
            <div className="absolute w-8 h-8 rounded-full bg-black -left-12 -top-4"></div>
            <div className="absolute w-8 h-8 rounded-full bg-black -right-12 -top-4"></div>
            <div className="flex flex-col">
                <span>You have to Pay</span>
                <div className="flex gap-1">
                    <span className="font-bold">549.99</span>
                    <span> USD</span>
                </div>
            </div>
            <span>Icon</span>
        </div>
    )
}
const PaymentCheckout = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-between border mx-10 my-8">
            <div className="w-full lg:w-[65%] flex flex-col items-start space-y-5 border">
                <div className="w-full flex flex-col gap-5 items-center">
                    <div className="w-full flex justify-between text-[13px] leading-5">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Card Number</span>
                            <span>Enter the 16-digit card number on the card</span>
                        </div>
                        <div>Edit Icon</div>
                    </div>
                    <div className="w-full border rounded-md h-[50px]">Input form</div>
                </div>

                <div className="w-full flex flex-row items-center gap-5">
                    <div className="w-full flex justify-between text-[13px] leading-5">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">CVV Number</span>
                            <span>Enter 3 or 4 digit number on the card</span>
                        </div>
                        {/* <div>Edit Icon</div> */}
                    </div>
                    <div className="w-full border rounded-md h-[50px]">Input form</div>
                </div>

                <div className="w-full flex flex-row items-center gap-5">
                    <div className="w-full flex justify-between text-[13px] leading-5">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Expiry Date</span>
                            <span>Enter the expiry date of the card</span>
                        </div>
                        {/* <div>Edit Icon</div> */}
                    </div>
                    <div className="w-full border rounded-md h-[50px]">Input form</div>
                </div>

                <div className="w-full flex flex-row items-center gap-5">
                    <div className="w-full flex justify-between text-[13px] leading-5">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Password</span>
                            <span>Enter dynamic password</span>
                        </div>
                        {/* <div>Edit Icon</div> */}
                    </div>
                    <div className="w-full border rounded-md h-[50px]">Input form</div>
                </div>

                <div className="w-full h-16 flex justify-center items-center border rounded-md text-[16px] font-bold">Pay Now</div>

            </div>
            <div className="w-full lg:w-[30%] h-[420px] border m-auto lg:m-0">
                <div className="h-full border bg-[#ecf1f4] rounded-lg p-8 mt-24 lg:mt-0 relative flex flex-col justify-end">
                    <DebitCard/>
                    <InvoiceSummary/>
                    <InvoiceSummaryAmount/>
                </div>
            </div>
        </div>
    )
}
export default PaymentCheckout;