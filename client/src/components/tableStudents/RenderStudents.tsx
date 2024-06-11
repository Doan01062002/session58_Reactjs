import axios from "axios";
import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function RenderStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((data) => setStudents(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll" />
              </span>
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địc chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox5"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox5" />
                </span>
              </td>
              <td>{student.student_name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  onClick={() => setShowModal(true)}
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Model Delete */}
      {showModal && (
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Xóa nhân viên</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Bạn chắc chắn muốn xóa sinh viên&lt;ST001&gt;?</p>
                </div>
                <div className="modal-footer">
                  <input
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Hủy"
                  />
                  <input
                    type="submit"
                    className="btn btn-danger"
                    defaultValue="Xóa"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
