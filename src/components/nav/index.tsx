import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logos/Frame 168.svg";
import account from "../../assets/icons/account.svg";
import cart from "../../assets/icons/cart.svg";
import like from "../../assets/icons/like.svg";
import search from "../../assets/icons/search.svg";

interface NavProps {
  toggleCart: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleCart }) => {
  return (
    <div className="w-[100%] h-[100px] sticky top-0 bg-white z-50 shadow shadow-slate-300">
      <div className="container mx-auto flex justify-between items-center h-[100px]">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={185} height={41} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="px-[16px] text-[#000] hover:text-[#000] transition-all duration-50 transform hover:scale-105 font-medium" href="/">Home</Link>
          <Link className="px-[16px] text-[#000] hover:text-[#000] transition-all duration-50  transform hover:scale-105 font-medium" href="/shop">Shop</Link>
          <Link className="px-[16px] text-[#000] hover:text-[#000] transition-all duration-50  transform hover:scale-105 font-medium" href="/blog">Blog</Link>
          <Link className="px-[16px] text-[#000] hover:text-[#000] transition-all duration-50 hover:scale-105 font-medium" href="/contact">Contact</Link>
        </div>
        <div className="flex gap-[50px] items-center">
          <a href="https://www.instagram.com/seedra_seeds/">
            <Image src={account} alt="instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/seedra.seeds">
            <Image src={search} alt="facebook" width={24} height={24} />
          </a>
          <Link href="/like">
            <Image src={like} alt="lupa" width={24} height={24} />
          </Link>
          <button onClick={toggleCart}>
            <Image src={cart} alt="cart" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
