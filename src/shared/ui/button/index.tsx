import React, {FC, MouseEventHandler} from 'react'

interface ButtonProps {
  buttonClass: string,
  title: string,
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({buttonClass, title, handleClick}) => {
  return (
    <button onClick={handleClick} className={`${buttonClass}__button post__buttons`}>{title}</button>
  )
}

export default Button