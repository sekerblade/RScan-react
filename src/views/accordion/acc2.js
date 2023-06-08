import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CFormInput,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import Axios from 'axios'
import React, { useState } from 'react'
import { DocsExample } from 'src/components'
import AccordionLayout from './AccordionLayout'
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import EmployeeList from 'src/api/employee/EmployeeList'
const Accordion = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)
  const [newWage, setNewWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([])

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
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
  const getindex = (id) => {
    return <div>{id}</div>
  }
  return (
    <>
      <CCol sm={6}>
        <CRow>
          <CCard>
            <CCardTitle sm={6}>สาขาไมด้า แอร์พอร์ต</CCardTitle>
            <CAccordion alwaysOpen activeItemKey={2}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader onClick={getEmployees}>พนักงานทั้งหมด</CAccordionHeader>

                <CAccordionBody>
                  <CFormInput
                    type="text"
                    size="sm"
                    placeholder="ค้นหารายชื่อ"
                    aria-label="sm input example"
                  />
                  <CAccordion activeItemKey={5}>
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>ฝ่ายขาย</CAccordionHeader>
                      <CAccordionBody>
                        <CAccordionBody>
                          {employeeList.map((val, key) => {
                            const index = val.ID

                            return (
                              <>
                                {getindex(index)}
                                <CCard>
                                  <CListGroupItem>
                                    ชื่อ: {val.Name} {val.SureName} {index}
                                  </CListGroupItem>
                                </CCard>
                              </>
                            )
                          })}
                        </CAccordionBody>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>พนักงานลาออก</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
            <CCardBody></CCardBody>
          </CCard>
        </CRow>
      </CCol>
    </>
  )
}

export default Accordion
