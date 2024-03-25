import Note from "../components/Note";

const Notes = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl uppercase text-center py-3 font-bold ">
        All notes
      </div>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Notes;
