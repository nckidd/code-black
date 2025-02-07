import unionIcon from "/assets/images/Union.svg"
import FactData from "../../jsonData/fact/FactData.json"
import SingleFactV1 from "./SingleFactV1"
import AnimatedText from "../animated/AnimatedText"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header" id="minify-text">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Founded on the principles of creativity, collaboration, and excellence, CODE BLACK is a team of experts dedicated to delivering results...
                            </AnimatedText>
                            <AnimatedText>
                                We are committed to pushing the boundaries of what’s possible, working together to exceed under promise and over deliver value to our clients.
                            </AnimatedText>
                        </div>
                    </div>

                    {/* Fun Facts   */}
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV1 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;