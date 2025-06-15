import React from 'react';

export default function AboutPage() {
    return (
        <div>
            {/* hero-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
                <div className="col-span-1">
                    <img
                        src="https://www.olxgroup.com/content/uploads/2024/11/3F3A9243_1-1-e1732810596393-1080x1080.jpg"
                        alt="home" />

                </div>
                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            About OLX
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            We are a global leader in facilitating trade.
                        </p>
                        <br /><br />
                        <p>We build leading marketplace ecosystems <br />enabled by tech,
                            powered by trust, and loved by <br />customers.
                        </p>
                    </div>
                </div>


            </div>
            
            {/*content1-section*/}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>

                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            Who we are and what we do
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Serving hundreds of millions of people every month, we help people <br />
                            buy and sell cars, find housing, get jobs, buy and sell household<br /> goods, and much more.
                        </p>
                        <br /><br />
                        <p>Our well-loved consumer brands (including OLX, Otomoto,<br />
                            Property24, and more) offer safe, smart, and convenient trading<br />
                            platforms and services for our customers.


                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <img
                        src="/image22.png"
                        alt="home" />

                </div>

            </div>

            {/* content2-section */}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
                <div className="col-span-1">
                    <img
                        src="/image23.png"
                        alt="home" />

                </div>
                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            Our history
                        </h1>
                        <br /><br />
                        <p className='text-gray-600 text-2xl font-semibold'>
                            Did you know our company began life back in 2006? As we’ve<br />
                            grown, we’ve changed from a small collection of classifieds brands, <br />
                            to a global player with one strategy and vision.                        </p>
                        <br /><br />
                        <p>We don’t just help our users buy and sell things, find a<br />
                            job, or find a service provider – we now offer many of these ourselves, and more.<br />
                            Our aim across all of our brands is to make secondhand trade easy,<br />
                            convenient, and stress-free.
                        </p>
                    </div>
                </div>
            </div>

            {/* content3-section */}
            <div className=' px-5 grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center '>

                <div className="col-span-1 items-center">



                    <div className='px-5 text-4xl'>OLX worldwide</div>
                    <br />
                    <br />
                    <p className='text-2xl'>We are powered by teams around the world, working on consumer <br />
                        brands that are known and loved by millions.<br /><br />

                        We combine global scale with strong local teams who are closest to <br />our customers.
                        And our offices don’t just look after their local<br />
                        brands – we also have tech hubs where the focus is on customer<br />
                        centricity and innovation for everyone.<br /><br />

                        This combination allows us to understand our customer, innovate – <br />
                        and do it at scale.</p>
                </div>
                <div className="col-span-1">
                    <img
                        src="/image24.png"
                        alt="home" />

                </div>


            </div>
            <div>
            </div>

            {/* content4-section */}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
                <div className="col-span-1">
                    <img
                        src="/image25.png"
                        alt="home" />

                </div>
                <div className="col-span-1 flex justify-center">
                    <div>
                        <h1 className='lg:text-7xl text-5xl font-bold text-primary'>
                            Our culture
                        </h1>
                        <br /><br />
                        <p>We combine the spirit and agility of a startup with our global scale<br />
                            and the backing of Prosus, one of the largest consumer internet<br />
                            groups in the world.<br /><br />

                            Our culture is all about growth: we empower our teams to innovate<br />
                            and we avoid bureaucracy. And our commitment to inclusion<br />
                            ensures we listen to a diverse range of voices when making <br />decisions.
                        </p>
                    </div>
                </div>


            </div>

           
        </div>
    )
}