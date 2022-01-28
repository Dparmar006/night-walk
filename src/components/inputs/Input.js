import React from 'react'

const Input = React.forwardRef(
  (
    { value, label, name, placeholder, wrapperClass, trailingIcon, ...rest },
    ref
  ) => {
    return (
      <div className={wrapperClass + ' input-wrapper '}>
        {!!label && <label htmlFor={name}>{label !== '' ? name : label}</label>}
        <input
          type='text'
          placeholder={placeholder || name}
          name={name}
          value={value}
          ref={ref}
          {...rest}
        />
        <div className='input-trailing-icon'>
          {!!trailingIcon && trailingIcon}
        </div>
      </div>
    )
  }
)

export default Input
