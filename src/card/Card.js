import "./Card.css";

const Card = (props) => {
    let cardImage = <img src={props.image} alt="" />
    if(props.image === undefined){
        cardImage = <img src={""} alt="" />;
    }

    return (
        <a href={props.href} target="_blank">
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.cardText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis recusandae libero, distinctio dolores suscipit. Reprehenderit animi ab ullam quisquam, maiores facilis qui incidunt tenetur quos porro doloribus tempora saepe."}</p>
            </section>
        </article>
        </a>
    )
}

export default Card;
