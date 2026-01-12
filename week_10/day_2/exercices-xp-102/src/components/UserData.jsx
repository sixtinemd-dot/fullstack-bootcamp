import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/userThunks";


const UserData = () => {
  const dispatch = useDispatch();

  // Access user state from Redux store
  const { data, loading, error } = useSelector((state) => state.user);

  // Fetch user when component mounts
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Information</h2>
      {data && (
        <>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Username:</strong> {data.username}</p>
        </>
      )}
    </div>
  );
};

export default UserData;
