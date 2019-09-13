/* react */
import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import {
  primaryColor,
  grayColor,
  blackColor,
  hexToRgb,
} from "../../assets/jss/material-dashboard-pro-react";

/* custom core */
import GridItem from "../core-libs/material-ui/components/Grid/GridItem";
import { Row } from "../core-libs/Utils";



const styles = {
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: grayColor[3],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all"
  },
  checkRoot: {
    padding: "14px"
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    }
  }
};
class StudentAdmissionDetails extends PureComponent {
  render() {
    return (
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              style={{ width: "100%" }}
              disabled
              id="idRegistrationNumber"
              label="Registration Number"
              placeholder="Registration Number"
              margin="normal"
              variant="outlined"
              value="AB0001"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              style={{ width: "100%" }}
              disabled
              id="idRollNumber"
              label="Roll Number"
              placeholder="Roll Number"
              margin="normal"
              variant="outlined"
              value="01"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              style={{ width: "100%" }}
              id="idFeeConcision"
              label="Fee Concision"
              placeholder="Fee Concision"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              style={{ width: "100%" }}
              disabled
              id="idRemainingAmount"
              label="Remaining Amount"
              placeholder="Remaining Amount"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
        </Row>
    );
  }
}

export default withStyles(styles)(StudentAdmissionDetails);
