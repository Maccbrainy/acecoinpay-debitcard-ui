const Logo = () => {
    return(
        <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full border"></div>
            <div className="flex">
                <span className="font-bold">AceCoin</span>
                <span>Pay</span>
            </div>
        </div>
    )
}

const Header = () => {
    return(
        <div className="flex justify-between border mx-10 mt-16">
            <div className="w-full lg:w-[65%] flex items-center justify-between border">
                <Logo/>
                <span>Date</span>
            </div>
        </div>
    )
}
export default Header;