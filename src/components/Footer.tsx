import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="border-t border-gray-300 mt-20  pt-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-12  gap-4">
        <div className="col-span-5 space-y-2">
          <img src={logo} alt="logo" />
          <p className="text-gray-500">
            Curated tools, technologies, and resources for developers building <br />
            modern software.
          </p>
          <ul className="flex gap-4 mb-7 pt-4">
            <li className="text-gray-700 font-semibold">GitHub</li>
            <li className="text-gray-700 font-semibold">Twitter</li>
            <li className="text-gray-700 font-semibold">LinkedIn</li>
          </ul>
        </div>

<div className="col-span-7">
    <div className="flex justify-between gap-6">
        <div>
          <h2 className="font-bold">PRODUCT</h2>
          <ul>
            <li className="text-gray-500">Home</li>
            <li className="text-gray-500">Technologies</li>
            <li className="text-gray-500">Projects</li>
          </ul>
        </div>
    
        
        <div>
          <h2 className="font-bold">COMPANY</h2>
          <ul>
            <li className="text-gray-500">About</li>
            <li className="text-gray-500">Contact</li>
            <li className="text-gray-500">Careers</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">LEGAL</h2>
          <ul>
            <li className="text-gray-500">Privacy Policy</li>
            <li className="text-gray-500">Terms of Service</li>
          </ul>
        </div>


      </div>
      </div>
</div>
      <div className="divider"></div>

      <div className="flex justify-between gap-5 my-6 py-2">
        <p className="text-gray-400">© 2026 Dev Stack. All rights reserved.</p>

        <div className="space-x-4">
          <span className="text-gray-400">Privacy</span>
          <span className="text-gray-400">Terms</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
