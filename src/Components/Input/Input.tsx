// import React from 'react'

type InputProps = {
    value: string;
    label?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    handler?: (input: string) => void
}

const Input = ({ value, label, text, type, placeholder, handler = () => { } }: InputProps) => {
    return (
        <>
            <label htmlFor={label}>{text ? text : ""}</label>
            <input
                id={label}
                onChange={event => handler(event.target.value)}
                value={value}
                type={type}
                placeholder={placeholder} />
        </>
    )
}

export default Input