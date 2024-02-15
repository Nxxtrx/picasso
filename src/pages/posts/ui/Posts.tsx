import React, {useState, useEffect} from 'react'
import { postApi } from 'shared/api/postApi'

const Posts = () => {

  const [page, setPage] = useState<number>(0);
  const {data, error, isLoading, isFetching} = postApi.useGetPostsQuery(page)
  const posts = data ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching ) {
        console.log("Fetching more data...");
        setPage(prevPage => prevPage + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  // console.log(data)

  return (
    <section className='posts'>
      <div className="posts__container">
        <ul className='posts__list'>
        {posts.map((item) =>
          <li className='posts__item' key={item.id}>
            <p>{item.id} {item.title} {item.body}</p>
          </li>
        )}
        </ul>
      </div>
    </section>
  )
}

export default Posts