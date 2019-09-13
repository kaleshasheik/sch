import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";
/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import AdminNavbar from "./core-libs/material-ui/components/Navbars/AdminNavbar.jsx";
import Footer from "./core-libs/material-ui/components/Footer/Footer.jsx";
import Sidebar from "./core-libs/material-ui/components/Sidebar/Sidebar.jsx";
import MainPage from "./MainPage";
import routes from "../config/routes";

import appStyle from "../assets/jss/material-dashboard-pro-react/layouts/adminStyle";

import image from "../assets/img/sidebar-2.jpg";
import logo from "../assets/images/logo.png";
import { autoSyncCurrentUserData } from "../actions/userActions";
var ps;
const CustomLinearProgress = styled(LinearProgress)`
  & > div {
    background-color: #00acc1;
  }
`;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      image: image,
      color: "blue",
      bgColor: "black",
      hasImage: true,
      fixedClasses: "dropdown"
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleBgColorClick = bgColor => {
    this.setState({ bgColor: bgColor });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/admin/full-screen-maps";
  }
  getDashBoardRoute() {
    return this.props.location.pathname === "/admin/dashboard";
  }
  getActiveRoute = routes => {
    let activeRoute = "School Title";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div className={classes.wrapper}>
        <CustomLinearProgress />
        <Sidebar
          routes={routes}
          logoText={"School Title"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          bgColor={this.state.bgColor}
          miniActive={this.state.miniActive}
          onLogout={() => {
            this.props.autoSyncCurrentUserData({
              info: null
            });
            this.props.history.push("/");
          }}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <AdminNavbar
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            brandText={this.getActiveRoute(routes)}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {this.getDashBoardRoute() && (
            <div className={classes.content}>
              <div className={classes.container}>
                <MainPage />
              </div>
            </div>
          )}
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {!this.getDashBoardRoute() && (
            <div>
              {this.getRoute() ? (
                <div className={classes.content}>
                  <div className={classes.container}>
                    <Switch>{this.getRoutes(routes)}</Switch>
                  </div>
                </div>
              ) : (
                <div className={classes.map}>
                  <Switch>{this.getRoutes(routes)}</Switch>
                </div>
              )}
            </div>
          )}
          {this.getRoute() ? <Footer fluid /> : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    autoSyncCurrentUserData: bindActionCreators(
      autoSyncCurrentUserData,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(appStyle)(Dashboard)));
