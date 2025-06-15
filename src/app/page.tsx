import { Button } from '@/components/ui/button'
import React from 'react'

function HomePage() {
const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
  '/logos/logo8.png',
  '/logos/logo9.png',
]

const cards = [
    {
      image: '/images/img1.png',
      text: 'OLX Group appoints Christian Gisy as its new CEO',
      buttonLabel: '18/04/2024',
      logo: '/logos/logo5.png',
    },
    {
      image: '/images/img2.png',
      text: '71% of Indian Consumers Upgrade to Less Carbon',
      buttonLabel: '05/04/2023',
      logo: '/logos/logo5.png',
    },
    {
      image: '/images/img3.png',
      text: 'In Conversation with our CEO, Lydia Paterson',
      buttonLabel: '27/03/2023',
      logo: '/logos/logo5.png',
    },
  ];
  return (
    <div>
      <div className='mt-3 grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center  bg-[rgb(155,255,160)]'>
        <div className="col-span-1">
          <img
            src="https://www.olxgroup.com/content/uploads/2024/11/3F3A8857_2-scaled-e1732810248807-1080x1080.jpg"
            alt="home" />

        </div>
        <div className="px-8 col-span-1 flex gap-5 min-h-[80vh] justify-center">
          <div>
            <h1 className='lg:text-[45px] text-2xl font-bold text-primary leading-normal'>
              Together we're <br />building a more<br />
              sustainable world<br />throught trade
            </h1>
            <br /><br />
            <p className='text-gray-600 text-2xl font-semibold'>
              We build leading marketplace ecosystem enabled by tech <br />powered by triust and loved by our customers
            </p>
            <div className='py-10 flex  gap-5'>
              <Button className='px-8 py-6 rounded-full text-[16px]'>Our open roles</Button>
              <Button className='px-8 py-6 rounded-full text-[16px]'>More about us</Button>
            </div>
            <p className='px-8'>Discover more</p>
          </div>

        </div>


      </div>

      {/* second-section */}

      <div className=' px-10 grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[60vh] items-center '>
        <div className="col-span-1 items-center">
          <div>
            <div className='flex items-center'>
              <img className='w-auto h-30' src="https://cdn-images-1.medium.com/max/1200/1*CEC1iXf2TGEZr7O4yeaDNw.png" alt="" />
              <div className='font-bold text-6xl'>olx</div>
            </div>

            <div className='px-20 text-6xl font-bold'>at a glance</div>
            <br />
            <br />
            <p className='px-15 text-[18px]'>Serving hundreds of millions of people<br />
              every month, we help people buy and sell<br /> cars, find housing, get jobs,
              buy and sell <br />household goods, and much more. Our<br /> person-to-person trading
              platforms offer<br /> easier than ever ways for people to trade.</p>
          </div>
          <div className='px-15 py-7'>
            <Button className='py-6 px-6 rounded-full text-md'>More about OLX</Button>

          </div>
        </div>
        <div className="col-span-1 flex justify-center">

          <img className='mt-5 ' src="/secon_section.png" alt="" />


        </div>

      </div>

      {/* third-section*/}
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[80vh] items-center' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
        <div className="col-span-1">
          <img
            src="/third.png" className='h-128 w-145'
            alt="home" />

        </div>
        <div className="col-span-1 flex ">
          <div>
            <h1 className='lg:text-7xl text-[80px] font-bold text-primary'>
              Our Brands

            </h1>
            <br /><br />
            <p className='text-gray-600 text-[20px] font-semibold'>
              We are a global leader in facilitating trade, with many well-loved,<br />
               market-leading local brands.
            </p>
            <br /><br />
            <p className='text-[20px]'>Our consumer brands offer safe, smart, and convenient trading<br />
             platforms and services for our customers. From 
              AutoTrader to<br /> Otomoto, our innovative
              platforms help people trade in growth <br />markets across Europe and South
              Africa. </p>
          </div>
        </div>
        

      </div>
      
      <div className="  px-70 py-12 "style={{ backgroundColor: 'rgba(221,236,232,255)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex justify-center ">
        {logos.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
          >
            <img src={src} alt={`Logo ${index + 1}`} className="h-24 object-contain" />
          </div>
        ))}
      </div>
    </div>

      {/* fourth-section */}
      <div className=' grid grid-cols-1 lg:grid-cols-2  min-h-[90vh] items-center' style={{ backgroundColor: 'rgba(43, 63, 46, 1)' }}>
        <div className="col-span-1">
          <div className='px-30 bg-[rgba(43, 63, 46, 1)]'>
            <h1 className='lg:text-5xl text-2xl font-bold text-white'>
              Our Impact <br />building a more<br />
              sustainable world<br />throught trade
            </h1>
            <br /><br />
            <p className='text-gray-600 text-2xl font-semibold text-white'>
              we build leading marketplace<br /> ecosystem enabled by tech <br />powered by triust and <br />loved by our customers
            </p>
            <div className='py-10'>
              <Button className='px-15 py-6 text-1.5xl bg-white text-black rounded-full'>learn about our positive impact on the world</Button>
            </div>
          </div>


        </div>
        <div className=" col-span-1 flex justify-center">
          <img
            src="/fourth.png" className="w-152 h-152 align-items-center"
            alt="home" />
        </div>

      </div>

      {/* fifth-section */}
      <div className=' grid grid-cols-1 lg:grid-cols-2  gap-5 min-h-[60vh]  ' style={{ backgroundColor: 'rgba(11,35,80,255)' }}>
        <div className="col-span-1">
          <img
            src="/fifth.png" className="py-15 px-30 w-180 h-152"
            alt="home" />

        </div>
        <div className="col-span-1 text-white">
          <div>
            <h1 className='mt-20 lg:text-[80px] text-3xl font-bold leading-normal' style={{ color: "rgba(149,213,255,1)" }}>
              Come work<br /> <span className='outline-text1 text-transparent'>with us</span>
            </h1>
            
            <p className='text-gray-600 text-1xl font-semibold text-white '>
              OLX is powered by a global team of thousands. <br /><br />
            </p>
            We combine the spirit and agility of a startup with our global scale <br />
            and the backing
            of Prosus, a global consumer internet group and <br />one of the largest technology investors in the world.
          </div>
          <div className='py-10 px-5'>
            <Button className='py-6 px-6 bg-white text-black text-lg rounded-full'>Check our open roles</Button>
          </div>
        </div>

      </div>

      {/* sixth-section */}
      <div className='px-20 py-6 grid grid-cols-1 lg:grid-cols-2 h-[80vh] ' style={{ backgroundColor: 'rgba(221,236,232,255)' }}>

        <div className="col-span-1 ">
          <div>
            <h1 className='py-6 lg:text-7xl text-3xl font-bold text-primary' style={{ color: "rgba(95,128,111,255)" }}>
              Our tech <br />
               </h1>
              <div className='outline-text text-transparent text-7xl font-bold' ><h1>blog</h1></div> <br />
           
           
            <p className='text-gray-600 text-black text-[18px] '>
              Every day we use technology to work on solving real-world <br />problems.
               <br />
              <br />Check out our tech blog to find out more about how we do this, as <br />
              well as our challenges and solutions, across the fields of Product, <br />
              Data and Tech.
            </p>
            <br />
            <div>
              <Button className='bg-black text-white px-6 py-6 text-[16px] rounded-full'>
                Go to our tech blog
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="/sixth.png" className="py-1 w-140 h-132"
            alt="home" />

        </div>

      </div>
      
      {/*newsroom-section*/ }
     <div className='px-50 mt-20 '>
       <h1 className='text-6xl font-bold '>Newsroom</h1>
       <p className='text-[20px] py-5'>Read the latest happenings at OLX.
</p>
     </div>
       <div className="max-w-7xl mx-auto mb-20">
      <div className="px-25 grid grid-cols-1 md:grid-cols-3 gap-6 flex justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md  grid flex flex-col items-center  space-y-4"
          >
            {/* Image */}
            <img src={card.image} alt="Card Image" className="w-full h-40 object-cover rounded" />
<br />
            {/* Text */}
            <div className="p-6 font-bold text-gray-800 text-[20px]">{card.text}</div>
<br />
            <div className='p-6 flex justify-between'>
              {/* Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">
              {card.buttonLabel}
            </button>

            {/* Logo */}
            <img src={card.logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default HomePage