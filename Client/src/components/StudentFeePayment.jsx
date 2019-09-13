/* react */
import React, { PureComponent } from "react";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import { Row, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";
/* other */
import Datetime from "react-datetime";
import styled from "styled-components";

/*images */
import defaultAvatar from "../assets/img/placeholder.jpg";
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
const CTableHeaderSelectionCell = styled.div`
  font-weight: bolder;
  color: #00acc1;
  width: 10%;
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
const CTableBodySelectionCell = styled.div`
  color: #00acc1;
  width: 10%;
  text-align: center;
  & > div {
    margin: 0px !important;
    & > label {
      margin: 0px !important;
      & > span {
        padding: 0px !important;
      }
    }
  }
`;

const styles = {
  totalWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0px 20px"
  },
  actionButtonsWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  btn: {
    margin: 10
  },
  infoCard: { width: "20%", display: "flex" },
  ...checkBoxAndDDLStyles,
  labelValue: {
    textTransform: "capitalize",
    color: "black",
    margin: "0px 20px"
  },
  labelRValue: {
    textTransform: "capitalize",
    color: "black",
    margin: "0px 20px",
    borderBottom: "1px solid gray"
  },
  valueField: {
    margin: "10px"
  }
};
class StudentFeePayment extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
            <Avatar
              alt=""
              src={defaultAvatar}
              style={{
                width: 30,
                height: 30
              }}
            />
            <Header>Student Payment</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <Row xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={4}>
                <label>Student Name: </label>
                <span className={classes.labelValue}>XYZ</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <label>Ledger Number: </label>
                <span className={classes.labelRValue}>0001</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Payment Date" }}
                  />
                </FormControl>
              </GridItem>
            </Row>
            <Row xs={12} sm={12} md={12}>
              <CTable>
                <CTableHeader>
                  <CTableHeaderSelectionCell />
                  <CTableHeaderCell>Sl. No</CTableHeaderCell>
                  <CTableHeaderCell>Fee Type</CTableHeaderCell>
                  <CTableHeaderCell>Fee Amount</CTableHeaderCell>
                </CTableHeader>
                <CTableBody>
                  <CTableBodyRow>
                    <CTableBodySelectionCell>
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
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
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
                    </CTableBodySelectionCell>
                    <CTableBodyRowCell>1</CTableBodyRowCell>
                    <CTableBodyRowCell>Application Form Fees</CTableBodyRowCell>
                    <CTableBodyRowCell>100</CTableBodyRowCell>
                  </CTableBodyRow>
                  <CTableBodyRow>
                    <CTableBodySelectionCell>
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
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
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
                    </CTableBodySelectionCell>
                    <CTableBodyRowCell>2</CTableBodyRowCell>
                    <CTableBodyRowCell>
                      Annual Examination Fees
                    </CTableBodyRowCell>
                    <CTableBodyRowCell>1000</CTableBodyRowCell>
                  </CTableBodyRow>
                </CTableBody>
              </CTable>
            </Row>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.totalWrapper}>
                <label>
                  Total: <i class="fas fa-rupee-sign" />
                </label>
                <span>10,000</span>
              </div>
              <div className={classes.totalWrapper}>
                <label>
                  Initial Amount Paid: <i class="fas fa-rupee-sign" />
                </label>
                <span>-2,000</span>
              </div>
              <div className={classes.totalWrapper}>
                <label>
                  Remaining Amount: <i class="fas fa-rupee-sign" />
                </label>
                <span>8,000</span>
              </div>
              <div className={classes.totalWrapper}>
                <label>
                  Total Paid: <i class="fas fa-rupee-sign" />
                </label>
                <span>10,000</span>
              </div>
            </GridItem>
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
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(StudentFeePayment);
