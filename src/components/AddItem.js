function AddList({addNewTodo}) {

    function handler(event) {
        if (event.key === 'Enter') {
            addNewTodo(event.target.value)
        }
    }

    return (
        <div className='input_elem'>
            <input onKeyDown={handler}/>
        </div>
    )
}

export default AddList