import "./Input.css";


function Input({ type, placeholder, name, id, changeValue, handleChangeValue, children }) {
    return(
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={changeValue}
            onChange={handleChangeValue}
        >
            {children}
        </input>

    );
}


export default Input;