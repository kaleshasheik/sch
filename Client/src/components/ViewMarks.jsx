import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
/* other */
import styled from "styled-components";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import { checkBoxAndDDLStyles, Header, Row } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import STable from "./core-libs/STable";

const styles = {
  infoCard: { width: "20%", display: "flex" },
  ...checkBoxAndDDLStyles,
  actionButtonsWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  btn: {
    margin: 10
  }
};
const columns = [
  {
    name: "slNo",
    label: "#",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "studentName",
    label: "Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "minMarks",
    label: "Min Marks",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "maxMarks",
    label: "Max Marks",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "scoredMarks",
    label: "Scored Marks",
    options: {
      filter: true,
      sort: true
    }
  }
];
const data = [
  {
    slNo: 1,
    studentName: "Raghavendra",
    minMarks: 35,
    maxMarks: 100,
    scoredMarks: 49
  }
];
class ViewMarks extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
            <i class="fas fa-tasks" />
            <Header>View Marks</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridContainer>
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
                    Choose Test
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="1">
                    F1
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="2">
                    F2
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
                    Choose Subject
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="1">
                    Kannada
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="2">
                    English
                  </MenuItem>
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
          <Row xs={12} sm={12} md={12}>
            <STable data={data} columns={columns} />
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(ViewMarks);
