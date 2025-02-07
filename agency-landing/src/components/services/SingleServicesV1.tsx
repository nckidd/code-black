import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    activeClass?: string;
    name?: string;
    thumb?: string;
    icon?: string;
}

const SingleServicesV1 = ({ services }: { services: DataType }) => {
    const { id, icon, name, thumb} = services

    return (
        <>
            <div className={`service-box `}>
                <div className="service-inner">
                    <h4 className="title">
                        <img src={`/assets/images/${icon}`} alt="icon" />
                        <Link to={`/service-details/${id}`}>{name}</Link>
                    </h4>
                    <p className="service-feature-lists">
                        <span>I. Analysis & Ideation </span>
                        <span>II. Architecture & Design </span>
                        <span>III. Creation </span>
                        <span>IV. Feedback & Testing </span>
                    </p>
                    <div className="service-img-box">
                        <img src={`/assets/images/${thumb}`} alt="Icon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServicesV1;