import Link from "next/link";

const Footer = () => {
    return (
        <div className="border-t-[2px] border-t-black-500">
            <div className="container mx-auto mt-[70px] ">
                <div className="flex justify-between border-b-[2px] border-b-black-500 pb-[30px]">
                    <div className="w-[400px]">
                        <h1 className="text-[24px] font-bold">Funiro.</h1>
                        <p>400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
                    </div>
                    <div className="w-[68px] flex flex-col gap-10">
                        <p>Links</p>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Shop</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contacts'}>Contacts</Link>
                    </div>
                    <div className="w-[144px] flex flex-col gap-10">
                        <p>Help</p>
                        <Link href={'/payment'}>Payment Options</Link>
                        <Link href={'/returns'}>Returns</Link>
                        <Link href={'/privacy'}>Privacy Policies</Link>
                    </div>
                    <div className="w-[286px] flex flex-col gap-10">
                        <p>Newsletter</p>
                        <form className="flex gap-2">
                            <input type="text" placeholder="Your email address" className="border-b-[2px]" />
                            <button className="underline">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="h-[100px] pt-[35px]">
                    <p>2023 furino. All rights reverved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;