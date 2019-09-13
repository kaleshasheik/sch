import React, { PureComponent } from "react";

/* material icons */
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";

/* material-core */
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
/* custom core */
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import { Header, Row } from "./core-libs/Utils";
/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
/* images */
import defaultAvatar from "../assets/img/placeholder.jpg";
/* actions */
import {
  autoSyncCurrentUserData,
  postUserDetails,
  getCurrentUserDetailsById
} from "../actions/userActions";
const styles = {
  infoCard: { width: "20%", display: "flex" },
  actionButtonsWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 10
  },
  btn: {
    margin: 10
  }
};
class EditProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: defaultAvatar
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
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
  onChange = e => {
    let currentUserDetails = Object.assign({}, this.props.currentUserDetails, {
      info: Object.assign({}, this.props.currentUserDetails.info, {
        [e.target.name]: e.target.value
      })
    });
    this.props.autoSyncCurrentUserData(currentUserDetails);
  };
  onSaveClick = () => {
    const { currentUserDetails } = this.props;
    this.props
      .postUserDetails(currentUserDetails.info, "Edit")
      .then(() => {
        this.props.getCurrentUserDetailsById(currentUserDetails.info.idUser);
      })
      .catch(error => {
        console.log("error com", error);
      });
  };
  render() {
    const { imagePreviewUrl, file } = this.state;
    const { classes, currentUserDetails } = this.props;
    console.log("currentUserDetails", currentUserDetails);
    return (
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <AccountCircleOutlined />
              <Header>Edit Profile</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <Row xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={9}>
                <Row xs={12} sm={12} md={12}>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      required
                      id="userName"
                      name="userName"
                      label="User Name"
                      placeholder="User Name"
                      margin="normal"
                      variant="outlined"
                      value={
                        currentUserDetails &&
                        currentUserDetails.info &&
                        currentUserDetails.info.userName
                      }
                      onChange={e => this.onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      disabled
                      id="emailId"
                      name="emailId"
                      label="Email Id"
                      placeholder="Email Id"
                      margin="normal"
                      variant="outlined"
                      value={
                        currentUserDetails &&
                        currentUserDetails.info &&
                        currentUserDetails.info.emailId
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      required
                      id="mobileNumber"
                      name="mobileNumber"
                      label="Mobile #"
                      placeholder="Mobile #"
                      margin="normal"
                      variant="outlined"
                      value={
                        currentUserDetails &&
                        currentUserDetails.info &&
                        currentUserDetails.info.mobileNumber
                      }
                      onChange={e => this.onChange(e)}
                    />
                  </GridItem>
                </Row>
                <Row xs={12} sm={12} md={12}>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="oldPassword"
                      label="Old Password"
                      placeholder="Old Password"
                      margin="normal"
                      variant="outlined"
                      disabled
                      value={
                        currentUserDetails &&
                        currentUserDetails.info &&
                        currentUserDetails.info.password
                      }
                      inputProps={{
                        type: "password"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="password"
                      name="password"
                      label="New Password"
                      placeholder="New Password"
                      margin="normal"
                      variant="outlined"
                      inputProps={{
                        type: "password"
                      }}
                      onChange={e => this.onChange(e)}
                    />
                  </GridItem>
                  {/*<GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="confirmNewPassword"
                      label="Confirm New Password"
                      placeholder="Confirm New Password"
                      margin="normal"
                      variant="outlined"
                        inputProps={{
                        type: "password"
                      }}
                    />
                    </GridItem>*/}
                </Row>
                <Row xs={12} sm={12} md={12}>
                  <div className={classes.actionButtonsWrapper}>
                    <Button
                      color="success"
                      className={classes.btn}
                      onClick={() => this.onSaveClick()}
                    >
                      Save
                    </Button>
                  </div>
                </Row>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div className="fileinput float-r">
                  <input
                    type="file"
                    onChange={this.handleImageChange}
                    ref="fileInput"
                  />
                  <div className="thumbnail img-circle max-w-250">
                    <img src={imagePreviewUrl} alt="userAvatar" />
                  </div>
                  <div className="text-center">
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
              </GridItem>
            </Row>
          </CardBody>
        </Card>
      </GridItem>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserDetails: state.currentUserDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoSyncCurrentUserData: bindActionCreators(
      autoSyncCurrentUserData,
      dispatch
    ),
    postUserDetails: bindActionCreators(postUserDetails, dispatch),
    getCurrentUserDetailsById: bindActionCreators(
      getCurrentUserDetailsById,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditProfile));
