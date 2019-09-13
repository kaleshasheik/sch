/* react */
import React, { PureComponent, Fragment } from "react";

/* material core */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

/* other */
import Datetime from "react-datetime";

/* custom core */
import GridItem from "../core-libs/material-ui/components/Grid/GridItem";
import { Row, checkBoxAndDDLStyles } from "../core-libs/Utils";
const styles = {
  ...checkBoxAndDDLStyles
};
class StudentPrevInstitutionDetails extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              required
              id="idPrevInsName"
              label="Previous Institution"
              placeholder="Previous Institution"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              required
              id="idPrevRegNo"
              label="Previous Registration Number"
              placeholder="Previous Registration Number"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
        </Row>
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              required
              multiline
              rows={4}
              id="idPrevAddress"
              label="Previous Institution Address"
              placeholder="Previous Institution Address"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <FormControl fullWidth>
              <Datetime
                timeFormat={false}
                inputProps={{ placeholder: "Year Of Passing" }}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
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
                label="Is Passed"
              />
            </div>
          </GridItem>
        </Row>
      </Fragment>
    );
  }
}

export default withStyles(styles)(StudentPrevInstitutionDetails);
