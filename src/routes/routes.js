import Bookmarks from '../apps/bookmarks/Bookmarks'
import Dashboard from '../apps/dashboard/Dashboard'
import Notes from '../apps/notes/Notes'
import ListRooms from '../apps/rentRooms'
import BasicLayout from '../layouts/BasicLayout'

export const publicRoutes = [
  {
    pathname: '/',
    component: (
      <BasicLayout title='Dashboard'>
        <Dashboard />
      </BasicLayout>
    )
  },
  {
    pathname: '/notes',
    component: (
      <BasicLayout title='Notes'>
        <Notes />
      </BasicLayout>
    )
  },
  {
    pathname: '/bookmarks',
    component: (
      <BasicLayout title='Bookmarks'>
        <Bookmarks />
      </BasicLayout>
    )
  },
  {
    pathname: '/rent-rooms',
    component: (
      <BasicLayout title='Rent rooms'>
        <ListRooms />
      </BasicLayout>
    )
  }
]
