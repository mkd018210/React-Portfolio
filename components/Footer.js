import React from "react";
import { FontAwesomeIcon } from "@fortawesom/react-fontawesome";
import { faGithub, faLinkedin, faFacebook } from "@fortawesom/free-brands-svg-icons";
import "../style/Footer.css";

const socials = [
    {
        name: "Github",
        url: "https://github.com/mkd018210",
        icon: faGithub,
        color: "#5DE512",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amanda-douglas-b2ba76193",
        icon: faLinkedin,
        color: "#2EACE8",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/mandy.m.douglas.1",
        icon: faFacebook,
        color: "#FF0000"
    },
];

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="footer-container">
                <section className="social-icons-wrapper d-flex flex-ms-row justify-content-center">
                    {socials.map(({ name, url, icon, color }) => (
                        <div
                            key={name}
                            className="d-flex flex-column align-items-center mx-md=2 transparent-bg"
                        >
                            <a
                                href={url}
                                className={'icon ${name}'}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={icon}
                                    bounce
                                    className="footer-icon-size"
                                    style={{ color: color }}
                                />
                            </a>
                            <a href={url} target="_blank" rel="noreferrer">
                                <span className="d-inline-block mx-1 name">{name}</span>
                            </a>
                        </div>
                    ))}
                </section>
                <section className="form-footer">
                    <h5 className="designer-text">Designed by Mandy Douglas</h5>
                    <p>
                        <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
                    </p>
                </section>
            </div>
        </footer>

    );

};

export default Footer;