import React from "react";
import { Col, Form, Row, Input, Select, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const { TextArea } = Input;
const { Option } = Select;

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="m-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">AMALWALLET-REGISTER</h1>

        <h1 className="text-sm underline" onClick={() => navigate("/login")}>
          Already a member,Login
        </h1>
      </div>

      <hr />
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="First Name" name="firstName">
              <Input type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Last Name" name="lastName">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Mobile Number" name="phoneNumber">
              <Input type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Identification Type" name="identificationType">
              <Select>
                <Option value="NATIONAL ID">National ID</Option>
                <Option value="PASSPORT">Passport</Option>
                <Option value="DRIVING LICENSE">Driving License</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Identification Number"
              name="identificationNumber"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Address" name="address">
              <TextArea type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Confirm Password" name="confirmPassword">
              <Input type="password" />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end">
          <Button
            type="primary"
            className="primary-contained-btn"
            htmlType="submit"
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
