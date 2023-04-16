import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import YupPassword from "yup-password";
import "./styles.css";
YupPassword(yup);

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .password()
    .required()
    .min(8, "Minimum 8 chars")
    .max(16, "maximum 16 chars")
});
export const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(Schema) });
  const onsubmit = (datavalue) => {
    console.log(datavalue);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Nokia</h1>
          <form
            onSubmit={handleSubmit(onsubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              margin: "20px"
            }}
          >
            <label>Email</label>
            <input {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <label>Password</label>
            <input {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <p style={{ padding: "10px", marginLeft: "auto", color: "black" }}>
              Forgot password?
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form1;
