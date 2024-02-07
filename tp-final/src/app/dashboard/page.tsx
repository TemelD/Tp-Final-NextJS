import React from 'react';
import moment from 'moment';
export default function Page() {
    return (
        <main>
                <div className="grid grid-flow-row-dense grid-cols-12 grid-rows-3 text-black">
                    <div className='col-span-3 px-3'>
                        <div className="text-3xl">{moment().format('dddd')}</div>
                        <div className='text-6xl'>{moment().format('D')}</div>
                        <div className='font-bold flex'>
                        <span className='border-l-4 border-header-4 rounded-xl mr-2'></span><div className='font-bold'>Hi Martha, you have <span className='text-main-2'>13 meetings</span> today</div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div>Upcoming Patient</div>
                        <div>
                            <h3>Temel</h3>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <h2>Patient Queue</h2>
                    </div>
                    <div className='col-span-3'>
                        <h2>Patient Type</h2>
                    </div>
                </div>
        </main>
           
    );
};
