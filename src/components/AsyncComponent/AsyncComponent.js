/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
// import RctPageLoader from "../RctPageLoader/RctPageLoader";

const AsyncHomeComponent = Loadable({
  loader: () => import("../../routers/home/HomePage"),
  loading: () =>  "loading..." // <RctPageLoader />
});

export {
  AsyncHomeComponent,
};
