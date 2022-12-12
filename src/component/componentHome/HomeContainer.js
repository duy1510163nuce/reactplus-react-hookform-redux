import React, { useState, useEffect } from "react";
import "./HomeContainer.css";
import TableUser from "../../component/componentHome/table/TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/DataUserSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export default function HomeContainer() {
  const [loadingData, setLoadingData] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.dataUser.listData);

  useEffect(() => {
    setLoadingData(true);
    const getDataUser = async () => {
      try {
        const actionGetData = await dispatch(getUsers());
        const infoUser = unwrapResult(actionGetData);
        setLoadingData(false);
      } catch (err) {
        setLoadingData(false);
      }
    };
    getDataUser();
  }, []);

  return (
    <div>
      <TableUser data={data} loadingData={loadingData} />
    </div>
  );
}
