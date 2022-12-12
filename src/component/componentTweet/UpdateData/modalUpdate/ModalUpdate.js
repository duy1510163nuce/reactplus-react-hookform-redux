import React from 'react'
import {Modal} from 'antd'
import { useNavigate } from 'react-router-dom';
import { updateData } from '../../../../sevice/GetData';
export default function ModalUpdate (props) {
  let navigate = useNavigate();
    const {
    handleCancelUpdate,
    showModal,
    id,
    confirmLoading,
    modalUpdateText,
    dataChanged,
    } = props
   
    const handleOkUpdate = async (dataChanged) =>{
          await updateData(`users/${id}`, dataChanged);
        navigate("/");
    }
  return (
    <Modal
        title = 'Warning'
    open={showModal}
        onOk={()=>handleOkUpdate( dataChanged)}
        confirmLoading={confirmLoading}
        onCancel={()=>handleCancelUpdate()}
    >
        <p>{modalUpdateText}</p>
    </Modal>
  )
}
