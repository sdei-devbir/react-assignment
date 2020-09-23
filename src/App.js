import React, { useEffect, Suspense, lazy } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

const Home = lazy(() => import("./pages/home/Home"));

function App() {
  console.log('app loaded', process.env)
  return (
    <div className="App">
      

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          </Switch>
        </Router>
      </Suspense> 

      
    </div>
  );
}

export default App;
