import React from 'react'
import { Card, CardBody } from 'reactstrap'

const NCard = ({ icon = '🐤', title, subtitle }) => {
  return (
    <Card className='card' color='body-color'>
      <CardBody className='d-flex justify-content-between align-items-center'>
        <div className='card__info'>
          <h6 className='card__title'>{title}</h6>
          <h4 className='card__subtitle'>{subtitle}</h4>
        </div>
        <div className='card__icon'>{icon}</div>
      </CardBody>
    </Card>
  )
}

export default NCard
