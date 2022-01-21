import React, { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
      />
    </div>
  );
};

export default AddToList;
