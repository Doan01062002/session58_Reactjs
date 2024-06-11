import axios from "axios";
import React from "react";

export default function GetAllStudents() {
  axios
    .get("http://localhost:3000/students")
    .then((data) => console.log(data.data));
  return <div>GetAllStudents</div>;
}
