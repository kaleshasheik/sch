import React, { PureComponent, Fragment } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {
  grayColor,
  cardTitle
} from "../assets/jss/material-dashboard-pro-react";

// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Language from "@material-ui/icons/Language";
import Grain from "@material-ui/icons/Grain";
import Class from "@material-ui/icons/Class";
import AcUnit from "@material-ui/icons/AcUnit";
import Category from "@material-ui/icons/Category";
import Dashboard from "@material-ui/icons/Dashboard";
import Book from "@material-ui/icons/Book";

/* custom core */
import Button from "./core-libs/material-ui/components/CustomButtons/Button.jsx";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import NavPills from "./core-libs/material-ui/components/NavPills/NavPills.jsx";
import STable from "./core-libs/STable";
import SDialog from "./core-libs/SDialog";
import Accordion from "./core-libs/material-ui/components/Accordion/Accordion.jsx";
import Card from "./core-libs/material-ui/components/Card/Card.jsx";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader.jsx";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon.jsx";
import CardBody from "./core-libs/material-ui/components/Card/CardBody.jsx";
import { switchStyle, checkBoxAndDDLStyles, Header } from "./core-libs/Utils";
import styled from "styled-components";

/* Redux */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/* actions */
import {
  postData,
  getData,
  postAPIData,
  getGeneralEntryById, getAllGeneralentries, autoSyncData, postGeneralEntryDetails
} from "../actions/generalEntriesActions";
/* other packages */
const CustomNavPills = styled(NavPills) `
  color: red;
`;
const styles = {
  subjectWrapper: { display: "flex", flexDirection: "column", width: "100%" },
  topActionsWrapper: { display: "flex", justifyContent: "flex-end" },
  infoCard: { width: "20%", display: "flex" },
  switchLabel: {
    label: {
      cursor: "pointer",
      paddingLeft: "0",
      color: grayColor[3],
      fontSize: "14px",
      lineHeight: "1.428571429",
      fontWeight: "400",
      display: "inline-flex",
      transition: "0.3s ease all"
    }
  },
  ...checkBoxAndDDLStyles,
  ...switchStyle,
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  },
  textField: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    padding: 10,
    margin: 5
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 10,
    marginRight: 70
  },
  formFields: {
    display: "flex",
    justifyContent: "center"
  }
};

