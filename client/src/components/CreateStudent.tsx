import axios from "axios";
import React from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function CreateStudent() {
  const student1: Student = {
    id: Math.floor(Math.random() * 10000),
    student_name: "Hải",
    email: "hai@gmail.com",
    address: "Phú Thọ",
    phone: "09999999",
    status: true,
    created_at: new Date().toISOString().split("T")[0],
  };

  axios
    .post("http://localhost:3000/students", student1)
    .then((data) => console.log(data.data));
  return <div>CreateStudent</div>;
}
