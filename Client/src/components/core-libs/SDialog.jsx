import React, { PureComponent } from "react";
import Close from "@material-ui/icons/Close";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Button from "./material-ui/components/CustomButtons/Button";
import notificationsStyle from "../../assets/jss/material-dashboard-pro-react/views/notificationsStyle";

const CustomDialog = styled(Dialog)`
  & > div:nth-child(3) {
    div: nth-child(1) {
      width: 100%;
      max-width: 800px !important;
      & > h6 {
        color: #00acc1;
      }
    }
  }
`;

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SDialog extends PureComponent {
  handleClose = () => {
    this.props.handleClose(false);
  };
  render() {
    const { classes, title, body, actions, open } = this.props;
    return (
      <CustomDialog
        classes={{
          root: classes.center + " " + classes.modalRoot,
          paper: classes.modal
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.handleClose()}
      >
        <DialogTitle
          id="idModalTitle"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            justIcon
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={() => this.handleClose()}
          >
            <Close className={classes.modalClose} />
          </Button>
          <h6
            className={classes.modalTitle}
            style={{ float: "left", textTransform: "capitalize" }}
          >
            {title}
          </h6>
        </DialogTitle>
        <Divider />
        <DialogContent id="idModalBody" className={classes.modalBody}>
          {body}
        </DialogContent>
        <Divider />
        <DialogActions className={classes.modalFooter}>{actions}</DialogActions>
      </CustomDialog>
    );
  }
}

export default withStyles(notificationsStyle)(SDialog);
