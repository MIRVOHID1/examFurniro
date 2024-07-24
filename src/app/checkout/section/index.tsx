"use client"
import { Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import TextArea from 'antd/es/input/TextArea';
import Image from 'next/image';
import image1 from '../../../assets/icons/Location.svg'
import image2 from '../../../assets/icons/Phone (3).svg'
import image3 from '../../../assets/icons/Time.svg'

const Index = () => {

    const { handleSubmit, formState: { errors }, control, reset } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mx-auto">
            <div className="mb-[100px] mt-[100px]">
                <h1 className="text-center font-semibold text-[36px]">Get In Touch With Us</h1>
                <p className="text-center font-normal text-[16px] w-[646px] mx-auto text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex justify-evenly">
                <div className="card w-1/2 h-[100%] rounded-[29px]"  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <div className="flex">
                                <div>
                                    <p className='mb-[20px]'>First Name</p>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        rules={{ required: "Name is required" }}
                                        render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Abs" {...field} status={errors.name ? "error" : ""} />}
                                    />
                                </div>
                                <div>
                                    <p className='mb-[20px]'>Last Name</p>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        rules={{ required: "Name is required" }}
                                        render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Abs" {...field} status={errors.name ? "error" : ""} />}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='mb-[20px]'>Email address</p>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "Email is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Abs@gmail.com" {...field} status={errors.email ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Subject</p>
                                <Controller
                                    name="subject"
                                    control={control}
                                    rules={{ required: "Subject is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="This is an optional" {...field} status={errors.subject ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Message</p>
                                <Controller
                                    name="message"
                                    control={control}
                                    rules={{ required: "Message is required" }}
                                    render={({ field }) => <TextArea className="mb-[20px]" style={{ width: '100%', height: '106px' }} placeholder="Hi! i’d like to ask about" {...field} status={errors.messaga ? "error" : ""} />}
                                />
                            </div>
                            <div className='flex gap-4'>
                                <button type="submit" className="bg-[#B88E2F] text-white w-[237px] h-[55px] rounded">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="">
                    <div className="flex gap-5 mb-[50px]">
                        <div>
                            <Image src={image1} alt="image1" className="w-[22px] h-[27px]" />
                        </div>
                        <div>
                            <p className="font-medium text-[24px]">Address</p>
                            <p className="text-[16px] font-semibold w-[212px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mb-[50px]">
                        <div>
                            <Image src={image2} alt="image1" className="w-[22px] h-[27px]" />
                        </div>
                        <div>
                            <p className="font-medium text-[24px]">Address</p>
                            <p className="text-[16px] font-semibold w-[212px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <Image src={image3} alt="image1" className="w-[22px] h-[27px]" />
                        </div>
                        <div>
                            <p className="font-medium text-[24px]">Address</p>
                            <p className="text-[16px] font-semibold w-[212px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;