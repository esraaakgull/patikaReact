import axios from 'axios'
import {useState} from "react";
import ModalBox from "../../modalBox";

const DisplayingPosts = ({filteredList, setFilteredList}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [comments, setComments] = useState([])
    const showModal = async (id) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const {data} = res;
        setComments(data)
        setIsDisplayed(true)
    }

    const deletePost = (id) => {
        const updatedList = filteredList.filter(item => item.id !== id)
        setFilteredList(updatedList)
    }

    {
        return isDisplayed ? <ModalBox data={comments} setIsDisplayed={setIsDisplayed}/> :
            (
                <div>
                    {filteredList &&
                        <ul>
                            {filteredList.map((post, index) => (
                                    <div className="card cardItems" key={index}>
                                        <li onClick={() => showModal(post.id)}>
                                            <span><b>{post.title}</b></span>
                                            <span>{post.body}</span>
                                        </li>
                                        <span className="deletePost" onClick={() => deletePost(post.id)}>X</span>
                                    </div>

                                )
                            )}
                        </ul>
                    }
                </div>
            )
    }
}

export default DisplayingPosts