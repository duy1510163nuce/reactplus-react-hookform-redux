import React, { useState } from "react";
import "./CreateUser.css";
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
  DatePicker,
} from "antd";
import { pushData } from "../../../sevice/GetData";
// import * as Yup from "yup";
import { ValidationSchema } from "../../../common/validate/YupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
let yup = require("yup");

export default function CreateUser() {
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

  const options = [
    { label: "Read Book", value: "read book" },
    { label: "Play Football", value: "play football" },
    { label: "Play VideoGame", value: "play videoGame" },
    { label: "Play Badminton", value: "play badminton" },
    { label: "Shopping", value: "shopping" },
  ];

  const onSubmit = (data) => {
    pushData("/users", data);
    reset({});
  };

  return (
    <div className="create-app">
      <h1>Create InfoUser</h1>
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
                  format="DD/MM/YYYY"
                  className="date-picker"
                  {...field}
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
                  <Radio value={"false"}>Not Graduated</Radio>
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
            className="button-submit"
            disabled={!isValid}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}
