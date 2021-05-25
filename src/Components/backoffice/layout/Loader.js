import React from "react";
import LoaderSpinner from "react-loader-spinner";

const Loader = (props) => {
  //Documentation: https://www.npmjs.com/package/react-loader-spinner
  //Example: <Loader visible={true} type="Bars" color="red" height={80} width={80} />
  return <LoaderSpinner {...props} />;
};

export default Loader;
