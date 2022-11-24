type InputProps = {
    value: string;
    label: string;
    text?: string;
    type?: string;
    handler: (input: string) => void
}

const Input = ({ value, label, text, type, handler }: InputProps) => {
    return (
        <>
            <label htmlFor={label}>{text ? text : label}</label>
            <input
                id={label}
                onChange={event => handler(event.target.value)}
                value={value}
                type={type} />
        </>
    )
}

export default Input