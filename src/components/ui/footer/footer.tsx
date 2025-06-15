import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "../button";

// components/Footer.tsx (or directly in your layout/page)
export default function Footer() {

  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
 <div className='py-1 flex items-center '>
          <img className=' h-17' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjotYujO_NCtJqX9S6hehy-405s09IsJsRA&s" alt=""  />
          {/* <div className='font-bold text-3xl'>olx</div> */}
        </div>         
         <ul className="py-5 px-3">
            <li><a href="#" className="hover:underline">Headquarters</a></li>
            <li><a href="#" className="hover:underline">Gustav Mahlerplein</a></li>
            <li><a href="#" className="hover:underline">1082 MS,Amsterdam</a></li>
            <li><a href="#" className="hover:underline">The Netherlands</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[15px]  mb-4">Brands</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Locations</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Career blog</a></li>
           <li><a href="#" className="hover:underline">Tech blog</a></li>
          <div className="px-3 py-2">
            <Button className='px-5 py-5 border border-white text-white bg-transparent rounded-full'>Careers</Button>
          </div>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[16px] font-semibold mb-4">Manage Preferences</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Statement</a></li>
            <li><a href="#" className="hover:underline">OLX Responsible AI <br /> Principle</a></li>
            <li><a href="#" className="hover:underline">Terms of use</a></li>
            <li><a href="#" className="hover:underline">Developer Hub</a></li>
            <li><a href="#" className="hover:underline">Prosus</a></li>
            <li><a href="#" className="hover:underline">Policies</a></li>

          </ul>
        </div>

        {/* Column 4 */}
        <div>
           <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-500 text-4xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-500 text-4xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-red-600 text-4xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-sm text-white-400">
        © {new Date().getFullYear()} OLX Group. 
      </div>
    </footer>
  );
}
