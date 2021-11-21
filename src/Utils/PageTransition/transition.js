/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* Components */
import './style.scss';

/* Functions */

function Transition() {
  const transitionRef = useRef(null);
  useEffect(() => {
    gsap.to(transitionRef.current, {
      duration: 5,
      x: 2600,
      ease: 'power4',
    });
  });

  return (
    <div>
      <div
        className='transition-effect'
        style={{ backgroundColor: 'purple' }}
        ref={transitionRef}
      ></div>
    </div>
  );
}

export default Transition;
