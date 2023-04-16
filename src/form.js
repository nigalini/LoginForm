import React from "react";
import { useState } from "react";

export const Form1 = () => {
  const [value, setValue] = useState({
    username1: "",
    username2: ""
  });

  const changefn = (e) => {
    setValue({
      ...value,
      [e.target.name]: [e.target.value]
    });
  };

  return (
    <>
      {value.username1}
      <input
        type="text"
        placeholder="username1"
        name="username1"
        onChange={changefn}
      />
      <br />
      {value.username2}
      <input
        type="text"
        placeholder="username2"
        name="username2"
        onChange={changefn}
      />
    </>
  );
};
export default Form1;
