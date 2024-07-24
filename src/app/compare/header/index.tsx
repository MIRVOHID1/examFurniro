import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/icons/Meubel House_Logo.svg"
import "./index.css";

const HeaderShop = () => {
    return (
        <div className="headerShop">
            <div className="items-center pt-[110px]">
                <Image className="mx-auto" src={Logo} alt="Shop" width={100} height={100} />
                <p className="text-[48px] mt-[0px] pt-[0px] font-medium text-center items-center">Product Comparison</p>
                <p className="text-[16px] font-medium text-center items-center text-[16px]"><Link className="font-medium" href={'/'}>Home</Link> {'>'} Product Comparison</p>
            </div>
        </div>
    );
}

export default HeaderShop;