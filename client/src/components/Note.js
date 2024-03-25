const Note = () => {
  return (
    <div className="card w-3/4 bg-base-100 shadow-xl mt-4 ">
      <div className="card-body">
        <h2 className="card-title uppercase">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores
          voluptatum possimus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero suscipit possimus facere veritatis nesciunt
          dolor inventore consequatur vitae numquam! Cumque, minus maxime est
          aspernatur exercitationem odio omnis saepe reiciendis obcaecati?
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
