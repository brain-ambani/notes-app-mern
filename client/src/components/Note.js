const Note = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
          <button className="btn ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
