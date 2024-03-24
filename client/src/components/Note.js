const Note = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores
          voluptatum possimus?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary">Update</button>
          <button className="btn btn-outline btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
