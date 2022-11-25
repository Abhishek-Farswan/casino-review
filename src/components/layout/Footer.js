import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">Made by <a href="#">7SR</a> ,2022. All right reserved</div>
          </div>
          <br></br>
          <div>Pic credits</div>
          <div className="text-xxs"><a href="https://www.pexels.com/">Pexels.com</a></div>
          <div className="text-xxs"><a href="https://www.freepik.com/free-photo/group-young-players-are-posing-poker-table-casino-looking-camera-youth-are-making-bets-waiting-big-win-gambling-money-games-fortune_27469940.htm#query=casino%20girl&from_query=casino%20gir&position=33&from_view=search&track=sph">Image by YuliiaKa</a> on Freepik</div>
          <div className="text-xxs"><a href="https://www.freepik.com/free-vector/casino-realistic-composition-with-roulette-wheel-chips-dollar-banknotes-playing-cards-dices-illustration_21744595.htm#page=2&query=cards&position=5&from_view=search&track=sph">Image by macrovector</a> on Freepik</div>
          <div className="text-xxs"><a href="https://www.freepik.com/free-vector/cards-with-casino-coins_1079999.htm#page=2&query=cards&position=49&from_view=search&track=sph">Image by starline</a> on Freepik</div>
        </div>
       
      </div>
         
    </footer>
    
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;