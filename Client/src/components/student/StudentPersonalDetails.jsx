/* react */
import React, { Fragment, PureComponent } from "react";

/* material core */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

/* material icons */
import Check from "@material-ui/icons/Check";

/* other */
import Datetime from "react-datetime";

/* custom core */
import GridContainer from "../core-libs/material-ui/components/Grid/GridContainer.jsx";
import GridItem from "../core-libs/material-ui/components/Grid/GridItem";
import Accordion from "../core-libs/material-ui/components/Accordion/Accordion.jsx";
import { Row, checkBoxAndDDLStyles } from "../core-libs/Utils";

const styles = {
  ...checkBoxAndDDLStyles,
  rowWrapper: { display: "flex", flexDirection: "column" },
  checkBoxWrapper: {
    display: "flex",
    padding: "0px 10px",
    justifyContent: "center"
  }
};
class StudentPersonalDetails extends PureComponent {
  renderBasicInformation = () => {
    const { classes } = this.props;
    return (
      <div className={classes.rowWrapper}>
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFName"
              label="First Name"
              placeholder="First Name"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idLName"
              label="Last Name"
              placeholder="Last Name"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              id="idAadharNumber"
              label="Aadhar Number"
              placeholder="Aadhar Number"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              id="idBirthPlace"
              label="Birth Place"
              placeholder="Birth Place"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
        </Row>
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
                  Choose Nationality
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="1">
                  Indian
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="2">
                  XYZ
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
                  Choose Gender
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="1">
                  Male
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="2">
                  Female
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
                  Choose Religion
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="1">
                  Hindu
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="2">
                  XYZ
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
                  Choose Caste
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="1">
                  XYZ1
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="2">
                  XYZ
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </Row>
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
                  Choose Category
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="1">
                  GM
                </MenuItem>
                <MenuItem classes={classes.menuItem} value="2">
                  XYZ
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <Datetime
                timeFormat={false}
                inputProps={{ placeholder: "Date Of Birth" }}
              />
            </FormControl>
          </GridItem>
        </Row>
        <Row xs={12} sm={12} md={12}>
          <div className={classes.checkBoxWrapper}>
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
                label="Is Blind"
              />
            </div>
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
                label="Is Minority"
              />
            </div>
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
                label="Is Income Group"
              />
            </div>
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
                label="Is Physically Handicapped"
              />
            </div>
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
                label="Is BPL"
              />
            </div>
          </div>
        </Row>
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              required
              multiline
              rows={5}
              id="idPermanentAddress"
              label="Permanent Address"
              placeholder="Permanent Address"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              required
              multiline
              rows={5}
              id="idCorrespondanceAddress"
              label="Correspondance Address"
              placeholder="Correspondance Address"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
        </Row>
      </div>
    );
  };
  renderParentalInformation = () => {
    return (
      <Fragment>
        <Row xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFatherName"
              label="Father Name"
              placeholder="Father Name"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFatherOccupation"
              label="Father Occupation"
              placeholder="Father Occupation"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFatherEmailId"
              label="EmailId"
              placeholder="EmailId"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFatherMobNo"
              label="Mobile Number"
              placeholder="Mobile Number"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              required
              id="idFatherIncome"
              label="Income"
              placeholder="Income"
              margin="normal"
              variant="outlined"
            />
          </GridItem>
        </Row>
      </Fragment>
    );
  };
  render() {
    return (
      <Fragment>
        <GridContainer>
          <Row xs={12} sm={12} md={12}>
            <Accordion
              active={0}
              collapses={[
                {
                  title: "Basic Information",
                  content: this.renderBasicInformation()
                },
                {
                  title: "Parent Information",
                  content: this.renderParentalInformation()
                }
              ]}
            />
          </Row>
        </GridContainer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(StudentPersonalDetails);
