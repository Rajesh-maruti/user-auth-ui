import React from "react";
import SignUp from "../../components/signUp/SignUp";
import { container, sign_up_area,sign_up_container } from "./signUpContainer.module.css";
const SignUpContainer = () => {
  return (
    <div className={`w-full ${container}`}>
      <div
        className={`w-full bg-white rounded px-10 py-8 table mx-auto overflow-auto center ${sign_up_area}`}
      >
        <div className={`${sign_up_container} hide-scroll-bar`}>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
