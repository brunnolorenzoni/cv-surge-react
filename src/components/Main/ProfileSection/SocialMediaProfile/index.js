import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function SocialMediaProfile() {
  return (
    <div className="socialMedia">
      <h4 className="socialMedia__title">Redes Sociais</h4>
      <ul className="socialMedia__list">
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Facebook" href="https://www.facebook.com/lorenzonibrunno/" >
            <FacebookIcon className="facebook-icon" />
          </a>
        </li>
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Instagram" href="https://www.instagram.com/brunnolorenzoni_/?hl=pt-br" >
            <InstagramIcon className="instagram-icon"/>
          </a>
        </li>
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Linkedin" href="https://www.linkedin.com/in/brunnolorenzoni/" >
            <LinkedInIcon className="linkedin-icon"/>
          </a>
        </li>
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Twitter" href="https://twitter.com/brunnolorenzoni" >
            <TwitterIcon className="twitter-icon"/>
          </a>
        </li>
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Github" href="https://github.com/brunnolorenzoni" >
            <GitHubIcon className="github-icon" />
          </a>
        </li>
        <li className="socialMedia__list__item">
          <a className="socialMedia__list__item__link" title="Facebook Gaming" href="http://fb.gg/brnmeister" >
            <SportsEsportsIcon className="esports-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaProfile;
