import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex gap-4 justify-between py-6 px-2 sm:px-0 items-center sticky top-0 z-10 bg-base-100 mx-3">
      <div>
        <Link to="/">
          <h1 className="text-3xl cursor-pointer">
            Note
            <span className="text-primary">Zipper</span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:block">
        <label className="input input-bordered flex items-center gap-2 ">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex gap-5 items-center">
        <Link to="/notes">
          <button className="btn btn-active">notes</button>
        </Link>
        <div className="avatar cursor-pointer">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
