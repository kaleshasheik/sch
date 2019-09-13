/* react */
import React, { PureComponent, Fragment } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { size } from "lodash";

/* custom core */
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Button from "./core-libs/material-ui/components/CustomButtons/Button";
import STable from "./core-libs/STable";
import SDialog from "./core-libs/SDialog";
import Accordion from "./core-libs/material-ui/components/Accordion/Accordion.jsx";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import { checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
/*material icons */
import Edit from "@material-ui/icons/Edit";

/* actions */
import {
  getAllAllocationDetails,
  autoSyncData,
  

} from "../actions/allocationAction";

/* other */
import styled from "styled-components";
const SubjectAllocation = styled.div`
  &> span, b {
      margin: 3px
  }
`
const CustomGridItem = styled(GridItem) `
  & > div {
    width: 100% !important;
  }
`;

const styles = {
  topActionsWrapper: { display: "flex", justifyContent: "flex-end" },
  infoCard: { width: "20%", display: "flex" },
  ...checkBoxAndDDLStyles
};
class Allocation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: "",
      step: 0,
      allocateTeacherModal: false
    };
  }
  handleClose = flag => {
    this.setState({ open: flag, mode: "", step: 0 });
  };

  componentDidMount() {
    this.props.getAllAllocationDetails();
  }

  onChange = (e, type) => {
    let classSection = Object.assign({}, this.props.classSectionStaffDetails, {
      info: Object.assign({}, this.props.classSectionStaffDetails.info, {
        [e.target.name]: e.target.value

      })
    });
    this.props.autoSyncData(classSection);
  };

  onSaveClick = () => {
    const { mode, step } = this.state;
    const { classSectionStaffDetails } = this.props;
    this.props
      .getAllAllocationDetails(classSectionStaffDetails.info, mode, step)
      .then(() => {
        this.setState({ open: false, mode: "" }, () =>
          this.props.getAllAllocationDetails()
        );
      })
      .catch(error => {
        console.log("error com", error);
      });
  };


  renderModalByStep = () => {
    const { step, mode } = this.state;
    const { classes, classSectionStaffDetails } = this.props;

    if (classSectionStaffDetails && classSectionStaffDetails.info) {

      const { idClass, idSection, idStaff } = classSectionStaffDetails.info;

      switch (step) {
        case 1:
          return (
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} style={{ display: "flex" }}>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idClass}
                      inputProps={{
                        name: "idClass",
                        id: "idClass"

                      }}
                      onChange={e => this.onChange(e, "classList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.classList &&
                        size(classSectionStaffDetails.allocationList.classList) &&
                        classSectionStaffDetails.allocationList.classList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idClass}
                            >
                              {item.className}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idSection}
                      inputProps={{
                        name: "idSection",
                        id: "idSection"
                      }}
                      onChange={e => this.onChange(e, "sectionList")}
                    >

                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.sectionList &&
                        size(classSectionStaffDetails.allocationList.sectionList) &&
                        classSectionStaffDetails.allocationList.sectionList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idSection}
                            >
                              {item.sectionName}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idStaff}
                      inputProps={{
                        name: "idStaff",
                        id: "idStaff"
                      }}
                      onChange={e => this.onChange(e, "staffList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.staffList &&
                        size(classSectionStaffDetails.allocationList.staffList) &&
                        classSectionStaffDetails.allocationList.staffList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idStaff}
                            >
                              {item.firstName + " " + item.lastName}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
              </GridItem>
            </GridContainer>
          );
        case 2:
          if (mode === "add") {
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
                name: "subjectCode",
                label: "Subject Code",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "subjectName",
                label: "Subject Name",
                options: {
                  filter: true,
                  sort: true
                }
              }
            ];
            const data = [
              {
                slNo: 1,
                subjectCode: "001",
                subjectName: "Kannad"
              }
            ];
            return (
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idClass}
                      inputProps={{
                        name: "idClass",
                        id: "idClass"

                      }}
                      onChange={e => this.onChange(e, "classList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.classList &&
                        size(classSectionStaffDetails.allocationList.classList) &&
                        classSectionStaffDetails.allocationList.classList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idClass}
                            >
                              {item.className}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idSection}
                      inputProps={{
                        name: "idSection",
                        id: "idSection"
                      }}
                      onChange={e => this.onChange(e, "sectionList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.sectionList &&
                        size(classSectionStaffDetails.allocationList.sectionList) &&
                        classSectionStaffDetails.allocationList.sectionList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idSection}
                            >
                              {item.sectionName}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <STable data={data} columns={columns} />
                </GridItem>
              </GridContainer>
            );
          } else {
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
                name: "class",
                label: "Class",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "section",
                label: "Section",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "subjectCode",
                label: "Subject Code",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "subjectName",
                label: "Subject",
                options: {
                  filter: true,
                  sort: true
                }
              }
            ];
            const data = [
              {
                slNo: 1,
                class: "1",
                section: "A",
                subjectCode: (
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
                        Choose Subject Code
                    </MenuItem>
                      <MenuItem classes={classes.menuItem} value="1">
                        001
                    </MenuItem>
                      <MenuItem classes={classes.menuItem} value="2">
                        002
                    </MenuItem>
                    </Select>
                  </FormControl>
                ),
                subjectName: (
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
                        XYZ
                    </MenuItem>
                    </Select>
                  </FormControl>
                )
              }
            ];
            return <STable columns={columns} data={data} />;
          }
        case 3:
          if (mode === "add") {
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
                name: "staffId",
                label: "Staff Id",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "staffName",
                label: "Staff Name",
                options: {
                  filter: true,
                  sort: true
                }
              }
            ];
            const data = [
              {
                slNo: 1,
                staffId: "001",
                staffName: "Raghavendra"
              }
            ];
            return (
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idClass}
                      inputProps={{
                        name: "idClass",
                        id: "idClass"

                      }}
                      onChange={e => this.onChange(e, "classList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.classList &&
                        size(classSectionStaffDetails.allocationList.classList) &&
                        classSectionStaffDetails.allocationList.classList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idClass}
                            >
                              {item.className}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth className={classes.menuFormControl}>
                    <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idSection}
                      inputProps={{
                        name: "idSection",
                        id: "idSection"
                      }}
                      onChange={e => this.onChange(e, "sectionList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.sectionList &&
                        size(classSectionStaffDetails.allocationList.sectionList) &&
                        classSectionStaffDetails.allocationList.sectionList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idSection}
                            >
                              {item.sectionName}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <STable data={data} columns={columns} />
                </GridItem>
              </GridContainer>
            );
          } else {
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
                name: "class",
                label: "Class",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "section",
                label: "Section",
                options: {
                  filter: true,
                  sort: true
                }
              },
              {
                name: "staff",
                label: "Staff",
                options: {
                  filter: true,
                  sort: true
                }
              }
            ];
            const data = [
              {
                slNo: 1,
                class: "1",
                section: "A",
                staff: (
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
                        Choose Staff
                    </MenuItem>
                      <MenuItem classes={classes.menuItem} value="1">
                        Raghavendra
                    </MenuItem>
                      <MenuItem classes={classes.menuItem} value="2">
                        XYZ
                    </MenuItem>
                    </Select>
                  </FormControl>
                )
              }
            ];
            return <STable columns={columns} data={data} />;
          }

        default:
          return null;
      }
    }
  }

  renderTitleByStep = () => {
    const { step, mode } = this.state;
    switch (step) {
      case 1:
        return mode === "add"
          ? "Allocate Class Section"
          : "Update Class Section Allocation";
      case 2:
        return mode === "add"
          ? "Allocate Class Section Subject"
          : "Update Class Section Subject Allocation";
      case 3:
        return mode === "add"
          ? "Allocate Class Staff"
          : "Update Class Staff Allocation";
      default:
        return "";
    }
  };

  renderClassSectionMapping = () => {
    const { classes } = this.props;
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
        name: "class",
        label: "Class",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "section",
        label: "Section",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "classTeacher",
        label: "Class Teacher",
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
        class: 1,
        section: "A",
        classTeacher: "Raghavendra",
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.setState({ open: true, mode: "edit", step: 1 })}
          >
            <Edit />
          </Button>
        )
      }
    ];
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button
            color="info"
            onClick={() => this.setState({ open: true, mode: "add", step: 1 })}
          >
            Allocate Class Section
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </GridContainer>
    );
  };
  renderSubjectTeacherAllocation = () => {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <SubjectAllocation>
            <b>Class: </b>
            <span>1</span> <b>Section: </b>
            <span>A</span> <b>Subject: </b>
            <span>Kannada</span>
          </SubjectAllocation>
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
                Choose Subject Teacher
              </MenuItem>
              <MenuItem classes={classes.menuItem} value="1">
                Raghavendra
              </MenuItem>
              <MenuItem classes={classes.menuItem} value="2">
                XYZ
              </MenuItem>
            </Select>
          </FormControl>
        </GridItem>
      </GridContainer>
    );
  };
  renderClassSectionSubjectMapping = () => {
    const { classes } = this.props;
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
        name: "class",
        label: "Class",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "section",
        label: "Section",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "subject",
        label: "Subject",
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
        class: "1",
        section: "A",
        subject: "Kannada",
        actions: (
          <Fragment>
            <Button
              justIcon
              round
              color="warning"
              size="sm"
              onClick={() =>
                this.setState({ open: true, mode: "edit", step: 2 })
              }
            >
              <Edit />
            </Button>
            <Button
              justIcon
              round
              color="info"
              size="sm"
              onClick={() => this.setState({ allocateTeacherModal: true })}
            >
              <i className="fas fa-user-check" />
            </Button>
          </Fragment>
        )
      }
    ];
    const { step, mode } = this.state;
    const { classSectionStaffDetails } = this.props;

    if (classSectionStaffDetails && classSectionStaffDetails.info) {

      const { idClass, idSection, idStaff } = classSectionStaffDetails.info;
    return (
      <Fragment>
        <GridContainer>
          <SDialog
            open={this.state.allocateTeacherModal}
            title={"Allocate Subject Teacher"}
            body={this.renderSubjectTeacherAllocation()}
            actions={
              <Fragment>
                <Button
                  onClick={() => this.setState({ allocateTeacherModal: false })}
                  color="danger"
                >
                  Close
                </Button>
                <Button
                  onClick={() => this.setState({ allocateTeacherModal: false })}
                  color="info"
                >
                  Save
                </Button>
              </Fragment>
            }
            handleClose={flag => this.handleClose(flag)}
          />
          <GridItem xs={12} sm={12} md={3}>
            <FormControl fullWidth className={classes.menuFormControl}>
            <Select
                      MenuProps={classes.menuProps}
                      classes={classes.menuClass}
                      value={idClass}
                      inputProps={{
                        name: "idClass",
                        id: "idClass"

                      }}
                      onChange={e => this.onChange(e, "classList")}
                    >
                      {classSectionStaffDetails &&
                        classSectionStaffDetails.allocationList &&
                        classSectionStaffDetails.allocationList.classList &&
                        size(classSectionStaffDetails.allocationList.classList) &&
                        classSectionStaffDetails.allocationList.classList.map((item, i) => {
                          return (
                            <MenuItem
                              classes={classes.menuItem}
                              value={item.idClass}
                            >
                              {item.className}
                            </MenuItem>
                          );
                        })}
                    </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControl fullWidth className={classes.menuFormControl}>
            <Select
            MenuProps={classes.menuProps}
            classes={classes.menuClass}
            value={idSection}
            inputProps={{
              name: "idSection",
              id: "idSection"
            }}
            onChange={e => this.onChange(e, "sectionList")}
          >
            {classSectionStaffDetails &&
              classSectionStaffDetails.allocationList &&
              classSectionStaffDetails.allocationList.sectionList &&
              size(classSectionStaffDetails.allocationList.sectionList) &&
              classSectionStaffDetails.allocationList.sectionList.map((item, i) => {
                return (
                  <MenuItem
                    classes={classes.menuItem}
                    value={item.idSection}
                  >
                    {item.sectionName}
                  </MenuItem>
                );
              })}
          </Select>
            </FormControl>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            className={classes.topActionsWrapper}
          >
            <Button
              color="info"
              onClick={() =>
                this.setState({ open: true, mode: "add", step: 2 })
              }
            >
              Allocate Class Section Subject
            </Button>
          </GridItem>
          <CustomGridItem xs={12} sm={12} md={12} style={{ display: "flex" }}>
            <STable data={data} columns={columns} />
          </CustomGridItem>
        </GridContainer>
      </Fragment>
    );
  };}
  renderClassSectionStaffMapping = () => {
    const { classes } = this.props;
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
        name: "class",
        label: "Class",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "section",
        label: "Section",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "staff",
        label: "Staff",
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
        class: "1",
        section: "A",
        staff: "Raghavendra",
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.setState({ open: true, mode: "edit", step: 3 })}
          >
            <Edit />
          </Button>
        )
      }
    ];
    const { step, mode } = this.state;
    const { classSectionStaffDetails } = this.props;

    if (classSectionStaffDetails && classSectionStaffDetails.info) {

      const { idClass, idSection, idStaff } = classSectionStaffDetails.info;
    return (
      <Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <FormControl fullWidth className={classes.menuFormControl}>
            <Select
            MenuProps={classes.menuProps}
            classes={classes.menuClass}
            value={idClass}
            inputProps={{
              name: "idClass",
              id: "idClass"

            }}
            onChange={e => this.onChange(e, "classList")}
          >
            {classSectionStaffDetails &&
              classSectionStaffDetails.allocationList &&
              classSectionStaffDetails.allocationList.classList &&
              size(classSectionStaffDetails.allocationList.classList) &&
              classSectionStaffDetails.allocationList.classList.map((item, i) => {
                return (
                  <MenuItem
                    classes={classes.menuItem}
                    value={item.idClass}
                  >
                    {item.className}
                  </MenuItem>
                );
              })}
          </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControl fullWidth className={classes.menuFormControl}>
            <Select
            MenuProps={classes.menuProps}
            classes={classes.menuClass}
            value={idSection}
            inputProps={{
              name: "idSection",
              id: "idSection"
            }}
            onChange={e => this.onChange(e, "sectionList")}
          >
            {classSectionStaffDetails &&
              classSectionStaffDetails.allocationList &&
              classSectionStaffDetails.allocationList.sectionList &&
              size(classSectionStaffDetails.allocationList.sectionList) &&
              classSectionStaffDetails.allocationList.sectionList.map((item, i) => {
                return (
                  <MenuItem
                    classes={classes.menuItem}
                    value={item.idSection}
                  >
                    {item.sectionName}
                  </MenuItem>
                );
              })}
          </Select>
            </FormControl>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            className={classes.topActionsWrapper}
          >
            <Button
              color="info"
              onClick={() =>
                this.setState({ open: true, mode: "add", step: 3 })
              }
            >
              Allocate Class Section Staff
            </Button>
          </GridItem>
          <CustomGridItem xs={12} sm={12} md={12} style={{ display: "flex" }}>
            <STable data={data} columns={columns} />
          </CustomGridItem>
        </GridContainer>
      </Fragment>
    );
  }};
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info" className={classes.infoCard}>
              <i class="fas fa-tasks" />
              <Header>Allocation</Header>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <Accordion
              active={0}
              collapses={[
                {
                  title: "Class Teacher",
                  content: this.renderClassSectionMapping()
                },
                {
                  title: "Subject",
                  content: this.renderClassSectionSubjectMapping()
                },
                {
                  title: "Subject Teacher",
                  content: this.renderClassSectionStaffMapping()
                }
              ]}
            />
            <SDialog
              open={open}
              title={this.renderTitleByStep()}
              body={this.renderModalByStep()}
              actions={
                <Fragment>
                  <Button
                    onClick={() => this.handleClose(false)}
                    color="danger"
                  >
                    Close
                  </Button>
                  <Button onClick={() => this.onSaveClick()} color="info">
                    Save
                  </Button>
                </Fragment>
              }
              handleClose={flag => this.handleClose(flag)}
            />
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(' state staff', state.classSectionStaffDetails)
  return {
    classSectionStaffDetails: state.classSectionStaffDetails

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllAllocationDetails: bindActionCreators(getAllAllocationDetails, dispatch),
    autoSyncData: bindActionCreators(autoSyncData, dispatch),
   // postAllocationDetails: bindActionCreators(postAllocationDetails, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Allocation));

