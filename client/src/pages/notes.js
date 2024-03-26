import { useEffect } from "react";
import Note from "../components/Note";
import axios from "axios";

const Notes = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notes/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
