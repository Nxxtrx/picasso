import { FC } from "react"
import './styles.scss'

interface LoaderProps {
  text: string
}


const Loader: FC<LoaderProps> = ({text}) => {
  return (
    <p className="loader">{text}</p>
  )
}

export default Loader