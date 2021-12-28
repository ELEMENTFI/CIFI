import { Card } from "reactstrap";

const CustomCard = ({ title,title2, text, subText,subText1,titledashboard }) => {
    return (
        <Card className="custom-card p-24 ">
            <small className="text-site-primary font-weight-semi-bold text-uppercase text-color" color="#f5584b">{title}</small>            
            <small className="text-site-primary font-weight-semi-bold  text-color" color="#f5584b">{titledashboard}</small>            
            <div className="d-flex mt-5 align-items-baseline">
            <h3 className="font-weight-bold">{title2}</h3>
                <h3 className="font-weight-bold">{text}</h3><br></br>
               
            </div>
            <h6 className="font-weight-bold">{subText1}</h6>
            <p className="text-muted mb-0 pr-3">{subText}</p>
        </Card>
    );
}

export default CustomCard;