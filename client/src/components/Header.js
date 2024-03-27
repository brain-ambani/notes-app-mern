import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const Header = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     navigate("/");
  //   }
  // }, [navigate]);
  return (
    <div className="mx-auto max-w-md text-center lg:flex-auto py-32">
      <h2 className="text-4xl font-semi-bold py-4">
        Welcome <span className="text-primary">Brain,</span> take your notes in
        a style.
      </h2>
      <p className="mt-6 text-xl leading-8 text-gray-300">
        Streamline note-taking: Create, edit, delete effortlessly with our
        intuitive notes app. Organize your thoughts seamlessly.
      </p>
      <Link to="/new-note">
        <button className="btn btn-primary mt-10 text-white text-lg">
          Create new note
        </button>
      </Link>
    </div>
  );
};
