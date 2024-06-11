import axios from "axios";
import React from "react";

export default function GetStudentById() {
  const getStudent = (id: number) => {
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then((data) => console.log(data.data))
      .catch((err) => console.log("Không tìm thấy bản ghi", err));
  };

  getStudent(9);

  return <div>GetStudentById</div>;
}
