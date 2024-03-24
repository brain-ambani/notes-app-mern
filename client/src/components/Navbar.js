const Navbar = () => {
  return (
    <div className="mt-10 flex gap-4 justify-between py-4 items-center">
      <div>
        <h1 className="text-3xl cursor-pointer">
          Note
          <span className="text-primary">Zipper</span>
        </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search notes"
          className="outline-none p-2 rounded-xl"
        />
      </div>
      <div className="flex gap-3">
        <div className="">My notes</div>
        <div>profile</div>
      </div>
    </div>
  );
};
export default Navbar;
