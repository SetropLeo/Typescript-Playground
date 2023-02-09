import React from "react";
import { Form, Loading, ScreenState } from "../HomeState";

const useHomePage = () => {
  const [homeState, setHomeState] = React.useState<ScreenState>(new Form());

  const refInputEmail = React.useRef<HTMLInputElement>(null);
  const refInputPassword = React.useRef<HTMLInputElement>(null);

  const onChangeForm = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setHomeState({ ...homeState, [target.id]: target.value });
  };

  const onSubmit = () => {
    setHomeState(new Loading());

    setTimeout(() => {
      setHomeState(new Form());
    }, 1000);
  };

  return {
    homeState,
    refInputEmail,
    refInputPassword,
    onChangeForm,
    onSubmit,
  };
};

export default useHomePage;
