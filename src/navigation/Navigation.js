import "./Navigation.css";
const Navigation = () => {
    return(
        <nav class="navigation">
            <figure class="navigation__logo">
            <i class="fa-solid fa-terminal"></i>
            </figure>
            <ul className="navigation__ul">
                <li className="navigation__li"><a href="#over-mij">Over mij</a> </li>
                <li className="navigation__li"><a href="#projecten">projecten</a></li>
                <li className="navigation__li"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
