/* react */
import React, { PureComponent, Fragment } from "react";

/* material core */
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  whiteColor,
  blackColor,
  hexToRgb
} from "./assets/jss/material-dashboard-pro-react.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

/* other */
import { withRouter } from "react-router-dom";
/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/* custom components */
import SCarousel from "./components/core-libs/SCarousel";
import Login from "./components/Login";

/* conf */
import imageList from "./CarouselImageList.json";

/* images */
import lock from "./assets/images/bg.jpg";

/* actions */
import { loginUser } from "./actions/userActions";
const logo = require("./assets/images/logo.png");



const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "100%"
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  wrapper: {
    height: "auto",
    minHeight: "100vh",
    position: "relative",
    top: "0"
  },
  fullPage: {
    position: "relative",
    minHeight: "100vh",
    display: "flex!important",
    margin: "0",
    border: "0",
    color: whiteColor,
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "fit-content!important"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      border: "none !important"
    },
    "&:before": {
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.75)"
    },
    "&:before,&:after": {
      display: "block",
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "2"
    }
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    color: "#00acc1",
    zIndex: 10
  }
});

const SCHOOL_TITLE = "School Title";

class App extends PureComponent {
  onLoginSubmit = userCredentials => {
    this.props
      .loginUser(userCredentials)
      .then(() => {
        const { currentUserDetails } = this.props;
        console.log("currentUserDetails", currentUserDetails);
        if (currentUserDetails && currentUserDetails.info) {
          this.props.history.push("/admin/dashboard");
        }
      })
      .catch(error => {
        console.log("error login", error);
      });
  };
  renderLoginPage = () => {
    const { classes } = this.props;
    return (
      <div
        className={classes.fullPage}
        style={{ backgroundImage: "url(" + lock + ")" }}
      >
        <Grid container style={{ padding: "0px 10px", zIndex: "10" }}>
          <Grid item md={12} xs={12}>
            <AppBar style={{ backgroundColor: "#00acc1" }}>
              <Toolbar>
                <Typography variant="h6">{SCHOOL_TITLE}</Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            style={{ display: "flex", margin: "80px 0px", width: "100%" }}
          >
            <Grid item md={8} xs={12}>
              <SCarousel imageList={imageList} />
            </Grid>
            <Grid item md={4} xs={12}>
              <div className={classes.logoWrapper}>
                <img width={120} height={120} src={logo} alt="logo" />
              </div>
              <Login onLoginSubmit={this.onLoginSubmit} />
            </Grid>
          </Grid>
        </Grid>
        <footer className={classes.footer}>
          &copy; {1900 + new Date().getYear()} Advitey Technologies, made with
          <i class="fas fa-heartbeat heart" />
        </footer>
      </div>
    );
  };
  render() {
    return <Fragment>{this.renderLoginPage()}</Fragment>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentUserDetails: state.currentUserDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(App)));
