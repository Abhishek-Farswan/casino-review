import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'All reviews displayed here are from happy customers who enjoyed playing casinos listed in our website. These all reviews have been taken from Trustpilot, feel free to visit their website.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right comments" data-reveal-delay="200"  style={{color: "red"}}>
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{color: "white"}}>
                    — THIS CASINO IS SIMPLY AWESOME, I MADE A BIIIIIG WIN in 10001 slots today. THIS IS AMAZING, UNBELIEVABLE. The payout are sent out in 24-48 hours. I have been to vegas/singapore to gamble, but this is the best casino HANDS DOWN!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Review of</span>
                  <span className="testimonial-item-link">
                    <a href="#0"> BigBaazi</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{color: "white"}}>
                    — Trustful casino days service no.1 genuine casino my matter solve in half hour and ebery slot every table games they have i m really glad i played casino days and won and verify your account then they withdwal money in 24 hours love you by the way casino days.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Review of</span>
                  <span className="testimonial-item-link">
                    <a href="#0"> CasinoDays </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{color: "white"}}>
                    — Love it!
For the last month, I have joined this platform for playing games. On the platform of purewin, There are lots of contestants who compete with each other. I love to compete with other players and Enjoy my free time. Happy client!!!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Review of</span>
                  <span className="testimonial-item-link">
                    <a href="#0"> PureWin</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;