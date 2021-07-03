import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {

    const [todos, setTodos] = useContext(DataContext); // destructuring. contexapi kullanarak verileri alıyoruz.
    return (
        <ul>
            {
                todos.map((todo, index) =>
                    <ListItem todo={todo} key={index} id={index} />
                )
            }
        </ul>
    )
}
