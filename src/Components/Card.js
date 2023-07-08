import React from 'react';
import '../CSS/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faImage } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Card(props) {
  return (
    <div className="card">

        <div className="container" id="whole_container">

            <div className="row" id="first_row">
                    <div className="col-sm">
                        <FontAwesomeIcon icon={faFolder} id='folder' size='2xl' style={{color: '#64ffda',}} />
                        <a href={props.image_test} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faImage} id='image' size="xl" style={{color: "#64ffda",}} /></a>
                        <a href={props.github}><FontAwesomeIcon icon={faGithub} id='github' size='xl' /></a>
                    </div>
            </div>

            <div className="row" id="title_row">
                <div className="col-sm">
                    <h1 className="title">{props.title}</h1>
                </div>
            </div>

            <div className="row" id="description_row">
                <div className="col-sm">
                    <p className="description">{props.description}</p>
                </div>
            </div>

            <div className="row" id="languages_row">
                <div className="col-sm">
                    <p className="languages">{props.languages}</p>
                </div>
            </div>

        </div>

    </div>
  );
}

export default Card;