import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPost } from '../../../../features/Posts/postSlice'
import API from '../../../../Service/API'
import BoxPostRinght from '../boxPostRight/boxPostRight'

export const RightLayout = () => {
    // const [listPost, setListPost] = useState([])
    const dispatch = useDispatch()
    const listPost = useSelector((state) => state.post.listPost)




    const onHandleGetPost = async () => {
        try {
            const { data: res } = await API.get('api/posts?offset=0&limit=10')
            // setListPost(res.data)
            dispatch(postPost(res.data))

        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {

        onHandleGetPost()
    }
        , [])



    return (
        <div className='right-home'>

            {listPost.map(e => (
                <BoxPostRinght name={e.author.lastName + ' ' + e.author.firstName} content={e.content} updatedAt={e.updatedAt} id={e._id} file={e.file} />
            ))}

        </div>
    )
}