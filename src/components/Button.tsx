import { Ibutton } from "../types";

const Button = (props: Ibutton) => {
    const { onClick, text, className } = props

    return <button className={className} onClick={onClick}>{text}</button>
}

export default Button;