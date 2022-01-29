import React from 'react'

const Button = ({
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
    <button type={buttonType} className={`button ${className || ''}`} {...rest}>
      {emoji} {!!title && title} {children}
    </button>
  )
}

export default Button
