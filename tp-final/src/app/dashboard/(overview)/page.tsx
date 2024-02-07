import React from 'react';
import moment from 'moment';
import {ArrowDownCircleIcon,ArrowRightIcon} from '@heroicons/react/24/outline';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

export default function Page() {
    return (
        <main>
                <div className="grid grid-flow-row-dense grid-cols-12 grid-rows-3 text-black">
                    <div className='col-span-3 px-3 flex flex-col gap-5'>
                        <div className="text-3xl">{moment().format('dddd')}</div>
                        <div className='text-6xl'>{moment().format('D')}</div>
                        <div className='font-bold flex'>
                        <span className='border-l-4 border-header-4 rounded-xl mr-2'></span><div className='font-bold'>Hi Martha, you have <span className='text-main-2'>13 meetings</span> today</div>
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-6'>
                        <div className='bg-header-4 justify-evenly items-center rounded-full text-2xl flex p-4'>
                            <span>Upcoming Patient</span>
                            <ArrowDownCircleIcon className="h-10 w-10" />
                            </div>
                        <div className='bg-white rounded-3xl flex items-center'>
                            <div className=''>
                            <Image
                                src="/Temel.jpg"
                                width={75}
                                height={75}
                                className="hidden md:block rounded-full"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <h3 className='font-bold'>Dean Ferrera</h3>
                                    <p className='text-main-2'>Patient since Jan, 2021</p>
                                </div>
                                <div className='flex justify-center items-center gap-3 font-bold'>
                                    <span className='bg-main-1 rounded-3xl px-6 py-1'> 3:00</span>
                                    <span className="bg-header-4 rounded-3xl px-4 py-0.5">
                                        <ArrowRightIcon className="h-5 w-5" />
                                    </span>
                                    <span className='bg-main-1 rounded-3xl px-6 py-1'>3:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 border-2 rounded-3xl text-start mx-12 p-3'>
                        <h2 className='font-bold border-b-2 mx-5 pb-2'>Patient Queue</h2>
                        {[...Array(3)].map((_, index) => (
                        <div key={index}>
                        <div className='flex justify-start gap-3 m-auto'>
                            <div>
                                <span className='text-main-2'>8AM</span>
                            </div>
                            <div>
                                <p className='truncate'>{faker.person.fullName({ sex :'male'})}</p>
                                <span>
                                <Image
                                src= {faker.image.avatarLegacy()}
                                width={30}
                                height={30}
                                className="hidden md:block rounded-full"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                                </span>
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                    <div className='col-span-3'>
                        <h2>Patient Type</h2>
                    </div>
                </div>
        </main>
           
    );
};
