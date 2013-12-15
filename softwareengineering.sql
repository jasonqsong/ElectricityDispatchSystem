-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2013 年 12 月 15 日 05:09
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `softwareengineering`
--
CREATE DATABASE IF NOT EXISTS `softwareengineering` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `softwareengineering`;

-- --------------------------------------------------------

--
-- 表的结构 `config_line_information`
--

CREATE TABLE IF NOT EXISTS `config_line_information` (
  `ID` int(11) NOT NULL,
  `line_name` text CHARACTER SET utf8 NOT NULL,
  `start_station_ID` text CHARACTER SET utf8 NOT NULL,
  `end_station_ID` text CHARACTER SET utf8 NOT NULL,
  `voltage_level` int(11) NOT NULL,
  `rated_current` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `config_station_information`
--

CREATE TABLE IF NOT EXISTS `config_station_information` (
  `ID` int(11) NOT NULL,
  `station_name` text CHARACTER SET utf8 NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `builded_time` int(11) NOT NULL,
  `voltage_level` int(11) NOT NULL,
  `installed_capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `log_user`
--

CREATE TABLE IF NOT EXISTS `log_user` (
  `ID` int(11) NOT NULL,
  `login_time` int(11) NOT NULL,
  `logout_time` int(11) NOT NULL,
  `user_ID` int(11) NOT NULL,
  `operation_list` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `runtime_accident`
--

CREATE TABLE IF NOT EXISTS `runtime_accident` (
  `ID` int(11) NOT NULL,
  `breakdown_type` text CHARACTER SET utf8 NOT NULL,
  `timestamp` int(11) NOT NULL,
  `breakdown_information` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `runtime_line_data`
--

CREATE TABLE IF NOT EXISTS `runtime_line_data` (
  `ID` int(11) NOT NULL,
  `line_ID` int(11) NOT NULL,
  `load` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `runtime_repair`
--

CREATE TABLE IF NOT EXISTS `runtime_repair` (
  `ID` int(11) NOT NULL,
  `breakdown_ID` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `isSolve` tinyint(1) NOT NULL,
  `solution_method` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `runtime_station_data`
--

CREATE TABLE IF NOT EXISTS `runtime_station_data` (
  `ID` int(11) NOT NULL,
  `station_ID` int(11) NOT NULL,
  `active_power` int(11) NOT NULL,
  `reactive_power` int(11) NOT NULL,
  `time_stamp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;