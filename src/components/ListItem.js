import React from 'react'

export default function ListItem({ todo, id }) { // bunu bu sekilde destructuring yaptık. ani propsla gelen degerleri bu sekilde kullanacagiz
    return (
        <li>
            <label htmlFor={id}>
                <input type="checkbox" id={id} />
                {todo.name}
            </label>
            <button>Edit</button>
        </li>
    )
}
