export const Header = () => {
  return (
    <div className="mx-auto max-w-md text-center lg:flex-auto py-32">
      <h2 className="text-4xl font-semi-bold py-4">
        Welcome Brain, take your notes in a style.
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla.
      </p>
      <button className="btn btn-primary mt-10">Create new note</button>
    </div>
  );
};
