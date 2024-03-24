import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-10 flex gap-4 justify-between py-4 items-center">
      <div>
        <Link to="/">
          <h1 className="text-3xl cursor-pointer">
            Note
            <span className="text-primary">Zipper</span>
          </h1>
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search notes"
          className="outline-none p-2 rounded-xl"
        />
      </div>
      <div className="flex gap-3">
        <Link to="/notes">
          <div className="">My notes</div>
        </Link>
        <div>profile</div>
      </div>
    </div>
  );
};
export default Navbar;
