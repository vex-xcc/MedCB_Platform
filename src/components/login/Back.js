import React from "react";
import { withRouter } from "react-router-dom";
import "./login.scss";

const Back = ({ history }) =>
  history.length > 1 && (
    <div className="form__field" onClick={history.goBack}>
    <input type="submit" value="تسجيل حساب جديد" />
    </div>  

  );

export default withRouter(Back);
