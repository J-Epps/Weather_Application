import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "../pages";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritesPage from "../pages/FavoritesPage";
import LocationsPage from "../pages/LocationsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import SearchPage from "../pages/SearchPage";
import SettingsPage from "../pages/SettingsPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/privacy" component={PrivacyPolicyPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/terms" component={TermsOfServicePage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
