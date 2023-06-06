/* eslint-disable prettier/prettier */
import Accordion from './acc2'
import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CFormInput,
  CModalFooter,
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
  CForm,
  CModalTitle,
  CInputGroup,
  CInputGroupText,
  CFormLabel,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'
import ReactImg from 'src/assets/images/pita.jpg'
import { useState } from 'react'
import { Card, Form, FormGroup, FormControl, Button, Modal } from 'react-bootstrap'





const AccordionLayout = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [visibleXL, setVisibleXL] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [Add, setAdd] = useState(false)


  return (
    <CRow>
      <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>รายชื่อพนักงาน</CCardTitle>
            <Accordion />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={6}>
        <CRow>
          <CCard>
            <CCardBody>
              <>
                <CButton
                  style={{ width: '70px', height: '40px' }}
                  shape="rounded-0"
                  onClick={() => setAdd(!Add)}
                >
                  เพิ่ม
                </CButton>
                <CButton
                  style={{ width: '70px', height: '40px' }}
                  shape="rounded-0"
                  color="danger"
                  onClick={() => setDelete(!Delete)}
                >
                  ลบ
                </CButton>
                <CModal size="xl" visible={Add} onClose={() => setAdd(false)}>
                  <CModalHeader>
                    <CModalTitle>เพิ่มข้อมูล</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                      ชื่อและนามสกุล
                    </CFormLabel>
                    <CFormInput
                      size="lg"
                      aria-label="first and lastName"
                      placeholder="กรุณากรอกชื่อ และ นามสกุล"
                    />
                    <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                      อายุ{' '}
                    </CFormLabel>
                    <CFormInput size="lg" aria-label="Position" placeholder="กรุณาระบุอายุ" />
                    <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                      ประเทศ
                    </CFormLabel>
                    <CFormInput size="lg" aria-label="Party" placeholder="กรุณากรอกประเทศ" />
                    <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                      ตำแหน่ง
                    </CFormLabel>
                    <CFormInput size="lg" aria-label="Party" placeholder="กรุณากรอกตำแหน่ง" />
                    <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                      เงินเดือน
                    </CFormLabel>
                    <CFormInput size="lg" aria-label="Party" placeholder="กรุณากรอกเงินเดือน" />
                  </CModalBody>
                </CModal>
                <CModal size="lg" visible={Delete} onClose={() => setDelete(false)}>
                  <CModalHeader>
                    <CModalTitle>ลบข้อมูล</CModalTitle>
                  </CModalHeader>
                  <CModalBody>...</CModalBody>
                </CModal>
              </>

              <CCardTitle>Personal Information</CCardTitle>
              <CCard>
                <CCardBody>
                  <CCardTitle></CCardTitle>
                  <img src={ReactImg} width="200" height="200" />
                  <CCardText>
                    <br />
                    ชื่อ: พิธา ลิ้มเจริญรัตน์
                    <br />
                    อายุ:
                    <br />
                    ประเทศ:
                    <br />
                    ตำแหน่ง:
                    <br />
                    เงินเดือน:
                  </CCardText>

                  <>
                    <CButton
                      color="primary"
                      shape="rounded-pill"
                      onClick={() => setVisibleXL(!visibleXL)}
                    >
                      แก้ไขข้อมูล
                    </CButton>
                    <CModal size="mg" visible={visibleXL} onClose={() => setVisibleXL(false)}>
                      <CModalHeader>
                        <CModalTitle>แก้ไขข้อมูล</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                          ชื่อและนามสกุล
                        </CFormLabel>
                        <CFormInput
                          size="lg"
                          aria-label="first and lastName"
                          placeholder="กรุณากรอกชื่อ และ นามสกุล"
                        />
                        <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                          อายุ{' '}
                        </CFormLabel>
                        <CFormInput size="lg" aria-label="age" placeholder="กรุณาระบุอายุ" />
                        <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                          ประเทศ
                        </CFormLabel>
                        <CFormInput size="lg" aria-label="country" placeholder="กรุณากรอกประเทศ" />
                        <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                          ตำแหน่ง
                        </CFormLabel>
                        <CFormInput size="lg" aria-label="position" placeholder="กรุณากรอกตำแหน่ง" />
                        <CFormLabel htmlFor="basic-url" className="fw-bold text-uppercase">
                          เงินเดือน
                        </CFormLabel>
                        <CFormInput size="lg" aria-label="salary" placeholder="กรุณากรอกเงินเดือน" />
                      </CModalBody>
                      <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleXL(false)}>
                          ปิด
                        </CButton>
                        <CButton color="primary">บันทึก</CButton>
                      </CModalFooter>
                    </CModal>
                  </>
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default AccordionLayout
