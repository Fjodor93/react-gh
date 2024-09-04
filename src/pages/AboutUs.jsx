import '../Style/Content.css';
import '../Style/AboutUs.css';
import { Helmet } from 'react-helmet';

function AboutUs() {
    return(
        <div className='contentcontainer'>
            <Helmet><title>About Us</title></Helmet>
            <div className='aboutUsContainer'>
            <h1>OM OSS</h1>
            <h4>Vi är ett lokalt företag som driver solarium i Norrland. Vårat huvudfokus är tillgänglighet och hälsa. Genom generösa </h4>
            <h4>öppettider och centrala lokaler så säkerställer vi att vi finns där du behöver oss. Många av våra solarium är utrustade med Speciella D-vitaminrör</h4>
            <h4>som laddar upp din energi under de norrlänska mörka vintrarna. Våra solarium är fulladdade med information om säkerhet och vad man ska </h4>
            <h4>tänka på som solariumgäst. Under Covid har vi omarbetat våra städrutiner genom att lokaler och gemensamma miljöer städas flera gånger dagligen.</h4>
            </div>
        </div>
    )};


export default AboutUs;