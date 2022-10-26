import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="info">
            <p>Thijn Glas</p>
            <a href = "tel: +31630402470">+31 6 30402470</a><br></br>
            <a href = "mailto: thijnglas@gmail.com">thijnglas@gmail.com</a>
        </div>
        <div className="socials">
            <a href="https://www.instagram.com/whoisthijn/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </footer>
    );
}

export default Footer;