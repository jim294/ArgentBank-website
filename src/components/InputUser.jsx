export function InputUser({type, name, defaultValue, onChange, labelName, disabled}) {
    return (
        <div className="wrapper">
            <label htmlFor={name}>{labelName}</label>
            <input 
                type={type} 
                name={name} 
                defaultValue={defaultValue} 
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}