import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

/* other */
import styled from "styled-components";
import Datetime from "react-datetime";
/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import { checkBoxAndDDLStyles, Header, Row } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";

const CTable = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
`;
const CTableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 10px 0px;
`;
const CTableHeaderCell = styled.div`
  font-weight: bolder;
  color: #00acc1;
  width: 30%;
  text-align: center;
`;
const CTableBody = styled.div``;
const CTableBodyRow = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 10px 0px;
`;
const CTableBodyRowCell = styled.div`
  width: 30%;
  text-align: center;
`;
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
class ScheduleExamination extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
            <i class="fas fa-tasks" />
            <Header>Schedule Exam</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
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
            <GridItem xs={12} sm={12} md={4}>
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
            <GridItem xs={12} sm={12} md={4}>
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
          </GridContainer>
          <Row xs={12} sm={12} md={12}>
            <CTable>
              <CTableHeader>
                <CTableHeaderCell>Sl. No</CTableHeaderCell>
                <CTableHeaderCell>Subject Name</CTableHeaderCell>
                <CTableHeaderCell>Date Time</CTableHeaderCell>
              </CTableHeader>
              <CTableBody>
                <CTableBodyRow>
                  <CTableBodyRowCell>1</CTableBodyRowCell>
                  <CTableBodyRowCell>Kannada</CTableBodyRowCell>
                  <CTableBodyRowCell>
                    <Datetime
                      timeFormat={true}
                      inputProps={{ placeholder: "Date Time" }}
                    />
                  </CTableBodyRowCell>
                </CTableBodyRow>
                <CTableBodyRow>
                  <CTableBodyRowCell>2</CTableBodyRowCell>
                  <CTableBodyRowCell>English</CTableBodyRowCell>
                  <CTableBodyRowCell>
                    <Datetime
                      timeFormat={true}
                      inputProps={{ placeholder: "Date Time" }}
                    />
                  </CTableBodyRowCell>
                </CTableBodyRow>
              </CTableBody>
            </CTable>
          </Row>
          <Row xs={12} sm={12} md={12}>
            <div className={classes.actionButtonsWrapper}>
              <Button color="danger" className={classes.btn}>
                Cancel
              </Button>
              <Button color="success" className={classes.btn}>
                Save
              </Button>
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(ScheduleExamination);
