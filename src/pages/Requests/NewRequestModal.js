import React, { useState } from "react";
import { Form, message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { TransferFunds, VerifyAccount } from "../../apicalls/transactions";
import { SendRequest } from "../../apicalls/requests";

function NewRequestModal({
  showNewRequestModal,
  setShowNewRequestModal,
  reloadData,
}) {
  const { user } = useSelector((state) => state.users);

  const [isVerified, setIsVerified] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const verifyAccount = async () => {
    try {
      dispatch(ShowLoading());
      const response = await VerifyAccount({
        receiver: form.getFieldValue("receiver"),
      });
      dispatch(HideLoading());

      if (response.success) {
        setIsVerified("true");
      } else {
        setIsVerified("false");
      }
    } catch (error) {
      dispatch(HideLoading());
      setIsVerified("false");
    }
  };

  const onFinish = async (values) => {
    try {
      if (values.amount > user.balance) {
        message.error("Insufficient Balance");
        return;
      }
      dispatch(ShowLoading());
      const payload = {
        ...values,
        sender: user._id,

        status: "success",
        reference: values.reference || "no reference",
      };

      const response = await SendRequest(payload);
      console.log("response ", response);

      if (response && response.success) {
        reloadData();
        setShowNewRequestModal(false);
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <Modal
        title="Transfer Funds"
        open={showNewRequestModal}
        onClose={() => {
          setShowNewRequestModal(false);
        }}
        onCancel={() => setShowNewRequestModal(false)}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <div className="flex gap-2 items-center">
            <Form.Item label="Account Number" name="receiver" className="w-100">
              <input type="text" />
            </Form.Item>
            <button
              className="primary-contained-btn mt-1"
              type="button"
              onClick={verifyAccount}
            >
              VERIFY
            </button>
          </div>

          {isVerified === "true" && (
            <div className="success-bg">Account Verified</div>
          )}

          {isVerified === "false" && (
            <div className="error-bg">Invalid Account</div>
          )}

          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please enter amount",
              },
              {
                max: user.balance,
                message: "Insufficient balance",
              },
            ]}
          >
            <input type="number" max={user.balance} />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <textarea type="text" />
          </Form.Item>

          <div className="flex justify-end gap-1">
            <button
              className="primary-outlined-btn"
              onClick={() => setShowNewRequestModal(false)}
            >
              Cancel
            </button>
            {isVerified === "true" && (
              <button className="primary-contained-btn">Request</button>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default NewRequestModal;
