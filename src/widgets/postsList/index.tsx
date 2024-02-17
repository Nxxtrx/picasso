import PostCard from 'entities/postCard/ui'
import { title } from 'process';
import React, { FC, useEffect, useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { postApi } from 'shared/api/postApi';
import './styles.scss'
import Loader from 'shared/ui/loader';


const PostsList: FC = () => {
  const navigate = useNavigate()


  const savedPage = localStorage.getItem('currentPage');
  const [page, setPage] = useState<number>(savedPage !== null ? parseInt(savedPage) : 0);

  const {data, isFetching} = postApi.useGetPostsQuery(page)
  const {data: postsList} = postApi.useGetFullPostsQuery()

  useEffect(() => {
    const onScroll = ():void => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && postsList && postsList.length > page * 20) {
        setPage(prevPage => prevPage + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isFetching, postsList]);

  useEffect(() => {
    localStorage.setItem('currentPage', page.toString());
  }, [page]);
  

  function handleClickBtn(id:number):void {
    navigate(`/posts/${id}`)
  }

  window.onbeforeunload = () => {
    localStorage.setItem('currentPage', "0")
  };

  return (
    <div className='posts__container'>
      <ul className='posts__list'>
        {data && data.map((post) => 
          <PostCard key={post.id} id={post.id} title={post.title} description={post.body} handleClick={() => handleClickBtn(post.id)}/>
        )}
        {isFetching && <Loader text={'Идет загрузка...'}/>}
      </ul>
    </div>
  )
}

export default PostsList