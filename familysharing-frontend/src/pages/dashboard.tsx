import Sidebar from '../components/sidebar/sidebar';
import Image from 'next/image';

function Dashboard() {
    return (
        <div className='flex text-primary-color'>
            {/* <Sidebar /> */}
            <div className='full-dashboard'>
                <div className='left-dashboard flex flex-col justify-center items-center max-w-7xl m-auto'>
                    <div className='px-6 py-16'>
                        <div className='flex items-center mb-4'>
                            <Image 
                                src='icons/person1Icon.svg'
                                width={50}
                                height={50}
                                alt='profile image'
                            />
                            <div className='ml-4'>
                                <h2 className='text-3xl md:text-4xl font-bold mb-2'>Michael Chan</h2>
                                <p>Parent</p>
                            </div>
                        </div>
                        
                        <div className='wallet-functions flex gap-4'>
                            <div className='bg-[#F0FCFF] rounded-3xl p-6'>
                                <h3 className='text-3xl mb-4'>Your Balance</h3>
                                <p className='text-3xl font-bold mb-4'>$33,200.95</p>
                                <Image 
                                    src='icons/coinsIcon.svg'
                                    alt='coins'
                                    width={99}
                                    height={80}
                                />
                            </div>
                            <div className='bg-[#F0FCFF] rounded-3xl p-6'>
                                <Image 
                                    src='icons/messageIcon.svg'
                                    alt='coins'
                                    width={99}
                                    height={80}
                                />
                                <h3 className='text-3xl mb-4 font-bold'>New Message!</h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button className="py-2 px-6 bg-primary-color font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                    Send
                                </button>
                                <button className="py-2 px-4 bg-primary-color font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                    Receive
                                </button>
                                <button className="py-2 px-4 bg-primary-color font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard