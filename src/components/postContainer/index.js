import DisplayingPosts from "./displayingPosts";
import FilterPosts from "../filterPosts";
import {useEffect, useState} from "react";
import axios from 'axios'

const PostContainer = () => {
    const [posts, setPosts] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const getPosts = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const {data} = res;
        setPosts(data)
        setFilteredList(data)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <FilterPosts posts={posts} setFilteredList={setFilteredList}/>
            <DisplayingPosts filteredList={filteredList} setFilteredList={setFilteredList}/>
        </div>
    )
}

export default PostContainer