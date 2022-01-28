import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collapseSidebar, expandSidebar } from '../../redux/actions/ui'
import EmojiButton from '../buttons/EmojiButton'

const Navbar = ({ shouldSidebarOpenBtnDisplay }) => {
  const dispatch = useDispatch()
  const ui = useSelector(state => state.Ui)

  const sidebarToggle = () => {
    ui.sidebarExpanded ? dispatch(collapseSidebar()) : dispatch(expandSidebar())
  }
  return (
    <nav className='navbar'>
      {ui.sidebarExpanded ? (
        <EmojiButton
          emoji={'👈'}
          tooltipTitle={'Close menu'}
          onClick={sidebarToggle}
        />
      ) : (
        shouldSidebarOpenBtnDisplay && (
          <EmojiButton
            emoji={'👉'}
            tooltipTitle={'Open menu'}
            onClick={sidebarToggle}
          />
        )
      )}
      <EmojiButton emoji={'🧑'} />
    </nav>
  )
}

export default Navbar
