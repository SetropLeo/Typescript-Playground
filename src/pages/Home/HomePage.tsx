import React from "react";
import "./HomePage.css";

import { Form, Error, Loading } from "./HomeState";

import { LoadingSpinner } from "../../components";
import { useHomePage } from "./hooks";

const HomePage = () => {
  const { homeState, refInputEmail, refInputPassword, onChangeForm, onSubmit } = useHomePage();

  return (
    <div className="main-container">
      <div className="forms-container">
        <div className="form">
          <label className="form-field">E-mail</label>
          <input
            ref={refInputEmail}
            id="email"
            type="email"
            onChange={onChangeForm}
            value={(homeState as Form)?.email ?? refInputEmail.current!.value}
          ></input>
          {homeState instanceof Error && (homeState as Error)?.email && <p>Invalid e-mail</p>}
        </div>

        <div className="form">
          <label className="form-field">Password</label>
          <input
            ref={refInputPassword}
            id="password"
            type="password"
            onChange={onChangeForm}
            value={(homeState as Form)?.password ?? refInputPassword.current!.value}
          ></input>
          {homeState instanceof Error && (homeState as Error)?.password && <p>Invalid password</p>}
        </div>
      </div>

      <div className="button" onClick={onSubmit}>
        {homeState instanceof Loading ? <LoadingSpinner /> : "Enter"}
      </div>
    </div>
  );
};

export default HomePage;
