import "./Input.css";


function Input({ type, placeholder, name, id }) {
    return(
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
        >
        </input>

    );
}


export default Input;