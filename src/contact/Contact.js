import "./Contact.css";

const Contact = (props) => {
    return(
        <form id={props.customId}>
        <input name="name" type="text" class="feedback-input" placeholder="Name" />
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
        </form>
    )}

export default Contact;