import React, { PureComponent } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
class STable extends PureComponent {
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "transparent",
            padding: "5px 40px 5px 16px"
          }
        },
        MuiTableSortLabel: {
          icon: {
            backgroundColor: "#00acc1 !important",
            color: "#fff !important"
          }
        },
        MUIDataTableHeadCell: {
          root: {
            backgroundColor: "#00acc1 !important",
            color: "#fff !important"
          },
          data: {
            backgroundColor: "#00acc1 !important",
            color: "#fff !important",
            fontSize: "1.07em"
          }
        },
        MUIDataTableToolbar: {
          icon: {
            color: "#00acc1 !important"
          }
        },
        MUIDataTableHeadRow: {
          root: {
            border: "2px solid #00acc1 !important"
          }
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: "#00acc1 !important",
            color: "#fff !important"
          }
        }
      }
    });
  render() {
    const { title, data, columns, options, expandableRows } = this.props;
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={data}
          columns={columns}
          options={options}
          expandableRows={expandableRows}
        />
      </MuiThemeProvider>
    );
  }
}

export default STable;
