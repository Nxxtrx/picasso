import {FC, MouseEventHandler} from 'react'
import Button from 'shared/ui/button'
import { capitalizeFirstLetter } from 'shared/lib/capitalizeFirstLetter'
import './styles.scss'

interface PostProps {
  id: number,
  title: string,
  description: string,
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const PostCard: FC<PostProps> = ({id, title, description, handleClick}) => {
  return (
    <li className='post__item'>
      <div className='post__text'>
        <p className='post__id'>{id}.&nbsp;</p>
        <p className='post__title'>{capitalizeFirstLetter(title)}.&nbsp;</p>
        <p className='post__description'>{capitalizeFirstLetter(description)}&nbsp;</p>
        <Button title='Перейти' buttonClass='post' handleClick={handleClick}/>
      </div>
    </li>
  )
}

export default PostCard