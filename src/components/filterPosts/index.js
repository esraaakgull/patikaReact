import {useState} from "react";

const FilterPosts = ({posts, setFilteredList}) => {
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        const filterValue = e.target.value
        setFilter(filterValue)
        const filteredArray = posts.filter(post => {
            return Object.keys(post).some(key => {
                return post[key].toString().toLowerCase().includes(filterValue.toString().toLowerCase())
            })
        })
        setFilteredList(filteredArray)
    }

    return (
        <div className="filterBox">
            <input className="input-group-sm" placeholder="Filter" name="filterValue" value={filter} onChange={handleChange}/>
        </div>)
}
export default FilterPosts