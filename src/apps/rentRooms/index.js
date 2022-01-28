import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

import PaginationContainer from '../../components/Pagination/PaginationContainer'
import rooms from '../../helper/rooms'

const ListRooms = () => {
  return (
    <React.Fragment>
      <Breadcrumbs title={'Apps'} subtitle={'Rent rooms'} />

      <PaginationContainer data={rooms} />
    </React.Fragment>
  )
}

export default ListRooms
