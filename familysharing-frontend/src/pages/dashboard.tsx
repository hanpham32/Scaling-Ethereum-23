import Sidebar from '../components/sidebar/sidebar';
import Image from 'next/image';

function Dashboard() {
    return (
        <div className='flex'>
            {/* <Sidebar /> */}
            <div className='full-dashboard'>
                <div className='left-dashboard flex flex-col justify-center items-center max-w-7xl m-auto'>
                    <div className='px-6 py-16'>
                        <div className='flex items-center'>
                            <Image 
                                src='icons/person1Icon.svg'
                                width={50}
                                height={50}
                                alt='profile image'
                            />
                            <div className='ml-4'>
                                <h2 className='text-3xl md:text-4xl font-bold text-primary-color mb-2'>Michael Chan</h2>
                                <p>Parent</p>
                            </div>
                        </div>
                        
                        <div className='wallet-functions'>
                            <div>
                                <h3>Your Balance</h3>
                                <p>$33,200.95</p>
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