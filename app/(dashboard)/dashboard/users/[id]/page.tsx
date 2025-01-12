import React from "react";

const UserDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h3>User Detail Page</h3>
      <h1 className="text-3xl">User Profile: {id}</h1>
    </div>
  );
};

export default UserDetail;
