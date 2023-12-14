import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/Loading";
import Main from "../pages/Main";

const Router = () => {
  let routes = useRoutes([
    {
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      path: "/",
    },
  ]);
  return routes;
};

export default Router;
