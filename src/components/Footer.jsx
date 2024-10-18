import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutubeSquare,
} from "react-icons/fa";
function Footer()
  {
    return (
      <div className="bg-white mt-10">
      <div className="py-16 text-center max-w-7xl mx-auto">
        <h1 className=" text-3xl font-semibold">Restra</h1>
        <p className="w-4/5 mx-auto my-5 md:w-3/5 lg:w-2/5">
          Start working with Landrick that can provide everything you need to
          generate awareness, drive traffic, connect.
        </p>
        <div className=" flex justify-center gap-x-3">
          <a href="#">
            <FaInstagram className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="#">
            <FaFacebookF className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="#">
            <FaTwitter className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="#">
            <FaLinkedinIn className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="#">
            <FaYoutubeSquare className={"w-full text-xl border-gray-600"} />
          </a>
        </div>
      </div>
      <div className="text-center py-1 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-600">
        <p className=" w-4/5 mx-auto my-5 text-sm leading-5">
          &nbsp;@ 2022, Restra. All Rights Reserved
        </p>
      </div>
    </div>
    );
  }
export default Footer;