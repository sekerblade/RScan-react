/* eslint-disable prettier/prettier */
import AccordionLayout from './AccordionLayout'
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
  CListGroupItem,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { useState } from 'react'
import Axios from 'axios'
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";

const Accordion = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)
  const [newWage, setNewWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([])

  const getEmployees = () => {
    Axios.get('http://localhost:3001/emp_info').then((response) => {
      setEmployeeList(response.data)
    })
  }

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ])
    })
  }

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:3001/update', { wage: newWage, id: id }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                name: val.name,
                country: val.country,
                age: val.age,
                position: val.position,
                wage: newWage,
              }
            : val
        }),
      )
    })
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id
        }),
      )
    })
  }
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
              aria-label="sm input example"
            />
            <br />
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>สาขา มธ มช จุฬา บลาๆ</CAccordionHeader>
              <CAccordionBody>
                <CAccordion activeItemKey={5}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>ฝ่ายขาย</CAccordionHeader>
                    <CAccordionBody></CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>ทรัพยากรบุคคล</CAccordionHeader>
                    <CAccordionBody></CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>บัญชี</CAccordionHeader>
                    <CAccordionBody></CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={4}>
                    <CAccordionHeader>แม่บ้าน</CAccordionHeader>
                    <CAccordionBody></CAccordionBody>
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
        <CAccordionItem itemKey={3}>
          <CAccordionHeader onClick={getEmployees}>แสดงรายชื่อพนังงานทั้งหมด</CAccordionHeader>
          <CAccordionBody>
            {employeeList.map((val, key) => {
              return (
                <>
                  <CCard>
                    <CListGroupItem>ชื่อ: {val.Name} {val.SureName}</CListGroupItem>
                    
                  </CCard>
                </>
              )
            })}
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  )
}

export default Accordion
