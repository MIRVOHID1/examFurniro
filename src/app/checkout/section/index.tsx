"use client"
import { Input } from "antd";
import { useForm, Controller } from "react-hook-form";


const Index = () => {

    const { handleSubmit, formState: { errors }, control, reset } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-evenly">
                <div className="card w-1/2 h-[100%] rounded-[29px] px-[100px] mt-[80px]"  >
                    <h1 className="text-[36px] font-medium leading-[43.2px] mb-[60px]">Billing details</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6">
                                <div className="w-1/2">
                                    <p className='mb-[20px]'>First Name</p>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        rules={{ required: "Name is required" }}
                                        render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Abs" {...field} status={errors.name ? "error" : ""} />}
                                    />
                                </div>
                                <div className="w-1/2">
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
                                <p className='mb-[20px]'>Company Name {`(Optional)`}</p>
                                <Controller
                                    name="companyName"
                                    control={control}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} {...field} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Country / Region</p>
                                <Controller
                                    name="countryRegion"
                                    control={control}
                                    rules={{ required: "Country / Region is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Sri Lanka" {...field} status={errors.subject ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Street address</p>
                                <Controller
                                    name="streetAddress"
                                    control={control}
                                    rules={{ required: "Street address is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} {...field} status={errors.stretAddress ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Town / City</p>
                                <Controller
                                    name="townCity"
                                    control={control}
                                    rules={{ required: "Town / City is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }}  {...field} status={errors.townCity ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Province</p>
                                <Controller
                                    name="province"
                                    control={control}
                                    rules={{ required: "Province is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Western Province" {...field} status={errors.province ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>ZIP code</p>
                                <Controller
                                    name="zipCode"
                                    control={control}
                                    rules={{ required: "ZIP code is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} {...field} status={errors.zipCode ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Phone</p>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: "Phone is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} {...field} status={errors.phone ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <p className='mb-[20px]'>Email address</p>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "Email is required" }}
                                    render={({ field }) => <Input className="mb-[50px]" style={{ width: '100%', height: '56px' }} {...field} status={errors.email ? "error" : ""} />}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: "Phone is required" }}
                                    render={({ field }) => <Input className="mb-[20px]" style={{ width: '100%', height: '56px' }} placeholder="Additional information" {...field} status={errors.phone ? "error" : ""} />}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 px-[80px] mt-[130px]">
                    <div className="max-w-md">
                        <div className="mb-6">
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Product</span>
                                <span className="font-bold">Subtotal</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Asgaard sofa x 1</span>
                                <span>Rs. 250,000.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>Rs. 250,000.00</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="mb-4">
                                <input type="radio" id="bank-transfer" name="payment-method" defaultChecked className="mr-2" />
                                <label htmlFor="bank-transfer" className="font-bold">
                                    Direct Bank Transfer
                                </label>
                                <p className="text-sm text-gray-600 mt-2">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div>
                                <input type="radio" id="cash-on-delivery" name="payment-method" className="mr-2" />
                                <label htmlFor="cash-on-delivery" className="font-bold">
                                    Cash On Delivery
                                </label>
                            </div>
                        </div>
 
                        <p className="text-sm text-gray-600 mb-6">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="underline">privacy policy</a>.
                        </p>

                        <button className="w-full py-2 border border-black py-4 w-[318px] flex justify-center mx-auto text-black rounded-lg">
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;