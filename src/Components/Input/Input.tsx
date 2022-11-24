type InputProps = {
    value: string;
    label: string;
    handler: (input: string) => void
}

const Input = ({ value, label, handler }: InputProps) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                onChange={event => handler(event.target.value)}
                value={value} />
        </>
    )
}

export default Input