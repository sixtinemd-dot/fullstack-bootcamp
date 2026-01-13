import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './state/slice'
import ReactionButton from './state/ReactionButton'

export default function PostsList() {
    const posts = useSelector(state => state.postsReducer.posts )
    const status = useSelector(state => state.postsReducer.status )

    const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchPosts())
}, [])

    if(status === 'loading') return <h2>Loading...</h2>
    if(status === 'error') return <h2>Try in a few minutes</h2>
    return (
        <>
        <h2>PostsList</h2>
        <section>
            {
                posts && posts.map((post) => {
                    return (
                        <article key={posts.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <ReactionButton {...post}/>
                        </article>
                    )
                })
            }
        </section>

        </>
    )

}