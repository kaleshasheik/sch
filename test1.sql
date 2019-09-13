-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 13, 2019 at 04:22 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblacademicyear`
--

DROP TABLE IF EXISTS `tblacademicyear`;
CREATE TABLE IF NOT EXISTS `tblacademicyear` (
  `idAcademicYear` int(5) NOT NULL AUTO_INCREMENT,
  `academicYearName` varchar(50) NOT NULL,
  `ledgerNumber` int(11) NOT NULL,
  `from` varchar(120) NOT NULL,
  `to` varchar(120) NOT NULL,
  PRIMARY KEY (`idAcademicYear`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblacademicyear`
--

INSERT INTO `tblacademicyear` (`idAcademicYear`, `academicYearName`, `ledgerNumber`, `from`, `to`) VALUES
(1, '2018u', 102, '2019-09-05T18:30:00.000Z', '2019-09-12T18:30:00.000Z'),
(2, '2019', 101, '2019-09-04T18:30:00.000Z', '2019-09-06T18:30:00.000Z');

-- --------------------------------------------------------

--
-- Table structure for table `tblcaste`
--

DROP TABLE IF EXISTS `tblcaste`;
CREATE TABLE IF NOT EXISTS `tblcaste` (
  `idCaste` int(5) NOT NULL AUTO_INCREMENT,
  `casteName` varchar(45) NOT NULL,
  PRIMARY KEY (`idCaste`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcaste`
--

INSERT INTO `tblcaste` (`idCaste`, `casteName`) VALUES
(1, 'caste');

-- --------------------------------------------------------

--
-- Table structure for table `tblcategories`
--

DROP TABLE IF EXISTS `tblcategories`;
CREATE TABLE IF NOT EXISTS `tblcategories` (
  `idCategory` int(5) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcategories`
--

INSERT INTO `tblcategories` (`idCategory`, `categoryName`) VALUES
(1, 'category');

-- --------------------------------------------------------

--
-- Table structure for table `tblclass`
--

DROP TABLE IF EXISTS `tblclass`;
CREATE TABLE IF NOT EXISTS `tblclass` (
  `idClass` int(5) NOT NULL AUTO_INCREMENT,
  `className` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `isPrimary` int(5) NOT NULL,
  PRIMARY KEY (`idClass`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblclass`
--

INSERT INTO `tblclass` (`idClass`, `className`, `description`, `isPrimary`) VALUES
(1, 'class name', 'class desc', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblclasssectionstaffmapping`
--

DROP TABLE IF EXISTS `tblclasssectionstaffmapping`;
CREATE TABLE IF NOT EXISTS `tblclasssectionstaffmapping` (
  `idCSSM` int(5) NOT NULL AUTO_INCREMENT,
  `idClass` int(5) NOT NULL,
  `idSection` int(5) NOT NULL,
  `idStaff` int(5) NOT NULL,
  PRIMARY KEY (`idCSSM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblclasssubjectsmapping`
--

DROP TABLE IF EXISTS `tblclasssubjectsmapping`;
CREATE TABLE IF NOT EXISTS `tblclasssubjectsmapping` (
  `idCSM` int(5) NOT NULL AUTO_INCREMENT,
  `idCSSM` varchar(5) NOT NULL,
  `idSubject` varchar(5) NOT NULL,
  PRIMARY KEY (`idCSM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblgenerallledgerentries`
--

DROP TABLE IF EXISTS `tblgenerallledgerentries`;
CREATE TABLE IF NOT EXISTS `tblgenerallledgerentries` (
  `idEntry` int(20) NOT NULL AUTO_INCREMENT,
  `idLedger` int(11) NOT NULL,
  `particulars` varchar(200) NOT NULL,
  `transactionDate` date NOT NULL,
  `paymentType` int(11) NOT NULL,
  `debit` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  PRIMARY KEY (`idEntry`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblgenerallledgers`
--

DROP TABLE IF EXISTS `tblgenerallledgers`;
CREATE TABLE IF NOT EXISTS `tblgenerallledgers` (
  `idLedger` int(11) NOT NULL AUTO_INCREMENT,
  `ledgerName` varchar(100) NOT NULL,
  `idLedgerType` int(11) NOT NULL,
  PRIMARY KEY (`idLedger`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblinternaldetails`
--

DROP TABLE IF EXISTS `tblinternaldetails`;
CREATE TABLE IF NOT EXISTS `tblinternaldetails` (
  `idStudent` int(11) NOT NULL,
  `idSubject` int(11) NOT NULL,
  `internal` int(11) NOT NULL,
  `classesHeld` int(11) NOT NULL,
  `classesAttended` int(11) NOT NULL,
  `passingMarks` int(11) NOT NULL,
  `maximumMarks` int(11) NOT NULL,
  `marksObtained` int(11) NOT NULL,
  `totalMarks` int(11) NOT NULL,
  `result` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblledgertypes`
--

DROP TABLE IF EXISTS `tblledgertypes`;
CREATE TABLE IF NOT EXISTS `tblledgertypes` (
  `idLedgerType` int(11) NOT NULL AUTO_INCREMENT,
  `ledgerTypeName` varchar(50) NOT NULL,
  PRIMARY KEY (`idLedgerType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblmedium`
--

DROP TABLE IF EXISTS `tblmedium`;
CREATE TABLE IF NOT EXISTS `tblmedium` (
  `idMedium` int(5) NOT NULL AUTO_INCREMENT,
  `mediumName` varchar(45) NOT NULL,
  PRIMARY KEY (`idMedium`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblmedium`
--

INSERT INTO `tblmedium` (`idMedium`, `mediumName`) VALUES
(1, 'telugu');

-- --------------------------------------------------------

--
-- Table structure for table `tblpaymentmode`
--

DROP TABLE IF EXISTS `tblpaymentmode`;
CREATE TABLE IF NOT EXISTS `tblpaymentmode` (
  `idPaymentMode` int(5) NOT NULL AUTO_INCREMENT,
  `paymentMethod` varchar(20) NOT NULL,
  `paymentDetails` varchar(20) NOT NULL,
  PRIMARY KEY (`idPaymentMode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpreviousinstitutiondetails`
--

DROP TABLE IF EXISTS `tblpreviousinstitutiondetails`;
CREATE TABLE IF NOT EXISTS `tblpreviousinstitutiondetails` (
  `idpreviousInstitution` int(5) NOT NULL AUTO_INCREMENT,
  `institutionName` varchar(100) NOT NULL,
  `institutionAddress` varchar(200) NOT NULL,
  `isExamPassed` int(5) NOT NULL,
  `registerNumber` varchar(20) DEFAULT NULL,
  `yearOfPassing` varchar(10) NOT NULL,
  `idStudent` int(5) NOT NULL,
  PRIMARY KEY (`idpreviousInstitution`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblreceipttypes`
--

DROP TABLE IF EXISTS `tblreceipttypes`;
CREATE TABLE IF NOT EXISTS `tblreceipttypes` (
  `idReceipt` int(5) NOT NULL AUTO_INCREMENT,
  `receiptName` varchar(20) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`idReceipt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblreligion`
--

DROP TABLE IF EXISTS `tblreligion`;
CREATE TABLE IF NOT EXISTS `tblreligion` (
  `idReligion` int(5) NOT NULL AUTO_INCREMENT,
  `religionName` varchar(45) NOT NULL,
  PRIMARY KEY (`idReligion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblreligion`
--

INSERT INTO `tblreligion` (`idReligion`, `religionName`) VALUES
(1, 'muslim');

-- --------------------------------------------------------

--
-- Table structure for table `tblsection`
--

DROP TABLE IF EXISTS `tblsection`;
CREATE TABLE IF NOT EXISTS `tblsection` (
  `idSection` int(5) NOT NULL AUTO_INCREMENT,
  `sectionName` varchar(45) NOT NULL,
  PRIMARY KEY (`idSection`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsection`
--

INSERT INTO `tblsection` (`idSection`, `sectionName`) VALUES
(1, 'section ');

-- --------------------------------------------------------

--
-- Table structure for table `tblstaffattendencedetails`
--

DROP TABLE IF EXISTS `tblstaffattendencedetails`;
CREATE TABLE IF NOT EXISTS `tblstaffattendencedetails` (
  `idSAD` int(5) NOT NULL AUTO_INCREMENT,
  `idStaff` varchar(5) NOT NULL,
  `day` int(5) NOT NULL,
  `month` varchar(10) NOT NULL,
  `year` int(5) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`idSAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstaffclasssubjectmapping`
--

DROP TABLE IF EXISTS `tblstaffclasssubjectmapping`;
CREATE TABLE IF NOT EXISTS `tblstaffclasssubjectmapping` (
  `idSCSM` int(5) NOT NULL AUTO_INCREMENT,
  `idStaff` int(5) NOT NULL,
  `idClass` int(5) NOT NULL,
  `idSubject` int(5) NOT NULL,
  PRIMARY KEY (`idSCSM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstaffdetails`
--

DROP TABLE IF EXISTS `tblstaffdetails`;
CREATE TABLE IF NOT EXISTS `tblstaffdetails` (
  `idStaff` int(5) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `adhaarNumber` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `permanent_address` varchar(200) NOT NULL,
  `correspondance_address` varchar(200) NOT NULL,
  `nationality` varchar(20) NOT NULL,
  `dob` varchar(120) NOT NULL,
  `idUser` int(5) NOT NULL,
  PRIMARY KEY (`idStaff`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblstaffdetails`
--

INSERT INTO `tblstaffdetails` (`idStaff`, `firstName`, `lastName`, `adhaarNumber`, `gender`, `permanent_address`, `correspondance_address`, `nationality`, `dob`, `idUser`) VALUES
(10, 'first3', 'last3', '3333', 'Female', 'per3', 'corr3', 'XYZ', '2019-09-04T18:30:00.000Z', 24);

-- --------------------------------------------------------

--
-- Table structure for table `tblstaffledgerentrymapping`
--

DROP TABLE IF EXISTS `tblstaffledgerentrymapping`;
CREATE TABLE IF NOT EXISTS `tblstaffledgerentrymapping` (
  `idStaffLedgerEntry` int(11) NOT NULL AUTO_INCREMENT,
  `idEntry` int(11) NOT NULL,
  `idStaffPayment` int(11) NOT NULL,
  PRIMARY KEY (`idStaffLedgerEntry`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstaffpaymentdetails`
--

DROP TABLE IF EXISTS `tblstaffpaymentdetails`;
CREATE TABLE IF NOT EXISTS `tblstaffpaymentdetails` (
  `idStaffPayment` int(5) NOT NULL AUTO_INCREMENT,
  `ta` varchar(20) NOT NULL,
  `da` varchar(20) NOT NULL,
  `hra` varchar(20) NOT NULL,
  `basic` varchar(20) NOT NULL,
  `specialAllowances` varchar(20) NOT NULL,
  `total` varchar(20) NOT NULL,
  `idStaff` int(5) NOT NULL,
  PRIMARY KEY (`idStaffPayment`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentadmissiondetails`
--

DROP TABLE IF EXISTS `tblstudentadmissiondetails`;
CREATE TABLE IF NOT EXISTS `tblstudentadmissiondetails` (
  `idSAD` int(5) NOT NULL AUTO_INCREMENT,
  `idStudent` int(5) NOT NULL,
  `idSPAD` int(5) NOT NULL,
  `registrationNumber` varchar(20) DEFAULT NULL,
  `rollNumber` varchar(20) DEFAULT NULL,
  `admissionDateTime` varchar(20) NOT NULL,
  `feeConcision` varchar(20) NOT NULL,
  `remainingAmount` varchar(10) NOT NULL,
  `totalAmount` varchar(10) NOT NULL,
  `idAcademicYear` int(5) DEFAULT NULL,
  `idCSM` int(5) DEFAULT NULL,
  `idStudentPayment` int(5) DEFAULT NULL,
  `idUser` int(5) DEFAULT NULL,
  `idPrevInstitution` int(5) DEFAULT NULL,
  `idSSM` int(5) DEFAULT NULL,
  PRIMARY KEY (`idSAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentattendencedetails`
--

DROP TABLE IF EXISTS `tblstudentattendencedetails`;
CREATE TABLE IF NOT EXISTS `tblstudentattendencedetails` (
  `idSAD` int(5) NOT NULL AUTO_INCREMENT,
  `idStudent` varchar(5) NOT NULL,
  `day` int(5) NOT NULL,
  `month` varchar(10) NOT NULL,
  `year` int(5) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`idSAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentexamination`
--

DROP TABLE IF EXISTS `tblstudentexamination`;
CREATE TABLE IF NOT EXISTS `tblstudentexamination` (
  `idStudentExamination` int(11) NOT NULL AUTO_INCREMENT,
  `idStudent` varchar(100) NOT NULL,
  `idCSM` int(11) NOT NULL,
  `idTestType` int(11) NOT NULL,
  PRIMARY KEY (`idStudentExamination`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentledgerentrymapping`
--

DROP TABLE IF EXISTS `tblstudentledgerentrymapping`;
CREATE TABLE IF NOT EXISTS `tblstudentledgerentrymapping` (
  `idStudentLedgerEntry` int(11) NOT NULL AUTO_INCREMENT,
  `idEntry` int(11) NOT NULL,
  `idStudentPayment` int(11) NOT NULL,
  PRIMARY KEY (`idStudentLedgerEntry`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentpaymentdetails`
--

DROP TABLE IF EXISTS `tblstudentpaymentdetails`;
CREATE TABLE IF NOT EXISTS `tblstudentpaymentdetails` (
  `idStudentPayment` int(5) NOT NULL AUTO_INCREMENT,
  `idReceipt` varchar(20) NOT NULL,
  `paymentDateTime` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `receiptNumber` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idStudentPayment`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentpersoneldetails`
--

DROP TABLE IF EXISTS `tblstudentpersoneldetails`;
CREATE TABLE IF NOT EXISTS `tblstudentpersoneldetails` (
  `idStudent` int(5) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `adhaarNumber` varchar(20) NOT NULL,
  `gender` varchar(5) NOT NULL,
  `fatherGuardianOccupation` varchar(25) NOT NULL,
  `fatherGuardianIncome` varchar(25) NOT NULL,
  `permanent_address` varchar(200) NOT NULL,
  `correspondance_address` varchar(200) NOT NULL,
  `nationality` varchar(20) NOT NULL,
  `isIncomeGroup` int(5) NOT NULL,
  `birthPlace` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `isMinority` int(5) NOT NULL,
  `isBlind` int(5) NOT NULL,
  `isPH` int(5) NOT NULL,
  `isBPL` int(5) NOT NULL,
  `idParentUser` int(5) NOT NULL,
  `idReligion` int(5) NOT NULL,
  `idCaste` int(5) NOT NULL,
  `idCategory` int(5) NOT NULL,
  PRIMARY KEY (`idStudent`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentpreadmissiondetails`
--

DROP TABLE IF EXISTS `tblstudentpreadmissiondetails`;
CREATE TABLE IF NOT EXISTS `tblstudentpreadmissiondetails` (
  `idSPAD` int(5) NOT NULL AUTO_INCREMENT,
  `idStudent` int(5) NOT NULL,
  `idAcademicYear` int(5) NOT NULL,
  `totalFeeToBePaid` varchar(20) NOT NULL,
  `initialAmountPaid` varchar(20) NOT NULL,
  `applicationNumber` varchar(20) NOT NULL,
  `registrationDate` varchar(20) NOT NULL,
  `willingForClassId` varchar(10) NOT NULL,
  `prevClassId` int(5) NOT NULL,
  `admissionstatus` varchar(20) NOT NULL,
  PRIMARY KEY (`idSPAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblstudentsubjectsmapping`
--

DROP TABLE IF EXISTS `tblstudentsubjectsmapping`;
CREATE TABLE IF NOT EXISTS `tblstudentsubjectsmapping` (
  `idSSM` int(5) NOT NULL AUTO_INCREMENT,
  `idStudent` varchar(5) NOT NULL,
  `idCSM` varchar(5) NOT NULL,
  PRIMARY KEY (`idSSM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblsubjects`
--

DROP TABLE IF EXISTS `tblsubjects`;
CREATE TABLE IF NOT EXISTS `tblsubjects` (
  `idSubject` int(5) NOT NULL AUTO_INCREMENT,
  `subjectCode` varchar(20) NOT NULL,
  `subjectName` varchar(20) NOT NULL,
  `idSubjectType` int(5) NOT NULL,
  `idMedium` int(5) NOT NULL,
  PRIMARY KEY (`idSubject`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsubjects`
--

INSERT INTO `tblsubjects` (`idSubject`, `subjectCode`, `subjectName`, `idSubjectType`, `idMedium`) VALUES
(1, 'sub code1', 'sub name 1', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblsubjecttype`
--

DROP TABLE IF EXISTS `tblsubjecttype`;
CREATE TABLE IF NOT EXISTS `tblsubjecttype` (
  `idSubjectType` int(5) NOT NULL AUTO_INCREMENT,
  `subjectTypeName` varchar(20) NOT NULL,
  PRIMARY KEY (`idSubjectType`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsubjecttype`
--

INSERT INTO `tblsubjecttype` (`idSubjectType`, `subjectTypeName`) VALUES
(1, 'sub type  '),
(2, 'sub type  '),
(3, 'sub type1'),
(4, 'sub type2');

-- --------------------------------------------------------

--
-- Table structure for table `tbltestsujectclassscorerange`
--

DROP TABLE IF EXISTS `tbltestsujectclassscorerange`;
CREATE TABLE IF NOT EXISTS `tbltestsujectclassscorerange` (
  `idTSCSR` int(5) NOT NULL AUTO_INCREMENT,
  `idTestType` int(5) NOT NULL,
  `idSubject` int(5) NOT NULL,
  `min_marks` varchar(10) NOT NULL,
  `max_marks` varchar(10) NOT NULL,
  PRIMARY KEY (`idTSCSR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbltesttypes`
--

DROP TABLE IF EXISTS `tbltesttypes`;
CREATE TABLE IF NOT EXISTS `tbltesttypes` (
  `idTestType` int(5) NOT NULL AUTO_INCREMENT,
  `testName` varchar(20) NOT NULL,
  `percentageConsidered` varchar(10) NOT NULL,
  PRIMARY KEY (`idTestType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbluserdetails`
--

DROP TABLE IF EXISTS `tbluserdetails`;
CREATE TABLE IF NOT EXISTS `tbluserdetails` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `emailId` varchar(200) DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  `mobileNumber` varchar(15) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `idUserType` int(5) NOT NULL,
  `profileImage` longblob,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbluserdetails`
--

INSERT INTO `tbluserdetails` (`idUser`, `userName`, `emailId`, `password`, `mobileNumber`, `status`, `idUserType`, `profileImage`) VALUES
(1, 'Raghavendra NK', 'raghavendra.nk7@gmail.com', '12345', '7204260394', 1, 1, NULL),
(2, 'Kalesha Super Man', 'kalesha.nk7@gmail.com', '12345', '8970361988', 1, 1, NULL),
(3, 'user21', 'user2@test.com', '999999999', '78687689', 1, 1, NULL),
(4, 'Rama', 'ram@gmail.com', '12345', '8970361988', 1, 1, NULL),
(5, 'some 244445444545', 'some2@gmail.com', '12345', '8970361988', 1, 1, NULL),
(6, 'some 3', 'SOME3@gmail.com', '12345', '8970361988', 1, 1, NULL),
(7, 'Updated User', 'user@gmail.com', '12345', '8310183920', 1, 1, NULL),
(8, 'kalesha super dev', 'some2@gmail.com', '12345', '8970361988', 1, 1, NULL),
(24, 'first3 last3', NULL, '12345', NULL, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblusertype`
--

DROP TABLE IF EXISTS `tblusertype`;
CREATE TABLE IF NOT EXISTS `tblusertype` (
  `idUserType` int(5) NOT NULL AUTO_INCREMENT,
  `UserType` varchar(45) NOT NULL,
  PRIMARY KEY (`idUserType`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblusertype`
--

INSERT INTO `tblusertype` (`idUserType`, `UserType`) VALUES
(1, 'Admin'),
(2, 'Teaching'),
(3, 'Non-Teaching'),
(4, 'Parent');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
