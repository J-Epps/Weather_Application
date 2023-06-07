import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Header />
        <Component {...props} />
        <Footer />
      </Layout>
    )}
  />
);

RouteWithLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired
};

export default RouteWithLayout;
