/* react */
import React, { Fragment, PureComponent } from "react";
/* other */
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar
} from "recharts";

// core components
import GridContainer from "./core-libs/material-ui/components/Grid/GridContainer";
import GridItem from "./core-libs/material-ui/components/Grid/GridItem";
import Card from "./core-libs/material-ui/components/Card/Card";
import CardHeader from "./core-libs/material-ui/components/Card/CardHeader";
import CardIcon from "./core-libs/material-ui/components/Card/CardIcon";
import CardFooter from "./core-libs/material-ui/components/Card/CardFooter";

/* material core */
import withStyles from "@material-ui/core/styles/withStyles";

/* material icons */
import dashboardStyle from "../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
const styles = {
  ...dashboardStyle
};
const piedata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const data = [
  {
    year: "2019-20",
    Student: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    year: "2018-19",
    Student: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    year: "2017-18",
    Student: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    year: "2015-16",
    Student: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    year: "2014-15",
    Student: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    year: "2013-14",
    Student: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    year: "2012-13",
    Student: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    year: "2011-12",
    Student: 3490,
    pv: 4300,
    amt: 2100
  }
];
const radialdata = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed"
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d"
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c"
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57"
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658"
  }
];

const radialstyle = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};
class MainPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <i className="fas fa-user-graduate" />
                </CardIcon>
                <p className={classes.cardCategory}>Average Candidates</p>
                <h3 className={classes.cardTitle}>49</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <i className="fas fa-eye" />
                  <a href="#" onClick={e => e.preventDefault()}>
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <i className="fas fa-medal" />
                </CardIcon>
                <p className={classes.cardCategory}>Class Toppers</p>
                <h3 className={classes.cardTitle}>200</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <i className="fas fa-eye" />
                  <a href="#" onClick={e => e.preventDefault()}>
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <i className="fas fa-user-slash" />
                </CardIcon>
                <p className={classes.cardCategory}>Failed Candidates</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <i className="fas fa-eye" />
                  <a href="#" onClick={e => e.preventDefault()}>
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12} lg={12}>
            <BarChart
              width={1000}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Student" fill="#1ab7ea" />
            </BarChart>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <PieChart width={400} height={400}>
              <Pie
                data={piedata}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {piedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <RadialBarChart
              width={500}
              height={300}
              cx={150}
              cy={150}
              innerRadius={20}
              outerRadius={140}
              barSize={10}
              data={radialdata}
            >
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={radialstyle}
              />
            </RadialBarChart>
          </GridItem>
        </GridContainer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainPage);
