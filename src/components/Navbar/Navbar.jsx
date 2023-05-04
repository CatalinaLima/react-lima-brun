import CartWidget from "../CartWidget/CartWidget"
import calmer from "./calmer.png"

export default function NavBar(){
    return (
        <nav>
            <img src={calmer} alt="logo" />
            <ul>
                <li>
                    <a href="/">INICIO</a>
                </li>
                <li>
                    <a href="/">LIBROS</a>
                </li>
                <li>
                    <a href="/">CAFETERIA</a>
                </li>
                <li>
                    <a href="/">CONTACTO</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}