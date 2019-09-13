/* react */
import React, { PureComponent, Fragment } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

/* material icons */
import Edit from "@material-ui/icons/Edit";
import PersonAdd from "@material-ui/icons/PersonAdd";

/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { size } from "lodash";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import STable from "./core-libs/STable";
import SDialog from "./core-libs/SDialog";
import { Row, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";

/* other */
import Datetime from "react-datetime";
import { withRouter } from "react-router-dom";

/* actions */
import {
  getStaffDetails,
  autoSyncData,
  postStaffDetails,
  getAllStaffDetails,
  getStaffDetailsById
} from "../actions/staffActions";

const styles = {
  ...checkBoxAndDDLStyles,
  infoCard: { width: "20%", display: "flex" },
  topActionsWrapper: { display: "flex", justifyContent: "flex-end" }
};

const columns = [
  {
    name: "slNo",
    label: "#",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "firstName",
    label: "First Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "aadharNumber",
    label: "Aadhar Number",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "gender",
    label: "Gender",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "dob",
    label: "DOB",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      filter: false,
      sort: false
    }
  }
];

class ManageStaff extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: ""
    };
  }

  onChange = e => {
    
    let staffDetails = Object.assign({}, this.props.staffDetails, {
      info: Object.assign({}, this.props.staffDetails.info, {
        [e.target.name]: e.target.value
        
      })
    });
    this.props.autoSyncData(staffDetails);
  };

  onDateChange = e => {
    let staffDetails = Object.assign({}, this.props.staffDetails, {
      info: Object.assign({}, this.props.staffDetails.info, {
        ["dob"]: e._d
        
      })
    });
    this.props.autoSyncData(staffDetails);
  };

  handleClose = flag => {
    this.setState({ open: flag, mode: "" });
  };
  renderStaffForm = () => {
    const { classes } = this.props;
    const { staffDetails } = this.props;
    if (staffDetails && staffDetails.info) {

      const {
        firstName,
        lastName,
        adhaarNumber,
        gender,
        dob,
        nationality,
        permanent_address,
        correspondance_address
      } = staffDetails.info;

      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Row>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  id="idFName"
                  name='firstName'
                  label="First Name"
                  placeholder="First Name"
                  margin="normal"
                  variant="outlined"
                  value={firstName}
                  onChange={e => this.onChange(e)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  id="idLName"
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  margin="normal"
                  variant="outlined"
                  value={lastName}
                 
                  onChange={e => this.onChange(e)}
                />
              </GridItem>
            </Row>
            <Row>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="idAadharNumber"
                  name="adhaarNumber"
                  label="Aadhar Number"
                  placeholder="Aadhar Number"
                  margin="normal"
                  variant="outlined"
                  value={adhaarNumber}
                  onChange={e => this.onChange(e)}
                />
              </GridItem>
            </Row>
            <Row>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    name='gender'
                    value={gender}
                    inputProps={{
                      name: "gender",
                      id: "gender"
                    }}
                    onChange={e => this.onChange(e)}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Gender
                  </MenuItem>
                    <MenuItem classes={classes.menuItem} value="Male">
                      Male
                  </MenuItem>
                    <MenuItem classes={classes.menuItem} value="Female">
                      Female
                  </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    name="dob"
                    inputProps={{ placeholder: "DOB" }}
                    value={dob}
                    onChange={e => this.onDateChange(e)}
                  />
                </FormControl>
              </GridItem>
            </Row>
            <Row>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    name="nationality"
                    value={nationality}
                    inputProps={{
                      name: "nationality",
                      id: "nationality"
                    }}
                    onChange={e => this.onChange(e)}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Nationality
                  </MenuItem>
                    <MenuItem classes={classes.menuItem} value="Indian">
                      Indian
                  </MenuItem>
                    <MenuItem classes={classes.menuItem} value="XYZ">
                      XYZ
                  </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </Row>
            <Row>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  multiline
                  rows={5}
                  id="idPermanentAddress"
                  name="permanent_address"
                  label="Permanent Address"
                  placeholder="Permanent Address"
                  margin="normal"
                  variant="outlined"
                  value={permanent_address}
                  onChange={e => this.onChange(e)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  multiline
                  rows={5}
                  id="idCorrespondanceAddress"
                  name="correspondance_address"
                  label="Correspondance Address"
                  placeholder="Correspondance Address"
                  margin="normal"
                  variant="outlined"
                  value={correspondance_address}
                  onChange={e => this.onChange(e)}
                />
              </GridItem>
            </Row>
          </GridItem>
        </GridContainer>
      );
    };
  }

  onAddUpdateStaff = (staffId = -1) => {
    
    if (staffId === -1) {
      this.setState({ open: true, mode: "Add" });
    } else {
      this.props.getStaffDetailsById(staffId).then(() => {
        this.setState({ open: true, mode: "Edit" });
      });
    }
  };
  onSaveClick = () => {
    const { mode } = this.state;
    const { staffDetails } = this.props;
    console.log('modee-=== ', mode)
    this.props
      .postStaffDetails(staffDetails.info, mode)
      .then(() => {
        this.setState({ open: false, mode: "" }, () =>
          this.props.getAllStaffDetails()
        );
      })
      .catch(error => {
        console.log("error com", error);
      });
  };
  /*
    Life cycle methods
  */
  componentDidMount() {
    this.props.getAllStaffDetails();
  }

  render() {
    const { classes } = this.props;
    const { open, mode } = this.state;
    const { staffDetails } = this.props;

    const data =
      staffDetails &&
      size(staffDetails.staffList) &&
      staffDetails.staffList.map((item, index) => {
        return {
          firstName: item.firstName,
          lastName: item.lastName,
          aadharNumber: item.adhaarNumber,
          gender: item.gender,
          dob: item.dob,
          nationality: item.nationality,
          permanentAddress: item.permanent_address,
          correspondenceAddress: item.correspondance_address,

          actions: (
            <Fragment>
              <Button
                justIcon
                round
                size="sm"
                color="warning"
                onClick={() => this.onAddUpdateStaff(item.idStaff)}
              >
                <Edit />
              </Button>
              <Button
                justIcon
                round
                size="sm"
                color="linkedin"
                onClick={() => this.props.history.push("/admin/staffPayment")}
              >
                <i class="fas fa-dollar-sign" />
              </Button>
            </Fragment>
          )
        };
      });
    return (
      <Fragment>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <i class="fas fa-chalkboard-teacher" />
              <Header>Manage Staff</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                className={classes.topActionsWrapper}
              >
                <Button
                  color="info"
                  style={{ float: "right", margin: 10 }}
                  onClick={() => this.setState({ open: true, mode: "add" })}
                >
                  <PersonAdd /> Add Staff Details
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <STable data={data == 0 ? [] : data} columns={columns} />
                <SDialog
                  open={open}
                  title={
                    mode === "add"
                      ? "Add Staff Details"
                      : "Update Staff Details"
                  }
                  body={this.renderStaffForm()}
                  actions={
                    <Fragment>
                      <Button
                        onClick={() => this.handleClose(false)}
                        color="danger"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => this.onSaveClick()} color="info">
                        >
                        Save
                      </Button>
                    </Fragment>
                  }
                  handleClose={flag => this.handleClose(flag)}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log(' state staff', state.staffDetails)
  return {
    staffDetails: state.staffDetails

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStaffDetails: bindActionCreators(getStaffDetails, dispatch),
    autoSyncData: bindActionCreators(autoSyncData, dispatch),
    postStaffDetails: bindActionCreators(postStaffDetails, dispatch),
    getAllStaffDetails: bindActionCreators(getAllStaffDetails, dispatch),
    getStaffDetailsById: bindActionCreators(getStaffDetailsById, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ManageStaff));

