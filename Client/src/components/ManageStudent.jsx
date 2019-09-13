/* react */
import React, { PureComponent, Fragment } from "react";
/* material icons */
import Edit from "@material-ui/icons/Edit";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer.jsx";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem.jsx";
import Button from "../components/core-libs/material-ui/components/CustomButtons/Button";
import { Row, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";

/* other */
import STable from "./core-libs/STable";

/* images */
import imgUser from "../assets/img/faces/avatar.jpg";
import defaultAvatar from "../assets/img/placeholder.jpg";

const styles = {
  ...checkBoxAndDDLStyles,
  infoCard: { width: "20%", display: "flex" }
};
class ManageStudent extends PureComponent {
  render() {
    const { classes } = this.props;
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
        name: "profileImage",
        label: "Profile Image",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "studentFName",
        label: "First Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "studentLName",
        label: "Last Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "studentRegistrationNumber",
        label: "Registration #",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "studentRollNumber",
        label: "Roll #",
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
    const data = [
      {
        slNo: 1,
        profileImage: (
          <Avatar
            alt=""
            src={imgUser}
            style={{
              margin: 10,
              width: 40,
              height: 40
            }}
          />
        ),
        studentFName: "Raghavendra",
        studentLName: "NK",
        studentRegistrationNumber: "",
        studentRollNumber: "",
        actions: (
          <Fragment>
            <Button justIcon round color="warning" size="sm">
              <Edit />
            </Button>
            <Button
              justIcon
              round
              size="sm"
              color="linkedin"
              onClick={() => this.props.history.push("/admin/studentPayment")}
            >
              <i class="fas fa-dollar-sign" />
            </Button>
          </Fragment>
        )
      },
      {
        slNo: 2,
        profileImage: (
          <Avatar
            alt=""
            src={defaultAvatar}
            style={{
              margin: 10,
              width: 40,
              height: 40
            }}
          />
        ),
        studentFName: "XYZ",
        studentLName: "AB",
        studentRegistrationNumber: "Ab001",
        studentRollNumber: "01",
        actions: (
          <Fragment>
            <Button justIcon round color="warning" size="sm">
              <Edit />
            </Button>
            <Button
              justIcon
              round
              size="sm"
              color="linkedin"
              onClick={() => this.props.history.push("/admin/studentPayment")}
            >
              <i class="fas fa-dollar-sign" />
            </Button>
          </Fragment>
        )
      }
    ];
    return (
      <GridContainer justify="center">
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <i class="fas fa-user-edit" /> <Header>Manage Student</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <Row xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={3}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    value={0}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Academic Year
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="1">
                      201-19
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="2">
                      2017-18
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    value={0}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Class
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="1">
                      1
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="2">
                      2
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    value={0}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Section
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="1">
                      A
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="2">
                      B
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    value={0}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem disabled classes={classes.menuItem} value="0">
                      Choose Type Of Student
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="1">
                      Admitted
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="2">
                      Not Admitted
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <STable columns={columns} data={data} />
            </Row>
          </CardBody>
        </Card>{" "}
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ManageStudent);
