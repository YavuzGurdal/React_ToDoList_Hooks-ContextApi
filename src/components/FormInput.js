import React from 'react'

export default function FormInput() {
    return (
        <form autoComplete="off">
            <input type="text" name="todos" id="todos" required placeholder="What to do?" />
            <button type="submit">Create</button>
        </form>
    )
}
