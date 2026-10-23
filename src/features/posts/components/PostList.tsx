import { useGetPosts } from '../posts.hooks'

const postList = () => {
    const {isLoading, isError, error, data} = useGetPosts();

    if (isLoading) return <p>Loading...</p>


    if (isError) return <p>{error.message}</p>


  return <div>{JSON.stringify(data)}</div>

}

export default postList;