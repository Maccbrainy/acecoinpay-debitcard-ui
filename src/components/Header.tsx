import { format } from 'date-fns'
import { AcecoinLogo } from "../assets"
import { useEffect, useState } from 'react'

const LogoComponent = () => {
    return(
        <div className="flex items-center space-x-2.5 cursor-pointer">
            <div className="w-8 h-8 flex justify-center items-center bg-[#015dfe] rounded-full">
                <img className="w-5 h-5" src={AcecoinLogo} alt="AcecoinPay logo" />
            </div>
            <div className="flex">
                <span className="font-bold">AceCoin</span>
                <span>Pay</span>
            </div>
        </div>
    )
}
const DateComponent = () => {
    const [dateInfo, setDateInfo] = useState<string[]>([""]);
    const dateMonthAndYear:string = format(new Date(), 'MM:yy');

    useEffect(() => {
        const dateInfoArray: string[] = dateMonthAndYear.split("");
        setDateInfo(dateInfoArray);
    },[dateMonthAndYear]);
    return(
        <div className='flex items-center gap-[2px] font-normal text-white'>
            <>
                {
                    dateInfo.map((info: string, index: number) => 
                        <span key={info + index} className='rounded-[4px] py-1 px-[6px] bg-[#202951] [&:nth-child(3)]:bg-transparent [&:nth-child(3)]:font-bold [&:nth-child(3)]:text-[#202951] [&:nth-child(3)]:px-px'>{info}</span>
                    )
                }
            </>
        </div>
    )
}
const Header = () => {
    return(
        <section className="flex justify-between lg:mx-10 pt-10">
            <div className="w-full lg:w-[65%] flex items-center justify-between">
                <LogoComponent/>
                <DateComponent />
            </div>
            <div className="hidden w-[30%] lg:flex justify-center">
                <button className="h-8 w-12 bg-[#015dfe] rounded-lg" type="button" title="check"></button>
            </div>
        </section>
    )
}
export default Header;