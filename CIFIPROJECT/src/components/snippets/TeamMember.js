import React from 'react';

// assets
import LinkedInIcon from '../../assets/images/Linkedin.png';

function TeamMember(props) {
    return (
        <div className="team-member d-flex flex-column align-items-center">
            <img src={props.Avatar} alt="avatar" />
            <h3>{props.Name}</h3>
            <p>{props.Designation}</p>
            <a href={props.LinkedIn}><img src={LinkedInIcon} alt="linkedIn icon" /></a>
        </div>
    );
}

export default TeamMember;