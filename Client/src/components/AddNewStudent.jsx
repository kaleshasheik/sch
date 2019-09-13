/* react */
import React, { PureComponent } from "react";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";
/* custom core */
import Wizard from "./core-libs/material-ui/components/Wizard/Wizard.jsx";
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer.jsx";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem.jsx";
import { checkBoxAndDDLStyles } from "./core-libs/Utils";

/* custom components */
import StudentPersonalDetails from "./student/StudentPersonalDetails";
import StudentPrevInstitutionDetails from "./student/StudentPrevInstitutionDetails";
import StudentPreAdmissionDetails from "./student/StudentPreAdmissionDetails";
import StudentAdmissionDetails from "./student/StudentAdmissionDetails";

const styles = {
  ...checkBoxAndDDLStyles
};
class AddNewStudent extends PureComponent {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Personal Details",
                stepComponent: StudentPersonalDetails,
                stepId: "personalDetails"
              },
              {
                stepName: "Pre Admission Details",
                stepComponent: StudentPreAdmissionDetails,
                stepId: "preAdmissionDetails"
              },
              {
                stepName: "Previous Institution Details",
                stepComponent: StudentPrevInstitutionDetails,
                stepId: "prevInstitutionDetails"
              },
              {
                stepName: "Admission Details",
                stepComponent: StudentAdmissionDetails,
                stepId: "studentAdmissionDetails"
              }
            ]}
            title={`Student Profile`}
            subtitle=""
            finishButtonClick={e => console.log('finish',e)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(AddNewStudent);
