/* eslint-disable prettier/prettier */
import {
  cilAddressBook,
  cilBell,
  cilBuilding,
  cilCalculator,
  cilCalendar,
  cilChartLine,
  cilChartPie,
  cilCog,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeLetter,
  cilGrid,
  cilHistory,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSun,
  cilUserX,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'รายงาน',
  },
  {
    component: CNavItem,
    name: 'รายงานรายวัน',
    to: '/employeeInfo',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'รายงานช่วงเวลา',
    to: '/employeeInfo',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'รายงานการลางาน',
    to: '/employeeInfo',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ตั้งค่าพื้นฐาน',
  },
  {
    component: CNavItem,
    name: 'องค์กร / สาขา / แผนก',
    to: '/employeeInfo',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'เงื่อนไขการลา',
    to: '/employeeInfo',
    icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ตารางเวลา',
    to: '/employeeInfo',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ข้อมูลพนักงาน',
    to: '/accordionLayout',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'วันหยุดประจำปี',
    to: '/employeeInfo',
    icon: <CIcon icon={cilSun} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ประกาศ ข่าวสาร',
    to: '/employeeInfo',
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ช่วยเหลือ',
  },
  {
    component: CNavItem,
    name: 'คู่มือเครื่องแสกน',
    to: '/employeeInfo',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'ทดลอง',
    to: '/notifications',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
    ],
  },
]

export default _nav
