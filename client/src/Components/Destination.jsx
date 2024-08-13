import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/6.avif";
import Mountain2 from "../assets/4.avif";
import Mountain3 from "../assets/2.avif";
import Mountain4 from "../assets/4.avif"

const Destination =()=>{
    return(
            <div className="destination">
                    <h1>Popular Destination</h1>
                    <p>Tours give you the opportunity to see a lot ,within a time frame</p>
                    <DestinationData 

                    className="first-des"
                    heading="Taal Volcano, Batangas"
                    text="Taal Volcano, located in Batangas, Philippines, is a complex and active volcano situated in the middle of Lake Taal. Known for its picturesque setting, it features a crater lake on Volcano Island. Taal has a history of frequent and sometimes deadly eruptions, with significant activity recorded as recently as January 2020. It is a popular tourist destination, with visitors often hiking to its crater and enjoying views from nearby Tagaytay City!"
                    img1={Mountain1}
                    img2={Mountain2}
                    />
                    <DestinationData 
                     className="first-des-reverse"
                    heading="Mt.Daguldul,Batangas"
                    text="Mt. Daguldul, located in San Juan, Batangas, Philippines, is a popular hiking destination known for its lush greenery and scenic coastal views. The trek to its summit offers a mix of terrains, from sandy beaches and forested trails to rocky ascents. Along the way, hikers can enjoy the diverse flora and fauna, as well as occasional glimpses of local wildlife. The summit provides breathtaking views of the South China Sea and nearby islands, making it a favorite spot for both novice and experienced hikers."
                    img1={Mountain3}
                    img2={Mountain4}
                    />
                </div>
                
    );
}
export default Destination;