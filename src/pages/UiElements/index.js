import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Col, Row } from 'reactstrap'
import NCard from '../../components/cards/Card'

const index = () => {
  let uiElements = [
    {
      title: 'Buttons',
      icon: '🔘',
      link: '/ui-elements/buttons'
    }
  ]
  return (
    <React.Fragment>
      <Breadcrumbs title={'Ui Elements'} subtitle={'All Elements'} />
      <Row>
        {uiElements.map(element => (
          <Col xl={2} md={4} xs={12}>
            <NCard
              title={element.title}
              icon={element.icon}
              link={element.link}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default index
