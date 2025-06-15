import React from 'react'

export default function LocationsPage() {
    return (
        <main>
            {/* hero-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
                <div className="col-span-1">
                    <img
                        src="https://www.olxgroup.com/content/uploads/2023/06/3F3A3674-1080x1080.jpg"
                        alt="home" />

                </div>
                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            Our locations
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Large and small, each of our offices powers our <br />
                            consumer brands that are recognised around the<br /> world.
                        </p>
                        <br /><br />
                        <p>Covering functions from data science to design – <br />
                            our teams are focussed on helping our customers  <br />
                            find the products and services they need.


                        </p>
                    </div>
                </div>


            </div>

            {/*content1-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>

                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            Our tech <br />blog
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Check out our OLX tech blog to find out more about our challenges <br />and solutions.
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