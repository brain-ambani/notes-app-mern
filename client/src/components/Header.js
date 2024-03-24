export const Header = () => {
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
      <button className="btn btn-primary mt-10 text-white text-lg">
        Create new note
      </button>
    </div>
  );
};
