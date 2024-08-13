import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="CONTACT"
        btnClass="hide"
        />       
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;