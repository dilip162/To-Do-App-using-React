import { useState } from "react"

function TodoList() {

    const [activity, setActivity] = useState("")
    const [listData, setlistData] = useState([])

    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData)

        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setlistData(updatedListData);
    }

    function removeAll() {
        setlistData([])
    }


    return (
        <>
            <div className="container">
                <div className="header">To-Do App</div>
                <input type='text' placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className="List-heading">Here is your List</p>
                {listData != [] && listData.map((data, i) => {
                    return (
                        <div className="section-two">
                            <div className="lists" key={i}>
                                <div className="listData">{data}</div>
                                <div className="btn-position"><button className="btn-remove" onClick={() => removeActivity(i)}>Remove</button></div>
                            </div>
                        </div>
                    )
                })}
                {listData.length >= 1 && <button className="removeAll-btn" onClick={removeAll}>Remove All</button>}

            </div>
        </>
    )
}

export default TodoList