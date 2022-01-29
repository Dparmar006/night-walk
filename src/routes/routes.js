import Bookmarks from '../apps/bookmarks/Bookmarks'
import Dashboard from '../apps/dashboard/Dashboard'
import Notes from '../apps/notes/Notes'
import ListRooms from '../apps/rentRooms'
import BasicLayout from '../layouts/BasicLayout'
import UiElements from '../pages/UiElements'
import Buttons from '../pages/UiElements/Buttons'

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
  },

  // UI ELEMENTS
  {
    pathname: '/ui-elements',
    component: (
      <BasicLayout title='Ui Elements'>
        <UiElements />
      </BasicLayout>
    )
  },
  {
    pathname: '/ui-elements/buttons',
    component: (
      <BasicLayout title='Buttons'>
        <Buttons />
      </BasicLayout>
    )
  }
]
