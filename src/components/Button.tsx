interface ButtonProps {
    text: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'dark';
    // optional prop, if not provided, it will be set to 'secondary' from the default value in props destructuring
    onClicked: () => void;
}

const Button = ({ text, color = 'secondary', onClicked }: ButtonProps) => {
    return (
        <>
            <button type="button" className={"btn btn-" + color}
                onClick={onClicked}>{text}</button>
        </>
    )
}

export default Button