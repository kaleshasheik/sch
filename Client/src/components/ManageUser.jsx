import React, { PureComponent, Fragment } from "react";

/* icons */
import Edit from "@material-ui/icons/Edit";
import PersonAdd from "@material-ui/icons/PersonAdd";

/* material core */
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";
import { checkBoxAndDDLStyles, switchStyle } from "./core-libs/Utils";

/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/* other */
import styled from "styled-components";
import { size, some, find } from "lodash";
/* custom core */
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import STable from "./core-libs/STable";
import SDialog from "./core-libs/SDialog";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import { Header } from "./core-libs/Utils";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
/* images */
import imgUser from "../assets/img/faces/avatar.jpg";
import defaultAvatar from "../assets/img/placeholder.jpg";

/* actions */
import {
  getUserDetails,
  autoSyncData,
  postUserDetails,
  getAllUsers,
  getUserDetailsById
} from "../actions/userActions";
import { getUserTypesList } from "../actions/getCommonData";

const columns = [
  {
    name: "profileImage",
    label: "Profile Image",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "emailId",
    label: "Email",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "mobileNumber",
    label: "Mobile",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "userType",
    label: "Type Of User",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "userActions",
    label: "Actions",
    options: {
      filter: false,
      sort: false
    }
  }
];
const styles = {
  infoCard: { width: "20%", display: "flex" },
  topActionsWrapper: { display: "flex", justifyContent: "flex-end" },
  ...checkBoxAndDDLStyles,
  ...switchStyle
};
const options = {
  filterType: "checkbox",
  selectedRows: {
    text: "row(s) selected",
    delete: "Delete",
    deleteAria: "Delete Selected Rows"
  }
};
const FormRow = styled.div`
  display: flex;
  width: auto;
  max-width: auto;
`;
class ManageUser extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: "",
      file: null,
      imagePreviewUrl: defaultAvatar,
      isWorking: false
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  onChange = e => {
    let userDetails = Object.assign({}, this.props.userDetails, {
      info: Object.assign({}, this.props.userDetails.info, {
        [e.target.name]:
          e.target.name !== "status" ? e.target.value : e.target.checked
      })
    });
    this.props.autoSyncData(userDetails);
  };

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
  handleClick() {
    this.refs.fileInput.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: defaultAvatar
    });
    this.refs.fileInput.value = null;
  }
  renderUserForm = () => {
    const { imagePreviewUrl, file, isWorking } = this.state;
    const { userDetails } = this.props;
    if (userDetails && userDetails.info) {
      const { classes, commonData } = this.props;
      const {
        idUserType,
        userName,
        emailId,
        password,
        status,
        mobileNumber,
        profileImage
      } = userDetails.info;
      return (
        <Fragment>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <FormRow>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    value={idUserType}
                    name="idUserType"
                    inputProps={{
                      name: "idUserType",
                      id: "idUserType"
                    }}
                    onChange={e => this.onChange(e)}
                  >
                    {commonData &&
                      commonData.userTypesList &&
                      size(commonData.userTypesList) &&
                      commonData.userTypesList.map((item, i) => {
                        return (
                          <MenuItem
                            classes={classes.menuItem}
                            value={item.idUserType}
                          >
                            {item.UserType}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </FormRow>
              <FormRow>
                <TextField
                  required
                  id="userName"
                  name="userName"
                  label="User Name"
                  placeholder="User Name"
                  margin="normal"
                  variant="outlined"
                  value={userName}
                  onChange={e => this.onChange(e)}
                />
              </FormRow>
              <FormRow>
                <TextField
                  required
                  id="emailId"
                  name="emailId"
                  label="Email Id"
                  placeholder="Email Id"
                  margin="normal"
                  variant="outlined"
                  value={emailId}
                  onChange={e => this.onChange(e)}
                />
              </FormRow>
              <FormRow>
                <TextField
                  required
                  id="mobileNumber"
                  name="mobileNumber"
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  margin="normal"
                  variant="outlined"
                  value={mobileNumber}
                  onChange={e => this.onChange(e)}
                />
              </FormRow>
              <FormRow className="pad-15">
                <FormControlLabel
                  control={
                    <Switch
                      name="status"
                      id="status"
                      checked={status}
                      /*onChange={e =>
                      this.setState({ isWorking: e.target.checked })
                    }*/
                      onChange={e => this.onChange(e)}
                      value={isWorking}
                      classes={classes.switchStyle}
                    />
                  }
                  classes={classes.switchLabel}
                  label="Working"
                />
              </FormRow>
            </Grid>
            <Grid item xs={5}>
              <Paper>
                <div className="fileinput text-center pad-10">
                  <input
                    type="file"
                    onChange={this.handleImageChange}
                    ref="fileInput"
                  />
                  <div className="thumbnail img-circle max-w-250">
                    <img src={imagePreviewUrl} alt="userAvatar" />
                  </div>
                  <div>
                    {!file && (
                      <Button color="info" onClick={() => this.handleClick()}>
                        Add Photo
                      </Button>
                    )}
                    {file && (
                      <span>
                        <Button color="info" onClick={() => this.handleClick()}>
                          Change
                        </Button>
                        <br />
                        <Button
                          color="danger"
                          onClick={() => this.handleRemove()}
                        >
                          <i className="fas fa-times" /> Remove
                        </Button>
                      </span>
                    )}
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
    }
  };
  handleClose = flag => {
    this.setState({ open: flag, mode: "" });
  };
  onAddUpdateUser = (userId = -1) => {
    if (userId === -1) {
      this.setState({ open: true, mode: "Add" });
    } else {
      this.props.getUserDetailsById(userId).then(() => {
        this.setState({ open: true, mode: "Edit" });
      });
    }
  };
  onSaveClick = () => {
    const { mode } = this.state;
    const { userDetails } = this.props;
    this.props
      .postUserDetails(userDetails.info, mode)
      .then(() => {
        this.setState({ open: false, mode: "" }, () =>
          this.props.getAllUsers()
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
    this.props.getUserTypesList();
    this.props.getAllUsers();
  }
  /* componentDidUpdate(prevProps) {
    if (this.props.userDetails !== prevProps.userDetails) {
      this.setState({ userDetails: this.props.userDetails });
    }
  } */

  render() {
    const { open, mode } = this.state;
    const { commonData, userDetails } = this.props;
    const data =
      userDetails &&
      size(userDetails.userList) &&
      userDetails.userList.map((item, index) => {
        return {
          profileImage: (
            <Avatar
              alt={item.userName}
              src={imgUser}
              style={{
                margin: 10,
                width: 40,
                height: 40
              }}
            />
          ),
          name: item.userName,
          emailId: item.emailId,
          mobileNumber: item.mobileNumber,
          userType:
            (commonData &&
              commonData.userTypesList &&
              size(commonData.userTypesList) &&
              some(commonData.userTypesList, ["idUserType", item.idUserType]) &&
              find(commonData.userTypesList, ["idUserType", item.idUserType])
                .UserType) ||
            "",
          userActions: (
            <Button
              justIcon
              round
              size="sm"
              color="warning"
              onClick={() => this.onAddUpdateUser(item.idUser)}
            >
              <Edit />
            </Button>
          )
        };
      }); /*[
        {
          profileImage: (
            <Avatar
              alt="Raghavendra"
              src={imgUser}
              style={{
                margin: 10,
                width: 40,
                height: 40
              }}
            />
          ),
          name: "Raghavendra",
          emailId: "raghavendra.nk7@gmail.com",
          mobileNumber: "+91 - 89703 61988",
          userType: "Admin",
          userActions: (
            <Button
              justIcon
              round
              size="sm"
              color="warning"
              onClick={() => this.setState({ open: true, mode: "edit" })}
            >
              <Edit />
            </Button>
          )
        }
      ];*/
    const { classes } = this.props;
    return (
      <Fragment>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <i class="fas fa-user-cog" /> <Header>Manage User</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={classes.topActionsWrapper}
            >
              <Button color="info" onClick={() => this.onAddUpdateUser()}>
                <PersonAdd /> Add User
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              {data && (
                <STable
                  data={data}
                  columns={columns}
                  options={options}
                  expandableRows={true}
                />
              )}
            </GridItem>
            {/* Modal */}
            <SDialog
              open={open}
              title={
                mode === "add" ? "Add User Details" : "Update User Details"
              }
              body={this.renderUserForm()}
              actions={
                <Fragment>
                  <Button
                    onClick={() => this.handleClose(false)}
                    color="danger"
                  >
                    Close
                  </Button>
                  <Button onClick={() => this.onSaveClick()} color="info">
                    Save
                  </Button>
                </Fragment>
              }
              handleClose={flag => this.handleClose(flag)}
            />
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userDetails: state.userDetails,
    commonData: state.commonData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: bindActionCreators(getUserDetails, dispatch),
    getUserTypesList: bindActionCreators(getUserTypesList, dispatch),
    autoSyncData: bindActionCreators(autoSyncData, dispatch),
    postUserDetails: bindActionCreators(postUserDetails, dispatch),
    getAllUsers: bindActionCreators(getAllUsers, dispatch),
    getUserDetailsById: bindActionCreators(getUserDetailsById, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ManageUser));
