import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.user.value);

  const handleDelete = (item) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(item));
    }
  };

  const usersItems = users?.map((item) => (
    <div
      key={item.id}
      className="bg-white shadow-md rounded-lg p-6 text-gray-700 flex flex-col justify-between"
    >
      <h3 className="text-xl font-semibold mb-2">Name: {item.name}</h3>
      <p className="text-sm text-gray-500 mb-4">Username: {item.username}</p>
      <button
        onClick={() => handleDelete(item)}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-400 to-pink-400 py-10">
      <div className="w-11/12 max-w-6xl mx-auto text-center font-sans">
        <h2 className="text-4xl font-bold text-white mb-10">User Management</h2>
        {users.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {usersItems}
          </div>
        ) : (
          <p className="text-white text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
