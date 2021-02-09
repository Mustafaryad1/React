import React from "react";
import { Route , Switch } from "react-router-dom";
import { Suspense } from "react";

const Home = React.lazy(() => import("../pages/Home/HomeClass"));
const About = React.lazy(() => import("../pages/About/About"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));

export default function Routes() {
  return (
    <Suspense fallback="Loading">
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/contact/:id?"} exact component={Contact} />
      </Switch>
    </Suspense>
  );
}
