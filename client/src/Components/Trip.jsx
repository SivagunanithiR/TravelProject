import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/8.avif";
import Trip2 from "../assets/7.avif";
import Trip3 from "../assets/10.avif";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="A trip to Indonesia offers a rich tapestry of experiences, from its stunning natural landscapes to its vibrant cultural heritage. Explore the iconic beaches of Bali, known for their golden sands, crystal-clear waters, and world-class surfing spots. Discover the cultural heart of Java, with its ancient temples like Borobudur and Prambanan, and the bustling city life of Jakarta."
                />

            <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="A trip to Malaysia is a delightful blend of modernity and tradition, offering something for every traveler. In Kuala Lumpur, marvel at the iconic Petronas Twin Towers and explore bustling street markets. Discover the historical charm of Malacca with its colonial architecture and rich heritage. Penang, known as the food capital of Malaysia, invites you to savor its diverse cuisine while exploring vibrant street art."
                />

            <TripData
                image={Trip3}
                heading="Trip in France"
                text="A trip to Indonesia offers a rich tapestry of experiences, from its stunning natural landscapes to its vibrant cultural heritage. Explore the iconic beaches of Bali, known for their golden sands, crystal-clear waters, and world-class surfing spots. Discover the cultural heart of Java, with its ancient temples like Borobudur and Prambanan, and the bustling city life of Jakarta."
                />
            </div>
            </div>
    )
}
export default Trip;