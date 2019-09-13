import GridItem from "./material-ui/components/Grid/GridItem.jsx";
/* other */
import styled from "styled-components";

import {
  primaryColor,
  grayColor,
  blackColor,
  whiteColor,
  hexToRgb
} from "../../assets/jss/material-dashboard-pro-react";

export const Row = styled(GridItem)`
  display: flex;
  width: 100%;
  & > div {
    width: 100%;
  }
`;

export const checkBoxAndDDLStyles = {
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
  },
  menuItem: {
    root: {
      fontSize: "13px",
      padding: "10px 20px",
      borderRadius: "2px",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      lineHeight: "2",
      whiteSpace: "nowrap",
      color: grayColor[7],
      paddingRight: "30px",
    },
    selected: {
      color: blackColor
    }
  },
  menuFormControl: {
    color: blackColor,
    margin: "7px 0 17px 0 !important",
    border: `1px solid rgba(0, 0, 0, 0.23) !important`,
    borderRadius: "5px",
    "& > div": {
      color: `${blackColor} !important`,
      margin: "0px 5px",
      "&::before": {
        border: "none !important"
      },
      "&::after": {
        border: "none !important"
      }
    }
  },
  menuProps: {
    className: {
      "& > div > ul": {
        border: "0",
        padding: "5px 0",
        margin: "0",
        boxShadow: "none",
        minWidth: "100%",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "block",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: whiteColor,
        backgroundClip: "padding-box"
      },
      "& $selectPaper $selectMenuItemSelectedMultiple": {
        backgroundColor: "inherit"
      },
      "& > div + div": {
        maxHeight: "266px !important"
      }
    }
  },
  menuClass: {
    select: {
      padding: "12px 0 7px",
      fontSize: ".75rem",
      fontWeight: "400",
      lineHeight: "1.42857",
      textDecoration: "none",
      textTransform: "uppercase",
      color: grayColor[2],
      letterSpacing: "0",
      "&:focus": {
        backgroundColor: "transparent"
      },
      "&[aria-owns] + input + svg": {
        transform: "rotate(180deg)"
      },
      "& + input + svg": {
        transition: "all 300ms linear"
      }
    }
  }
};

export const switchStyle = {
  switchBase: {
    color: primaryColor[0] + "!important"
  },
  checked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + hexToRgb(primaryColor[0]) + ", 1) !important"
    }
  },
  icon: {
    boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
    color: whiteColor + " !important",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    transform: "translateX(-4px)!important"
  },
  iconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important"
  },
  bar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + hexToRgb(grayColor[18]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  }
};

export const Header = styled.div`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  padding: 2px;
  margin: 2px;
`;
