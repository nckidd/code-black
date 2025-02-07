import contact from '/assets/images/contact.png';
import btnArrow from '/assets/images/btn-arrow.svg';
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <img className="hero-shape" src={contact} alt="Shape" />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{`"A picture is often said to be worth a thousand words. Similarly, an interface is worth a thousand pictures."`}</p>
                            </div>
                            <div className="author-info">
                                <h4>Ben Shneiderman</h4>
                                <span>Computer Scientist, Director of University of Maryland's Human-Computer Interaction Lab</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Not found Page"}</h2>
                                <h2>CODE BLACK</h2>
                            </div>
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;