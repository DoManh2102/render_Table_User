import React, { useState, useEffect } from "react";
import TableBasic from "../../Table/TableBasic";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { getUserAction } from "../../../redux/action/UserAction";
import { SORT_BY_USERNAME } from "../../../redux/types/typeUser";

const headerTitle = [
  { fields: "STT" },
  { fields: "FullName" },
  { fields: "username" },
  { fields: "thumbnail" },
];

function ManageProduct(props) {
  const dispatch = useDispatch();
  let { listUser } = useSelector((state) => state.UserReducer);
  let [paginateNumber, setPaginateNumber] = useState(1);
  let [btnActive, setBtnActive] = useState("");

  useEffect(() => {
    dispatch(getUserAction(paginateNumber));
  }, []);

  const handleSortByUserName = () => {
    const sortedUsers = [...listUser].sort((a, b) =>
      a.login.username.localeCompare(b.login.username)
    );
    dispatch({
      type: SORT_BY_USERNAME,
      users: sortedUsers,
    });
    setBtnActive("sortUserName");
  };

  const handleSortByFullName = () => {
    const sortedUsers = [...listUser].sort((a, b) =>
      `${a.name.title} ${a.name.first} ${a.name.last}`.localeCompare(
        `${b.name.title} ${b.name.first} ${b.name.last}`
      )
    );
    dispatch({
      type: SORT_BY_USERNAME,
      users: sortedUsers,
    });
    setBtnActive("sortFullName");
  };

  const handleClickPagenate = (e) => {
    const { value } = e.target;
    setPaginateNumber(value);
    dispatch(getUserAction(paginateNumber));
  };

  return (
    <div className="p-3">
      <h1 className="text-info my-2 text-center">Manage User</h1>
      <button
        className="btnBySortUserName btn btn-secondary mb-2"
        onClick={handleSortByUserName}
        style={{
          backgroundColor: btnActive === "sortUserName" ? "#0d6efd" : "",
        }}
      >
        Sort by UserName
      </button>
      <br />
      <button
        className="btn btn-secondary mb-2"
        onClick={handleSortByFullName}
        style={{
          backgroundColor: btnActive === "sortFullName" ? "#0d6efd" : "",
        }}
      >
        Sort by FullName
      </button>

      <TableBasic headerList={headerTitle} data={listUser} />
      <div className="paginate text-center">
        {Array(10)
          .fill(0)
          .map((item, index) => {
            return (
              <Button
                key={index}
                className="mx-1"
                variant="secondary"
                value={index + 1}
                style={{
                  backgroundColor: paginateNumber == index + 1 ? "#0d6efd" : "",
                }}
                onClick={(e) => handleClickPagenate(e)}
              >
                {index + 1}
              </Button>
            );
          })}
      </div>
    </div>
  );
}

export default ManageProduct;
