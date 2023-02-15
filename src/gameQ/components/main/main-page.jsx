import React, { Fragment } from "react";

import { FormLoginSign } from "./login-sign/index";
import { Title } from "./title";

export function MainPage() {
  return (
    <Fragment>
      <Title />
      <FormLoginSign />
    </Fragment>
  );
}
