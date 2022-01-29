import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

const EmojiButton = ({
  emoji,
  className,
  buttonType = 'button',
  title,
  tooltipTitle,
  tooltipPlacement = 'top',
  children,
  ...rest
}) => {
  return (
    <>
      <button
        id={tooltipTitle ? `emoji-button` : emoji}
        type={buttonType}
        {...rest}
        className={'emoji-button ' + className}
      >
        {emoji} {!!title && title} {children}
      </button>
      {tooltipTitle && (
        <UncontrolledTooltip
          placement={tooltipPlacement}
          target={tooltipTitle ? `emoji-button` : emoji}
        >
          {tooltipTitle}
        </UncontrolledTooltip>
      )}
    </>
  )
}

export default EmojiButton
