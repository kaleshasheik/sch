/* react */
import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


/* custom core */
import GridContainer from "../core-libs/material-ui/components/Grid/GridContainer.jsx";
import GridItem from "../core-libs/material-ui/components/Grid/GridItem";
import { Row, checkBoxAndDDLStyles } from "../core-libs/Utils";



const styles = {
  ...checkBoxAndDDLStyles
};
class StudentPreAdmissionDetails extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
        <GridContainer>
          <Row xs={12} sm={12} md={12}>
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
                    Choose Academic Year
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="1">
                    2018-19
                  </MenuItem>
                  <MenuItem classes={classes.menuItem} value="2">
                    2017-18
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
                    Previous Class
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
          </Row>
          <Row xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={4}>
              <TextField
                style={{ width: "100%" }}
                required
                id="idTotalToBePaid"
                label="Total Fee"
                placeholder="Total Fee"
                margin="normal"
                variant="outlined"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TextField
                style={{ width: "100%" }}
                required
                id="idInitialAmountPaid"
                label="Initial Fee Paid"
                placeholder="Initial Fee Paid"
                margin="normal"
                variant="outlined"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TextField
                style={{ width: "100%" }}
                disabled
                id="idApplicationNumber"
                label="Application Number"
                placeholder="Application Number"
                value="001"
                margin="normal"
                variant="outlined"
              />
            </GridItem>
          </Row>
        </GridContainer>
    );
  }
}

export default withStyles(styles)(StudentPreAdmissionDetails);
