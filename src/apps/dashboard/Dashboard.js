import React from 'react'
import { Col, Row } from 'reactstrap'
import NCard from '../../components/cards/Card'

const Dashboard = () => {
  let navigationCards = [
    {
      title: 'Sales',
      subtitle: '32,000',
      icon: '💰'
    },
    {
      title: 'Projects',
      subtitle: '42',
      icon: '🧾'
    },
    {
      title: 'Orders',
      subtitle: '4200',
      icon: '🧰'
    }
  ]
  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        {navigationCards.map(card => (
          <Col xl={2} md={4} sm={6} xs={12} className='my-1'>
            <NCard
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Dashboard
