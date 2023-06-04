/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CFormInput,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Accordion = () => {
    return (
      <>
      <CAccordion alwaysOpen activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>พนักงานทั้งหมด</CAccordionHeader>

          <CAccordionBody>
            <CFormInput
              type="text"
              size="sm"
              placeholder="ค้นหารายชื่อ"
              aria-label="sm input example" />
            <br />
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>สาขา มธ sdfsddf</CAccordionHeader>
              <CAccordionBody>
                <CAccordion activeItemKey={5}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>ฝ่ายขาย</CAccordionHeader>
                    <CAccordionBody>

                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>ทรัพยากรบุคคล</CAccordionHeader>
                    <CAccordionBody>

                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>บัญชี</CAccordionHeader>
                    <CAccordionBody>

                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={4}>
                    <CAccordionHeader>แม่บ้าน</CAccordionHeader>
                    <CAccordionBody>

                    </CAccordionBody>
                  </CAccordionItem>

                </CAccordion>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>พนักงานลาออก</CAccordionHeader>
          <CAccordionBody></CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
    )
  }
  
  export default Accordion