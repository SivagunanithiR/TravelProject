import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="ABOUT"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;