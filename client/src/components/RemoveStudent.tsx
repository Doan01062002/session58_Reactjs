import axios from "axios";
import React from "react";

export default function RemoveStudent() {
  const removeStudent = (id: number) => {
    axios
      .delete(`http://localhost:3000/students/${id}`)
      .then((data) => console.log(data.data))
      .catch((err) => console.log("Không tìm thấy bản ghi", err));
  };

  removeStudent(2);
  return <div>RemoveStudent</div>;
}
