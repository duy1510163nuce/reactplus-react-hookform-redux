import React, { useEffect, useRef, useState } from "react";
import "./UpdateData.css";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  Input,
  Row,
  Col,
  Radio,
  Select,
  Form,
  Checkbox,
  Button,
  Modal,
  DatePicker,
} from "antd";
import { deleteData, pushData, updateData } from "../../../sevice/GetData";
import { ValidationSchema } from "../../../common/validate/YupSchema";
import { clearData, getUser } from "../../../redux/DataUserSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalUpdate from "./modalUpdate/ModalUpdate";

import moment from "moment/moment";
import dayjs from "dayjs";
let yup = require("yup");

export default function CreateUser() {
  let navigate = useNavigate();
  let dataChanged = useRef();
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState(
    "bạn có chắc chắn muốn xóa không?"
  );
  const [modalUpdateText, setModalUpdateText] = useState(
    "bạn có chắc chắn muốn sửa không?"
  );
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((store) => store.dataUser.details);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);
  const {
    handleSubmit,
    control,
    reset,

    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(ValidationSchema),
  });
  useEffect(() => {
    if (detail) {
      reset({
        firstName: detail.firstName,
        lastName: detail.lastName,
        address: detail.address,
        email: detail.email,
        dateOfBirth: dayjs(
          dayjs(new Date(detail.dateOfBirth)).format("DD-MM-YYYY"),
          "DD-MM-YYYY"
        ),
        isGraduate: detail.isGraduate,
        phone: detail.phone,
        school: detail.school,
        gender: detail.gender,
        hobby: detail.hobby,
      });
    }
  }, [detail]);
  useEffect(() => {
    dispatch(clearData());
  }, []);

  const options = [
    { label: "Read Book", value: "read book" },
    { label: "Play Football", value: "play football" },
    { label: "Play VideoGame", value: "play videoGame" },
    { label: "Play Badminton", value: "play badminton" },
    { label: "Shopping", value: "shopping" },
  ];

  const onSubmit = (data) => {
    setShowModal(true);
    dataChanged.current = data;
  };

  const handleCancelUpdate = () => {
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setOpen(true);
  };
  const handleOkDelete = (id) => {
    setConfirmLoading(true);
    deleteData(id);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      navigate("/");
    }, 1000);
  };
  const handleCancelDelete = () => {
    setOpen(false);
  };

  return (
    <div className="create-app">
      <h1>Update InfoUser</h1>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Row className="row">
          <Col span={6}>
            <label htmlFor="firstName">FirstName</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => <Input {...field} />}
            />
          </Col>
          <Col span={4}>
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="lastName">LastName</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => <Input {...field} />}
            />
          </Col>
          <Col span={4}>
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="address">Address</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="address"
              render={({ field }) => <Input {...field} />}
            />
          </Col>
          <Col span={4}>
            {errors.address && (
              <span style={{ color: "red" }}>{errors.address.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="email">Email</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => <Input {...field} />}
            />
          </Col>
          <Col span={4}>
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field }) => (
                <DatePicker
                  type="date"
                  {...field}
                  format="DD/MM/YYYY"
                  className="date-picker"
                />
              )}
            />
          </Col>
          <Col span={4}>
            {errors.dateOfBirth && (
              <span style={{ color: "red" }}>{errors.dateOfBirth.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="isGraduate">Choose isGraduate</label>
          </Col>
          <Col span={14}>
            <Controller
              name="isGraduate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Radio.Group
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                >
                  <Radio value={"true"}>Graduated</Radio>
                  <Radio value={"false"}>not graduated</Radio>
                </Radio.Group>
              )}
            />
          </Col>
          <Col span={4}>
            {errors.isGraduate && (
              <span style={{ color: "red" }}>{errors.isGraduate.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="phone">Phone Number</label>
          </Col>
          <Col span={14}>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => <Input {...field} />}
            />
          </Col>
          <Col span={4}>
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="school"> Select Schools</label>
          </Col>
          <Col span={14}>
            <Controller
              name="school"
              control={control}
              render={({ field }) => (
                <Select
                  className="select-school"
                  {...field}
                  options={[
                    { value: "xay dung", label: "DH xay dung" },
                    { value: "FPT-poly", label: "DH FPT-poly" },
                    { value: "Thuy Loi", label: "DH Thuy Loi" },
                    { value: "Dien Luc", label: "DH Dien Luc" },
                    { value: "UNETI ", label: "UNETI" },
                  ]}
                />
              )}
            />
          </Col>
          <Col span={4}>
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="gender">Choose Gender</label>
          </Col>
          <Col span={14}>
            <Controller
              name="gender"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Radio.Group
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                >
                  <Radio value="male">male</Radio>
                  <Radio value="female">female</Radio>
                  <Radio value="other">other</Radio>
                </Radio.Group>
              )}
            />
          </Col>
          <Col span={4}>
            {errors.gender && (
              <span style={{ color: "red" }}>{errors.gender.message}</span>
            )}
          </Col>
        </Row>

        <Row className="row">
          <Col span={6}>
            <label htmlFor="Hobby"> Hobby</label>
          </Col>
          <Col span={14}>
            <Controller
              name="hobby"
              control={control}
              render={({ field }) => (
                <Checkbox.Group options={options} {...field} />
              )}
            />
          </Col>
          <Col span={4}>
            {errors.hobby && (
              <span style={{ color: "red" }}>{errors.hobby.message}</span>
            )}
          </Col>
        </Row>
        <Row className="row row-btn">
          <Button
            type="primary"
            htmlType="submit"
            className="button-Update"
            disabled={!isValid}
          >
            Update
          </Button>
          <Button
            // type="danger"
            onClick={() => handleDelete(detail.id)}
            className="button-Delete"
            disabled={!isValid}
          >
            Delete
          </Button>
        </Row>
      </Form>
      <Modal
        title="Warning"
        open={open}
        onOk={() => handleOkDelete(detail.id)}
        confirmLoading={confirmLoading}
        onCancel={handleCancelDelete}
      >
        <p>{modalText}</p>
      </Modal>
      <ModalUpdate
        handleCancelUpdate={handleCancelUpdate}
        showModal={showModal}
        dataChanged={dataChanged.current}
        confirmLoading={confirmLoading}
        modalUpdateText={modalUpdateText}
        id={id}
      />
    </div>
  );
}
