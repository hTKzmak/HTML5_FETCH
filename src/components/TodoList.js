import TodoItem from './TodoItem'

function List(props) {

    const { todos } = props

    return (
        <main>
            {todos.map(elem =>
                <TodoItem
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    completed={elem.completed}
                />
            )}
        </main>
    )
}

export default List