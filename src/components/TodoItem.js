import { useContext } from 'react'
import style from './List.module.css'
import { Context } from '../context/Context'

import ok from '../img/ok.svg'
import trash from '../img/trash.svg'

function ListItem(props) {

    const { id, title, completed } = props
    const { changeCompleted, deleteTask } = useContext(Context)

    return (
        <div className={style.taskBlock} key={id} style={{ backgroundColor: (completed) ? 'rgb(212,212,212)' : 'rgb(63,63,63)', color: (completed) ? 'rgb(34,34,34)' : 'rgb(212,212,212)' }}>
            <div>
                <h2>{title}</h2>
                <p>completed: {completed.toString()}</p>
            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => changeCompleted(id)}><img src={ok} /></button>
                <button onClick={() => deleteTask(id)}><img src={trash} /></button>
            </div>
        </div>
    )
}

export default ListItem