class GeneralEntries extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalType: 0,
      generalEntries: null,
      mode: ""
    };
  }
  

  getProps = async type => {
    await this.props.getData(type);
    const { generalEntries } = this.props;
    this.setState({ generalEntries });
  };
  componentDidMount() {
    
    this.props.getAllGeneralentries()
  //  this.getProps(1);
    console.log(' general entry did mount', this.props.generalEntries)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.generalEntries !== prevProps.generalEntries) {
      this.setState({
        generalEntries: this.props.generalEntries
      });
    }
  }
  onTabChange = active => {
    this.getProps(active + 1);
  };
  renderReligions = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.religionList ?
                       generalEntries.dataSource.religionList: []
    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(2,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(2,'Add')}>
            <Grain /> Add Religion
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  renderCaste = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.casteList ?
                       generalEntries.dataSource.casteList: []

    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(3,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(3,'Add')}>
            <AcUnit /> Add Caste
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  renderCategories = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.categoryList ?
                       generalEntries.dataSource.categoryList: []

    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(4,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(4,'Add')}>
            <Category /> Add Category
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  renderClass = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.classList ?
                       generalEntries.dataSource.classList: []
    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(5,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(5,'Add')}>
            <Class /> Add Class
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  renderSection = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.sectionList ?
                       generalEntries.dataSource.sectionList: []

    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(6,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(6,'Add')}>
            <Dashboard /> Add Section
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  renderSubject = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.subjectList ?
                       generalEntries.dataSource.subjectList: []
    console.log('renderSubject ', generalEntries)
    const data = dataSource.map((item, i) =>  
    
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(8,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    )
    return (
      <div className={classes.subjectWrapper}>
        <div>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            className={classes.topActionsWrapper}
          >
            <Button color="info" onClick={() => this.handleModalOpen(8,'Add')}>
              <Book /> Add Subject
            </Button>
          </GridItem>
        </div>
        <div>
          <GridItem xs={12} sm={12} md={12}>
            <STable data={data} columns={columns} />
          </GridItem>
        </div>
      </div>
    );
  };
  renderSubjectType = () => {
    const { classes, generalEntries } = this.props;
    const { columns } = this.props.generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.subjectTypeList ?
                       generalEntries.dataSource.subjectTypeList: []

    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(7,'Edit')}
          >
            <Edit />
          </Button>
        )
      })
    );
    return (
      <div className={classes.subjectWrapper}>
        <div>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            className={classes.topActionsWrapper}
          >
            <Button color="info" onClick={() => this.handleModalOpen(7,'Add')}>
              <Book /> Add Subject Type
            </Button>
          </GridItem>
        </div>
        <div>
          <GridItem xs={12} sm={12} md={12}>
            <STable data={data} columns={columns} />
          </GridItem>
        </div>
      </div>
    );
  };
  renderSubjectLayout = () => {
    return (
      <Accordion
        active={0}
        onChange={active => {
          this.onTabChange(active ? 7 : 6);
        }}
        collapses={[
          {
            title: "Subject Type",
            content: this.renderSubjectType()
          },
          {
            title: "Subjects",
            content: this.renderSubject()
          }
        ]}
      />
    );
  };
  renderMedium = () => {
    const { classes, generalEntries } = this.props;
    console.log('render medium', generalEntries)
    const { columns} = generalEntries;
    const dataSource = generalEntries.dataSource && generalEntries.dataSource.mediumList ?
                       generalEntries.dataSource.mediumList: []

    const data = dataSource.map((item, i) =>
      Object.assign({}, item, {
        slNo: i + 1,
        actions: (
          <Button
            justIcon
            round
            color="warning"
            size="sm"
            onClick={() => this.handleModalOpen(1,'edit')}
          >
            <Edit />
          </Button>
        )
      })
    );

    return (
      <Fragment>
        <GridItem xs={12} sm={12} md={12} className={classes.topActionsWrapper}>
          <Button color="info" onClick={() => this.handleModalOpen(1,'Add')}>
            <Language /> Add Medium
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <STable data={data} columns={columns} />
        </GridItem>
      </Fragment>
    );
  };
  handleModalOpen = (modalType,mode) => {
    this.setState({ open: true, modalType, mode: mode });
  };
  handleClose = flag => {
    this.setState({ open: flag, modalType: 0,mode:"" });
  };
  renderTitle = () => {
    const { modalType } = this.state;
    switch (modalType) {
      case 1:
        return <div>Medium</div>;
      case 2:
        return <div>Religions</div>;
      case 3:
        return <div>Caste</div>;
      case 4:
        return <div>Categories</div>;
      case 5:
        return <div>Class</div>;
      case 6:
        return <div>Section</div>;
      case 7:
        return <div>Subject Type</div>;
      case 8:
        return <div>Subject</div>;
      default:
        return <div />;
    }
  };
 

  onChange = (e, type) => {
    console.log('tye value', type)
        let generalEntries = Object.assign({}, this.props.generalEntries, {
          [type]: Object.assign({}, this.props.generalEntries[type], {
            [e.target.name]:
            e.target.name !== "isPrimary" ? e.target.value : e.target.checked
    
          })
        });
        console.log(' onChange ge', generalEntries)
        this.props.autoSyncData(generalEntries);
      };

  renderBody = () => {
    const { modalType, generalEntries } = this.state;
    const { classes } = this.props;
    const {
      medium,
      religion,
      caste,
      category,
      class: dbClass,
      section,
      subjectType,
      subject
    } = generalEntries;
    switch (modalType) {
      case 1: {
        const { mediumName } = medium;
        return (
          <TextField
            required
            id="idName"
            label="Medium Name"
            placeholder="Medium Name"
            margin="normal"
            variant="outlined"
            name="mediumName"
            value={mediumName}
            onChange={e => this.onChange(e, "medium")}
            
          />
        );
      }
      case 2: {
        const { religionName } = religion;
        return (
          <TextField
            required
            id="idName"
            label="Religion Name"
            placeholder="Religion Name"
            margin="normal"
            variant="outlined"
            name="religionName"
            value={religionName}
            onChange={e => this.onChange(e, "religion")}
          />
        );
      }
      case 3: {
        const { casteName } = caste;
        return (
          <TextField
            required
            id="idName"
            label="Caste Name"
            placeholder="Caste Name"
            margin="normal"
            variant="outlined"
            name="casteName"
            value={casteName}
            onChange={e => this.onChange(e, "caste")}
          />
        );
      }
      case 4: {
        const { categoryName } = category;
        return (
          <TextField
            required
            id="idName"
            label="Category Name"
            placeholder="Category Name"
            margin="normal"
            variant="outlined"
            name="categoryName"
            value={categoryName}
            onChange={e => this.onChange(e, "category")}
          />
        );
      }
      case 5: {
        const { className, description, isPrimary } = dbClass;
        return (
          <Fragment>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                required
                id="idName"
                label="Class Name"
                placeholder="Class Name"
                margin="normal"
                variant="outlined"
                name="className"
                value={className}
                onChange={e => this.onChange(e, "class")}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                multiline
                id="idClassDescription"
                label="Description"
                placeholder="Description"
                margin="normal"
                variant="outlined"
                name="description"
                value={description}
                onChange={e => this.onChange(e, "class")}
              />
            </GridItem>
            <FormControlLabel
              style={{ float: "right" }}
              control={
                <Switch
                  checked={isPrimary}
                  value={isPrimary}
                  classes={classes.switchStyle}
                />
              }
              name="isPrimary"
              classes={classes.switchLabel}
              label="Is Primary"
              onChange={e => this.onChange(e, "class")}
            />
          </Fragment>
        );
      }
      case 6: {
        const { sectionName } = section;
        return (
          <TextField
            required
            id="idName"
            label="Section Name"
            placeholder="Section Name"
            margin="normal"
            variant="outlined"
            name="sectionName"
            value={sectionName}
            onChange={e => this.onChange(e, "section")}
          />
        );
      }
      case 7: {
        const { subjectTypeName } = subjectType;
        return (
          <TextField
            required
            id="idName"
            label="Subject Type Name"
            placeholder="Subject Type Name"
            margin="normal"
            variant="outlined"
            name="subjectTypeName"
            value={subjectTypeName}
            onChange={e => this.onChange(e, "subjectType")}
          />
        );
      }
      case 8: {
        const { subjectCode, subjectName, idSubjectType, idMedium } = subject;
        return (
          <Fragment>
            <GridItem xs={12} sm={12} md={12} style={{ display: "flex" }}>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    name="idMedium"
                    value={idMedium}
                    inputProps={{
                      name: "idMedium",
                      id: "idMedium"
                    }}
                    onChange={e => this.onChange(e, "subject")}
                  >
                    <MenuItem disabled classes={classes.menuItem} value={-1}>
                      Choose Medium Type
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value={1}>
                      English
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl fullWidth className={classes.menuFormControl}>
                  <Select
                    MenuProps={classes.menuProps}
                    classes={classes.menuClass}
                    name="idSubjectType"
                    value={idSubjectType}
                    inputProps={{
                      name: "idSubjectType",
                      id: "idSubjectType"
                    }}
                    onChange={e => this.onChange(e, "subject")}
                  >
                    <MenuItem disabled classes={classes.menuItem} value={-1}>
                      Choose Subject Type
                    </MenuItem>
                    <MenuItem classes={classes.menuItem} value={1}>
                      First Language
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} style={{ display: "flex" }}>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  id="idSubjectCode"
                  label="Subject Code"
                  placeholder="Subject Code"
                  margin="normal"
                  variant="outlined"
                  name="subjectCode"
                  value={subjectCode}
                  onChange={e => this.onChange(e, "subject")}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  id="idSubjectName"
                  label="Subject Name"
                  placeholder="Subject Name"
                  margin="normal"
                  variant="outlined"
                  name="subjectName"
                  value={subjectName}
                  onChange={e => this.onChange(e, "subject")}
                />
              </GridItem>
            </GridItem>
          </Fragment>
        );
      }
      default:
        return null;
    }
  };
  handleSave = () => {
    const { modalType, mode } = this.state;
    console.log(' handle save GE ', modalType)
    console.log("this.props.generalEntries", this.props.generalEntries);
    const {
      medium,
      religion,
      caste,
      category,
      class: dbClass,
      section,
      subjectType,
      subject
    } = this.props.generalEntries;
    let data = null;
    switch (modalType) {
      case 1:
        data = medium;
        break;
      case 2:
        data = religion;
        break;
      case 3:
        data = caste;
        break;
      case 4:
        data = category;
        break;
      case 5:
        data = dbClass;
        break;
      case 6:
        data = section;
        break;
      case 7:
        data = subjectType;
        break;
      case 8:
        data = subject;
        break;
      default:
        data = null;
        break;
    }

    this.props
    .postGeneralEntryDetails(data, modalType, mode)
    .then(() => {
        this.handleClose(false)
        this.props.getAllGeneralentries()
     
    })
    .catch(error => {
      this.handleClose(false)
      console.log("error com", error);
    });
    

  };
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info" icon>
          <CardIcon color="info" className={classes.infoCard}>
            <i className="fas fa-pen-fancy" /> <Header>Settings</Header>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <GridItem xs={12} sm={12} md={12}>
            {open && (
              <SDialog
                open={open}
                title={this.renderTitle()}
                body={this.renderBody()}
                actions={
                  <Fragment>
                    <Button
                      onClick={() => this.handleClose(false)}
                      color="danger"
                    >
                      Close
                    </Button>
                    <Button onClick={() => this.handleSave()} color="info">
                      Save
                    </Button>
                  </Fragment>
                }
                handleClose={flag => this.handleClose(flag)}
              />
            )}
            <CustomNavPills
              color="info"
              vertical={{
                tabsGrid: { xs: 12, sm: 12, md: 12 },
                contentGrid: { xs: 12, sm: 12, md: 12 }
              }}
              onTabChange={this.onTabChange}
              tabs={[
                {
                  tabButton: "Medium",
                  tabIcon: Language,
                  tabContent: this.renderMedium()
                },
                {
                  tabButton: "Religions",
                  tabIcon: Grain,
                  tabContent: this.renderReligions()
                },
                {
                  tabButton: "Caste",
                  tabIcon: AcUnit,
                  tabContent: this.renderCaste()
                },
                {
                  tabButton: "Categories",
                  tabIcon: Category,
                  tabContent: this.renderCategories()
                },
                {
                  tabButton: "Class",
                  tabIcon: Class,
                  tabContent: this.renderClass()
                },
                {
                  tabButton: "Section",
                  tabIcon: Dashboard,
                  tabContent: this.renderSection()
                },
                {
                  tabButton: "Subject",
                  tabIcon: Book,
                  tabContent: this.renderSubjectLayout()
                }
              ]}
            />
          </GridItem>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    generalEntries: state.generalEntries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postData: bindActionCreators(postData, dispatch),
    getData: bindActionCreators(getData, dispatch),
    postAPIData: bindActionCreators(postAPIData, dispatch),
    autoSyncData: bindActionCreators(autoSyncData, dispatch),
    postGeneralEntryDetails: bindActionCreators(postGeneralEntryDetails, dispatch),
    getAllGeneralentries: bindActionCreators(getAllGeneralentries, dispatch),
    getGeneralEntryById: bindActionCreators(getGeneralEntryById, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(GeneralEntries));
