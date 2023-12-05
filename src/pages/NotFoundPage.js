import React from "react";
import Error404 from "../images/error404.png";

const NotFoundPage = () => (
  <>
    <h1>404: Page Not Found</h1>
    <img className="pic404" src={Error404} alt="page not found" />
  </>
);

export default NotFoundPage;
