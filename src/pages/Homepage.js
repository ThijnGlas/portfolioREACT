import Header from "../header/Header"
import Navigation from "../navigation/Navigation";
import Contact from "../contact/Contact";
import Card from "../card/Card";
import "./Homepage.css"
import Section from "../section/Section"
import Footer from "../footer/Footer"
import OverMij from "../overMij/OverMij"
import CodeImage from "../img/code.jpg";
const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="portfolio website"
                smallTitle="van Thijn"
            />
            <Section customId="over-mij" headerTitle="Over Mij"> 
            <OverMij />
            </Section>
            <Section customId="projecten" headerTitle="projecten">
            <Card cardText="dit was mijn project la esquina cubana" image={CodeImage} href="https://github.com/ThijnGlas/laesquinacubana"/>
            <Card cardText="dit was mijn project radicale kunstspeeltuin" Image=".jpg" href="https://github.com/ThijnGlas/Kunstspeeltuin_hashtag"/>
            <Card cardText="dit was een project genaamd museum online deze heb ik samen met een klasgenoot gemaakt" Image=".jpg" href="https://github.com/Remy2072/Museum-online"/>
            <Card cardText="dit was een project genaamd duurzaam huis deze heb ik samen met een klasgenoot gemaakt" Image=".jpg" href="https://github.com/ColindeGroot/DuurzaamHuis"/>
            <Card cardText="dit was een project genaamd transformer community deze heb ik samen met twee klasgenoten gemaakt" Image=".jpg" href="https://github.com/Shihua-liu/transformers-community/tree/shihua"/>
            </Section>
            <Contact customId="contact"/>
            <Footer />
        </>
    )
}

export default HomePage;
