/* react */
import React, { PureComponent, Fragment } from "react";

/* material icons */
import Edit from "@material-ui/icons/Edit";
import CalendarToday from "@material-ui/icons/CalendarToday";

/* material-core */
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { cardTitle } from "../assets/jss/material-dashboard-pro-react";

/* other */
import Datetime from "react-datetime";

/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { size } from "lodash";

/* custom core */
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import STable from "./core-libs/STable";
import SDialog from "./core-libs/SDialog";
import { Header } from "./core-libs/Utils";

/* actions */
import {
  
  autoSyncData,
  postAcademicYearDetails,
  getAllAcademicYearDetails,
  getAcademicYearDetailsById
} from "../actions/academicYearActions";


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  infoCard: { width: "25%", display: "flex" }
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
    name: "academicYearName",
    label: "Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "from",
    label: "Start Date",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "to",
    label: "End Date",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ledgerNumber",
    label: "Ledger Number",
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

class AcademicYear extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: ""
    };
  }

  onChange = e => {

    let academicDetails = Object.assign({}, this.props.academicDetails, {
      info: Object.assign({}, this.props.academicDetails.info, {
        [e.target.name]: e.target.value

      })
    });
    this.props.autoSyncData(academicDetails);
  };

  onDateChange = (e,name) => {
    let academicDetails = Object.assign({}, this.props.academicDetails, {
      info: Object.assign({}, this.props.academicDetails.info, {
        [name]: e._d

      })
    });
    this.props.autoSyncData(academicDetails);
  };


  /*
    Life cycle methods
  */
  componentDidMount() {
    this.props.getAllAcademicYearDetails();
  }
  renderAcademicForm = () => {

    const { academicDetails } = this.props;
    if (academicDetails && academicDetails.info) {

      const {
        academicYearName,
        ledgerNumber,
        from,
        to
      } = academicDetails.info;


      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              required
              id="idAcademicName"
              label="Academic Year"
              placeholder="Academic Year"
              margin="normal"
              variant="outlined"
              name="academicYearName"
              value={academicYearName}
              onChange={e => this.onChange(e)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              required
              id="idReceiptNumber"
              label="Ledger Number"
              placeholder="Ledger Number"
              margin="normal"
              variant="outlined"
              name="ledgerNumber"
              value={ledgerNumber}
              onChange={e => this.onChange(e)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info" style={{ width: "40%" }}>
                  <CalendarToday />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    name="startDate"
                    inputProps={{ placeholder: "Start Date" }}
                    value={from}
                    onChange={e => this.onDateChange(e, "from")}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info" style={{ width: "40%" }}>
                  <CalendarToday />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    name="endDate"
                    inputProps={{ placeholder: "End Date" }}
                    value={to}
                    onChange={e => this.onDateChange(e,"to")}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  };
  handleClose = flag => {
    this.setState({ open: flag, mode: "" });
  };

  onAddUpdateAcademicYear = (academicYearId = -1) => {
    
    if (academicYearId === -1) {
      this.setState({ open: true, mode: "Add" });
    } else {
      this.props.getAcademicYearDetailsById(academicYearId).then(() => {
        this.setState({ open: true, mode: "Edit" });
      });
    }
  };
  onSaveClick = () => {
    const { mode } = this.state;
    const { academicDetails } = this.props;
    console.log('modee-=== ', mode, academicDetails)
    this.props
      .postAcademicYearDetails(academicDetails.info, mode)
      .then(() => {
        this.setState({ open: false, mode: "" }, () =>
          this.props.getAllAcademicYearDetails()
        );
      })
      .catch(error => {
        console.log("error com", error);
      });
  };


  render() {
    const { classes } = this.props;
    const { open, mode } = this.state;
    const { academicDetails } = this.props;

    const data =
    academicDetails &&
    size(academicDetails.academicYearList) &&
    academicDetails.academicYearList.map((item, index) => {
      return {
        academicYearName: item.academicYearName,
        ledgerNumber: item.ledgerNumber,
        from: item.from,
        to: item.to,
        
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.setState({ open: true, mode: "edit" })}
            onClick={() => this.onAddUpdateAcademicYear(item.idAcademicYear)}

          >
            <Edit />
          </Button>
        )
      };
    });
    return (
      <Fragment>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <i class="fas fa-calendar-alt"></i> <Header>Manage Academic Year</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Button
                  color="info"
                  style={{ float: "right", margin: 10 }}
                  onClick={() => this.setState({ open: true, mode: "add" })}
                >
                  <CalendarToday /> Add Academic Year
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <STable data={data == 0 ? [] : data} columns={columns} />
              </GridItem>
              {/* Modal */}
              <SDialog
                open={open}
                title={
                  mode === "add" ? "Add Academic Year" : "Update Academic Year"
                }
                body={this.renderAcademicForm()}
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
                      color="info"
                    >
                      Save
                    </Button>
                  </Fragment>
                }
                handleClose={flag => this.handleClose(flag)}
              />
            </GridContainer>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  console.log(' state academicDetails', state.academicDetails)
  return {
    academicDetails: state.academicDetails

  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoSyncData: bindActionCreators(autoSyncData, dispatch),
    postAcademicYearDetails: bindActionCreators(postAcademicYearDetails, dispatch),
    getAllAcademicYearDetails: bindActionCreators(getAllAcademicYearDetails, dispatch),
    getAcademicYearDetailsById: bindActionCreators(getAcademicYearDetailsById, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AcademicYear));




