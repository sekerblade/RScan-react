/* eslint-disable prettier/prettier */
import Accordion from './acc2'
import React from 'react'
import "./AccordionLayout.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'


import ReactImg from 'src/assets/images/pita.jpg'

const AccordionLayout = () => {
 

  return (
    <div className='accord'>
    <CRow>
      <CCol sm={5}>
        <CCard className='Card-left'>
          <CCardBody >
            <CCardTitle>รายชื่อพนักงาน</CCardTitle>
            <CButton className='add' color="success">เพิ่มพนักงาน</CButton>
        
            <Accordion />

           <br/>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={5}>
        <CCard className='Card-right'>
          <CCardBody >
            <CCardTitle>Personal Information</CCardTitle>
              <CButton className='add2' color="info">แก้ไขข้อมูลพนักงาน</CButton>
              <CButton className='add' color="danger">ลบพนักงาน</CButton>
           
            <CCard >
              <CCardBody>
                <CCardTitle></CCardTitle>
                <img  src= {ReactImg} width="200" height="200"/>
                <CCardText>
                  <br/>ชื่อ: พิธา ลิ้มเจริญรัตน์
                  <br/>ตำแหน่ง: นายกรัฐมนตรี
                  <br/>สังกัดพรรค: ก้าวไกล
                </CCardText>
              </CCardBody>
            </CCard>
            
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
   </div>
  )
}

export default AccordionLayout;

