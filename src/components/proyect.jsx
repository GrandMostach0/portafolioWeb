import React from 'react';
import DefaultImage from '../assets/images/DefaultImage.png';
import GitHubIcon from './icons/GitHubIcon';
import BrowserIcon from './icons/BrowserIcon';

import {SqlIcon, HtmlIcon, CssIcon, PhpIcon, DockerIcon} from './Icons';

import '../styles/proyect.css';

export default function proyect(props) {

  function getTagIcon(tag){
    const tagIconMapping = {
      HTML: <HtmlIcon size={15} />,
      CSS: <CssIcon size={15} />,
      PHP: <PhpIcon size={15} />,
      MYSQL: <SqlIcon size={15} />,
      Docker: <DockerIcon size={17} />
    };

    return tagIconMapping[tag];
  }

  return (
    <>
      <div
        className={`card-proyect-img ${proyect.classNameP || "default-class"}`}
      >
        <img
          className="imgPortada"
          loading="lazy"
          src={props.imagePath || DefaultImage}
          alt={props.title}
        />
      </div>
      <div className="card-proyect-title-description">
        <h1>{props.title}</h1>
        <div className="category tags">
          <p>{props.category}</p>
        </div>
        <p>{props.description}</p>

        {props.tags && props.tags.length > 0 && (
          <div className="container-tags">
            {props.tags.map((tag, index) => (
              <div className="tags" key={index}>
                <p>
                  {getTagIcon(tag)}
                  {tag}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="card-proyect-buttons">
          {props.urlGitHub && (
            <div className="button">
              <a className="title-buton" href={props.urlGitHub} target="_blank">
                <GitHubIcon color={"#ececec"} classNameP={"resize-icon"} /> Code
              </a>
            </div>
          )}

          {props.urlPreview && (
            <div className="button">
              <a
                className="title-buton"
                href={props.urlPreview}
                target="_blank"
              >
                <BrowserIcon color={"#ececec"} classNameP={"resize-icon"} />{" "}
                Preview
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}