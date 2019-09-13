import React, { PureComponent } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import GridItem from "./core-libs/material-ui/components/Grid/GridItem.jsx";
import CustomInput from "./core-libs/material-ui/components/CustomInput/CustomInput.jsx";
import Button from "./core-libs/material-ui/components/CustomButtons/Button.jsx";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardFooter from "./core-libs/material-ui/components/Card/CardFooter.jsx";
import loginPageStyle from "../assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: {
        emailId: "",
        password: ""
      }
    };
  }
  onLoginSubmit = () => {
    const { userCredentials } = this.state;
    if (this.props && this.props.onLoginSubmit) {
      this.props.onLoginSubmit(userCredentials);
    }
  };
  render() {
    const { classes } = this.props;
    const { userCredentials } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <GridItem xs={12} sm={6} md={4} style={{ maxWidth: "100%" }}>
          <form>
            <Card login>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="info"
              >
                <h4 className={classes.cardTitle}>Sign in</h4>
              </CardHeader>
              <CardBody ref="some">
                <TextField
                  label="Email..."
                  id="email"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                  value={userCredentials.emailId}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    this.setState({
                      userCredentials: Object.assign(
                        {},
                        this.state.userCredentials,
                        {
                          emailId: e.target.value
                        }
                      )
                    });
                  }}
                />
                <TextField
                  label="Password"
                  id="password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password"
                  }}
                  value={userCredentials.password}
                  onChange={e =>
                    this.setState({
                      userCredentials: Object.assign(
                        {},
                        this.state.userCredentials,
                        {
                          password: e.target.value
                        }
                      )
                    })
                  }
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button
                  color="info"
                  simple
                  size="lg"
                  block
                  onClick={this.onLoginSubmit.bind(this)}
                >
                  LogIn
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);
