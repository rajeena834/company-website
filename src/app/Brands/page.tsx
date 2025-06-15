import React from 'react'

export default function BrandsPage(){
    return(
        <main>
             {/* hero-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
                <div className="col-span-1">
                    <img
                        src="https://www.olxgroup.com/content/uploads/2023/01/Square-Photo-10.jpg"
                        alt="home" />

                </div>
                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                           Our brands
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Our well-loved consumer brands offer safe, smart,<br/>
                             and convenient trading platforms and services for <br/>our customers.
                        </p>
                        <br /><br />
                        <p>Discover what we do and where we operate.


                        </p>
                    </div>
                </div>


            </div>
            
            {/*content1-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>

                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                       Our tech <br/>blog
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Check out our OLX tech blog to find out more about our challenges <br/>and solutions.
                        </p>
      
                    </div>
                </div>
                <div className="col-span-1">
                    <img
                        src="/image31.png"
                        alt="home" />

                </div>

            </div>

 

        </main>
    )

}