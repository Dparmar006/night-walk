import React from 'react'
import { useSelector } from 'react-redux'

import PaginationContainer from '../../components/Pagination/PaginationContainer'
import rooms from '../../helper/rooms'

const ListRooms = () => {
  const ui = useSelector(state => state.Ui)
  return (
    <React.Fragment>
      <PaginationContainer data={rooms} />
    </React.Fragment>
  )
}

export default ListRooms
