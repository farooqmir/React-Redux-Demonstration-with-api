import React from "react";
import { Link } from "react-router-dom";

/*
 * Page that will be displayed when user tried to access a non-existent link
 */
const NotFoundPage = () => {
  return (
    <div>
      <div className="alert m-4 p-4 text-center alert-warning" role="alert">
        <h4>Opps! Seems like what you are looking for doesn't exist yet.</h4>
        <Link className="m-4 btn btn-primary" to="/">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
