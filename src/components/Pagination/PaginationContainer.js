import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  CardSubtitle,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

const PaginationContainer = ({ data, limitPerPage = 20, currentPage = 1 }) => {
  const ui = useSelector(state => state.Ui)
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 8
  })
  const [pages] = useState(Math.round(data.length / pagination.limit))
  return (
    <Row>
      {data
        .slice(pagination.page * pagination.limit, pagination.limit)
        .map(d => (
          <Col xl={3} md={4} sm={6} xs={12}>
            <Card color={ui.theme} className='my-2'>
              <CardHeader>
                <CardTitle tag={'h4'}>{d.hotelName}</CardTitle>
                <CardSubtitle tag={'h6'} className='text-muted'>
                  $ {d.pricePerNight} / night
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <CardText tag={'h6'}>Owner : {d.ownerName}</CardText>
                <CardText>City : {d.city}</CardText>
                <CardText>Rooms availabe : {d.noOfRooms}</CardText>
                <CardText tag={'p'}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  quisquam in a ipsam recusandae suscipit, corporis praesentium
                  aliquid libero Id, accusantium?
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}

      <Pagination>
        {new Array(pages)
          .fill()
          .map((_, idx) => pagination.page + idx)
          .map((pageBtns, idx) => (
            <PaginationItem
              active={idx === pagination.page + 1}
              onClick={() => setPagination({ ...pagination, page: idx + 1 })}
            >
              <PaginationLink>
                {Math.floor(
                  (pagination.page / pagination.limit) * pagination.limit
                ) + idx}
              </PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Row>
  )
}

export default PaginationContainer
