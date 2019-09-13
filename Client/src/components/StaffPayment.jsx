/* react */
import React, { PureComponent } from "react";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import { Row, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import sweetAlertStyle from "././../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";
/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
/* other */
import Datetime from "react-datetime";
import SweetAlert from "react-bootstrap-sweetalert";
/*images */
import defaultAvatar from "../assets/img/placeholder.jpg";
const styles = {
  totalWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0px 20px"
  },
  actionButtonsWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  btn: {
    margin: 10
  },
  infoCard: { width: "20%", display: "flex" },
  ...checkBoxAndDDLStyles,
  ...sweetAlertStyle,
  labelValue: {
    textTransform: "capitalize",
    color: "black",
    margin: "0px 20px"
  },
  valueField: {
    margin: "10px"
  }
};
class StaffPayment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      alert: null
    };
  }
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };
  success() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Done!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Done!
        </SweetAlert>
      )
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
            <Avatar
              alt=""
              src={defaultAvatar}
              style={{
                width: 30,
                height: 30
              }}
            />
            <Header>Staff Payment</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <Row xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={8}>
                <label>Staff Name: </label>
                <span className={classes.labelValue}>Raghavendra NK</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Payment Date" }}
                  />
                </FormControl>
              </GridItem>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <div>
                <TextField
                  id="idTa"
                  label="TA"
                  placeholder="TA"
                  margin="normal"
                  variant="outlined"
                  className={classes.valueField}
                />
                <TextField
                  id="idDa"
                  label="DA"
                  placeholder="DA"
                  margin="normal"
                  variant="outlined"
                  className={classes.valueField}
                />
                <TextField
                  id="idHra"
                  label="HRA"
                  placeholder="HRA"
                  margin="normal"
                  variant="outlined"
                  className={classes.valueField}
                />
                <TextField
                  id="idBasic"
                  label="Basic"
                  placeholder="Basic"
                  margin="normal"
                  variant="outlined"
                  className={classes.valueField}
                />
                <TextField
                  id="idSpecial"
                  label="Special Allowances"
                  placeholder="Special Allowances"
                  margin="normal"
                  variant="outlined"
                  className={classes.valueField}
                />
              </div>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <div className={classes.totalWrapper}>
                <label>
                  Total: <i className="fas fa-rupee-sign" />
                </label>
                <span>10,000</span>
              </div>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <div className={classes.actionButtonsWrapper}>
                <Button color="danger" className={classes.btn}>
                  Cancel
                </Button>
                <Button
                  color="success"
                  className={classes.btn}
                  onClick={this.success.bind(this)}
                >
                  Save
                </Button>
              </div>
            </Row>
          </GridContainer>
        </CardBody>
        {this.state.alert}
      </Card>
    );
  }
}

export default withStyles(styles)(StaffPayment);
