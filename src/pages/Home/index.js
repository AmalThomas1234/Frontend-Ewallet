import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";

function Home() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <PageTitle
        title={`Hello ${user.firstName} ${user.lastName}, Welcome to the AMAL E-WALLET`}
      />

      <div className="bg-tertiary p-2 mt-2 w-50 br-3 flex flex-col gap-1 uppercase">
        <div className="flex justify-between">
          <h4 className="text-md text-white">Account Number</h4>
          <h4 className="text-md text-white">{user._id}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md text-white">Balance</h4>
          <h4 className="text-md text-white">{user.balance || 0}</h4>
        </div>
      </div>

      <div className="card p-2 mt-2 w-50 br-3 flex flex-col gap-1 uppercase">
        <div className="flex justify-between">
          <h4 className="text-md ">First Name</h4>
          <h4 className="text-md ">{user.firstName}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md ">Last Name</h4>
          <h4 className="text-md ">{user.lastName}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md ">Email</h4>
          <h4 className="text-md ">{user.email}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md ">Mobile</h4>
          <h4 className="text-md ">{user.phoneNumber}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md ">Identification Type</h4>
          <h4 className="text-md ">{user.identificationType}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md ">Identification Number</h4>
          <h4 className="text-md ">{user.identificationNumber}</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
