import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { postApi } from 'shared/api/postApi'
import { capitalizeFirstLetter } from 'shared/lib/capitalizeFirstLetter'
import './styles.scss'
import Button from 'shared/ui/button'
import Loader from 'shared/ui/loader'

const PostDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  
  const {data, isLoading} = postApi.useGetPostByIdQuery(id ? parseInt(id, 10) : 0)
  
  function handleClickBtn():void {
    navigate(-1)
  }

  return (
    <div className="post-details__container">
      <div className="post-details__text">
        {!isLoading && data ? (
          <>
            <Button buttonClass="post-details" title="Назад" handleClick={() => handleClickBtn()}/>
            <h2 className="post-details__title">{data.id}. {capitalizeFirstLetter(data.title)}</h2>
            <p className="post-details__description">{capitalizeFirstLetter(data.body)}</p>
          </>
        ) : (
          <Loader text='Идет загрузка...' />
        )}
      </div>
    </div>
  );
}

export default PostDetails