import Union from "/assets/images/Union.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        Faq
                    </span>
                    <h2 className="section-title section-title2">
                        Frequent Queries, <span>Quick Fixes</span>
                    </h2>
                    <p className="section-desc">Whether you have specific questions or need general information, our FAQ section
                        is here to help. From details about our services to guidance on choosing the right plan</p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <img src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <img src={pricingShape2} alt="shape" />
                    </div>

                    {/* Faq 1 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="number">I.</span> What types of services do you offer? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our agency specializes in a range of creative services including branding, web design, app development, digital marketing, social media management, and content creation.</p>
                            </div> 
                        </div>
                    </div>

                    {/* Faq 2 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="number">II.</span> What is your typical project timeline? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>This depends entirely on you and on the scope of your project. Thus, the timeline can range greatly, from one week to a several months. </p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 3 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="number">III.</span> Do you offer post-launch support or maintenance? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Of course. And the package you opt for should align with the depth of post-launch support and maintenance you need.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 4 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="number">IV.</span> Can you assist with both online and offline creative projects? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our agency is entirely remote. We help you hire and manage any offline professionals (e.g., photographers, videographers, etc.) that your project may require, ensuring they produce quality work local to your headquarters.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 5 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className="number">V.</span> Do you tailor your designs to each client? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our agency specializes in custom branding and web design. However, if you have a prototype or design already made, we can build off that as well.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 6 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span className="number">VI.</span> How do I upgrade, downgrade, or cancel? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>The lifecycle of any project lends itself to myriad redirections, and we get that! If you need to upgrade or downgrade, you can do so at any point. Please keep in mind that fees may apply to cancellations and depend on how much of the project has been completed (e.g., a 50% completed project will get a 50% refund of the project rate).</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 7 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <span className="number">VII.</span> Can I see examples of your previous work? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Please consult our Projects page for specs on our previous projects. If you'd like to discuss further, we're happy to chat. Book a free consultation now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;