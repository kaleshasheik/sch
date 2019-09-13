/* react */
import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import STable from "./core-libs/STable";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import { Row, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";

/* other */
import Datetime from "react-datetime";

/* icons */
import Check from "@material-ui/icons/Check";

/* images */
import defaultAvatar from "../assets/img/placeholder.jpg";

const styles = {
  infoCard: { width: "20%", display: "flex" },
  actionButtonsWrapper: { display: "flex", flexDirection: "row-reverse" },
  ...checkBoxAndDDLStyles
};

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
    name: "staffId",
    label: "Id",
    options: {
      filter: true,
      sort: true
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
    name: "isPresent",
    label: "Present",
    options: {
      filter: false,
      sort: false
    }
  }
];

class StaffAttendance extends PureComponent {
  render() {
    const { classes } = this.props;

    const data = [
      {
        profileImage: (
          <Avatar
            alt="Raghavendra"
            src={defaultAvatar}
            style={{
              margin: 10,
              width: 40,
              height: 40
            }}
          />
        ),
        staffId: "001",
        name: "Raghavendra",
        isPresent: (
          <div
            className={
              classes.checkboxAndRadio +
              " " +
              classes.checkboxAndRadioHorizontal
            }
          >
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label=""
            />
          </div>
        )
      }
    ];
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
          <i class="fas fa-chalkboard-teacher"></i><Header>Staff Attendance</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <Row xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={6}>
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
                      Choose Staff Type
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="1">
                      Teaching
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value="2">
                      Non-Teaching
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                  <Datetime timeFormat={false} />
                </FormControl>
              </GridItem>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <STable columns={columns} data={data} />
            </Row>
            <Row xs={12} sm={12} md={12} className={classes.actionButtonsWrapper}>
              <Button color="info">
                Save
              </Button>
            </Row>
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(StaffAttendance);
