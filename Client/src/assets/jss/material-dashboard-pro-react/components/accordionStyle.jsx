import {
  primaryColor,
  whiteColor
} from "../../material-dashboard-pro-react.jsx";

const accordionStyle = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  expansionPanel: {
    boxShadow: "none",
    "&:before": {
      display: "none !important"
    }
  },
  expansionPanelExpanded: {
    margin: "0"
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: primaryColor[0],
    margin: "5px 0px",
    borderRadius: "5px",
    color: whiteColor,
    "&:hover": {
      color: whiteColor
    }
  },
  expansionPanelSummaryExpaned: {
    color: whiteColor,

    "& $expansionPanelSummaryExpandIcon": {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      }
    }
  },
  expansionPanelSummaryContent: {
    margin: "0 !important"
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up("md")]: {
      top: "auto !important"
    },
    transform: "rotate(0deg)",
    color: "inherit",
    [theme.breakpoints.down("sm")]: {
      top: "10px !important"
    }
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit"
  },
  expansionPanelDetails: {
    padding: "10px",
    border: `1px solid ${primaryColor[0]}`,
    borderRadius: "5px"
  }
});

export default accordionStyle;
