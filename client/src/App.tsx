import React from "react";
import GetAllStudents from "./components/GetAllStudents";
import GetStudentById from "./components/GetStudentById";
import RemoveStudent from "./components/RemoveStudent";
import CreateStudent from "./components/CreateStudent";
import UpdateStudentById from "./components/UpdateStudentById";
import RenderStudents from "./components/tableStudents/RenderStudents";

export default function App() {
  return (
    <div>
      {/* <GetAllStudents></GetAllStudents> */}
      {/* <GetStudentById></GetStudentById> */}
      {/* <RemoveStudent></RemoveStudent> */}
      {/* <CreateStudent></CreateStudent> */}
      {/* <UpdateStudentById></UpdateStudentById> */}

      <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Quản lý <b>sinh viên</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn
                              btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>
                      <span>Thêm mới sinh viên</span>
                    </a>
                  </div>
                </div>
              </div>
              <RenderStudents></RenderStudents>
              <div className="clearfix">
                <div className="hint-text">
                  Hiển thị <b>5</b>/<b>10 </b>bản ghi
                </div>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Trước</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Sau
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Thêm mới sinh viên</h4>
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
                  <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Sửa thông tin sinh viên</h4>
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
                  <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Thoát"
                  />
                  <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Lưu"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
