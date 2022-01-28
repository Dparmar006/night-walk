import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const Breadcrumbs = ({ title, subtitle }) => {
  return (
    <Breadcrumb className='d-flex justify-content-end'>
      <BreadcrumbItem>{title}</BreadcrumbItem>
      <BreadcrumbItem active>{subtitle}</BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Breadcrumbs
