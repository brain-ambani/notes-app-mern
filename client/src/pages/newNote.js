const NewNote = () => {
  return (
    <form className="w-3/4 mt-8 flex flex-col items-center sm:items-start ">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full max-w-xs "
      />

      <textarea
        placeholder="Content..."
        className="mt-4 textarea textarea-bordered sm:textarea-sm sm:max-w-sm md:textarea-md md:max-w-md lg:textarea-lg w-full lg:max-w-lg"
        rows="6"
      ></textarea>
      <br />
      <button className="btn btn-primary ">Save</button>
    </form>
  );
};
export default NewNote;
