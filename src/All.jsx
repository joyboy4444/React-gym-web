import './App.css'
import Hero from './components/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BMI from './components/BMI/BMI';

function All() {

    return (
        <>
        <Hero/>
        <BMI/>
        <Programs />
        <Reasons/>
        <Testimonials/>
        <Footer/>
        </>
    );
}

export default All