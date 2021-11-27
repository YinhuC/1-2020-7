/* Third Party */
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitText from '../../../Utils/Split3.min.js';

/* Components */
import { CovidContainer } from './style';

/* Functions */

function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const split = new SplitText('#disclaimer', {
      type: 'lines',
    });

    gsap.from('aa', {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',

      scrollTrigger: {
        trigger: '#disclaimer',
      },
    });
  });

  return <CovidContainer className='covid'></CovidContainer>;
}

export default ContactSection;
