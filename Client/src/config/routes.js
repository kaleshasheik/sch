import React from "react";
import Dashboard from "../components/Dashboard";
import ManageUser from "../components/ManageUser";
import AcademicYear from "../components/AcademicYear";
import GeneralEntries from "../components/GeneralEntries";
import ManageStaff from "../components/ManageStaff";
import Allocation from "../components/Allocation";
import ManageStudent from "../components/ManageStudent";
import AddNewStudent from "../components/AddNewStudent";
import StaffAttendance from "../components/StaffAttendance";
import StudentAttendance from "../components/StudentAttendance";
import EditProfile from "../components/EditProfile";
import StaffPayment from "../components/StaffPayment";
import StudentFeePayment from "../components/StudentFeePayment";
import ScheduleExamination from "../components/ScheduleExamination";
import AssignMarks from "../components/AssignMarks";
import ViewMarks from "../components/ViewMarks";

/* Icons */

import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import AccountBox from "@material-ui/icons/AccountBox";
import School from "@material-ui/icons/School";
import Face from "@material-ui/icons/Face";
import ImportContacts from "@material-ui/icons/ImportContacts";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "User",
    rtlName: "صفحات",
    icon: Person,
    state: "userCollapse",
    views: [
      {
        path: "/manageUser",
        name: "Manage User Details",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-user-cog" />,
        rtlMini: "ع",
        component: ManageUser,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Staff",
    rtlName: "صفحات",
    icon: Face,
    state: "staffCollapse",
    views: [
      {
        path: "/manageStaff",
        name: "Manage Staff Details",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-chalkboard-teacher" />,
        rtlMini: "ع",
        component: ManageStaff,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Student",
    rtlName: "صفحات",
    icon: School,
    state: "studentCollapse",
    views: [
      {
        path: "/addNewStudent",
        name: "Add New Student",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-user-graduate" />,
        rtlMini: "ع",
        component: AddNewStudent,
        layout: "/admin"
      },
      {
        path: "/manageStudent",
        name: "Manage Student Details",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-user-edit" />,
        rtlMini: "ع",
        component: ManageStudent,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Admin Settings",
    rtlName: "صفحات",
    icon: Settings,
    state: "adminCollapse",
    views: [
      {
        path: "/academic",
        name: "Academic Year",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-calendar-alt" />,
        rtlMini: "ع",
        component: AcademicYear,
        layout: "/admin"
      },
      {
        path: "/generalEntries",
        name: "General Entries",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-pen-fancy" />,
        rtlMini: "ع",
        component: GeneralEntries,
        layout: "/admin"
      },
      {
        path: "/allocation",
        name: "Allocation",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-tasks" />,
        rtlMini: "ع",
        component: Allocation,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Attendance",
    rtlName: "صفحات",
    icon: AccountBox,
    state: "attendanceCollapse",
    views: [
      {
        path: "/staffAttendance",
        name: "Staff",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-chalkboard-teacher" />,
        rtlMini: "ع",
        component: StaffAttendance,
        layout: "/admin"
      },
      {
        path: "/studentAttendance",
        name: "Student",
        rtlName: "عالتسعير",
        mini: <i className="fas fa-user-graduate" />,
        rtlMini: "ع",
        component: StudentAttendance,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Examination",
    rtlName: "صفحات",
    icon: ImportContacts,
    state: "examinationCollapse",
    views: [
      {
        path: "/scheduleExam",
        name: "Schedule Examination",
        rtlName: "",
        mini: <i class="fas fa-tasks" />,
        rtlMini: <i class="fas fa-tasks" />,
        component: ScheduleExamination,
        layout: "/admin"
      },
      {
        path: "/assignMarks",
        name: "Assign Marks",
        rtlName: "",
        mini: <i class="fas fa-marker" />,
        rtlMini: <i class="fas fa-tasks" />,
        component: AssignMarks,
        layout: "/admin"
      },
      {
        path: "/viewMarks",
        name: "View Marks",
        rtlName: "",
        mini: <i class="fas fa-eye" />,
        rtlMini: <i class="fas fa-eye" />,
        component: ViewMarks,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/editProfile",
    name: "Edit Profile",
    rtlName: "لوحة القيادة",
    icon: null,
    component: EditProfile,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/staffPayment",
    name: "Staff Payment",
    rtlName: "لوحة القيادة",
    icon: null,
    component: StaffPayment,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/studentPayment",
    name: "Student Fee Payment",
    rtlName: "لوحة القيادة",
    icon: null,
    component: StudentFeePayment,
    layout: "/admin",
    hidden: true
  }
];

export default dashRoutes;
