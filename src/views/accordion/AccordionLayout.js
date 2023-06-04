/* eslint-disable prettier/prettier */
import Accordion from './acc2'
import React from 'react'
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
    <CRow>
      <CCol sm={5}>
        <CCard>
          <CCardBody >
            <CCardTitle>รายชื่อพนักงาน</CCardTitle>
            <Accordion />

           
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={5}>
        <CCard>
          <CCardBody>
            <CCardTitle>Personal Information</CCardTitle>
            <CCard>
              <CCardBody>
                <CCardTitle></CCardTitle>
                <img  src= {ReactImg} width="200" height="200"/>
                <CCardText>
                  <br/>ชื่อ: พิธา ลิ้มเจริญรัตน์
                  <br/>ตำแหน่ง: นายกรัฐมนตรี
                  <br/>สังกัดพรรค: ก้าวไกล
                </CCardText>
                <CButton href="#">แก้ไขข้อมูลพนักงาน</CButton>
              </CCardBody>
            </CCard>
            
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default AccordionLayout;

