import React, { useEffect, useState, useRef } from 'react';
import '../style/Skills.css';

function Skills() {
  const [visibleElements, setVisibleElements] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.getAttribute('data-index');
            setVisibleElements((prev) => [...new Set([...prev, target])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.slider .value');
    elements.forEach((el, index) => {
      el.setAttribute('data-index', index);
      observer.current.observe(el);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="skills">
        <div className="skills-card">
          <h2 className="title">Skills</h2>
          <div className="space-title"></div>

          <div className="score">
            <h3 className="score-title">HTML</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('0') ? 'visible' : ''}`} style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">CSS</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('1') ? 'visible' : ''}`} style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">JavaScript</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('2') ? 'visible' : ''}`} style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">Dart</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('3') ? 'visible' : ''}`} style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">Java</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('4') ? 'visible' : ''}`} style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">Python</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('5') ? 'visible' : ''}`} style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">C</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('6') ? 'visible' : ''}`} style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">C++</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('7') ? 'visible' : ''}`} style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="space-title"></div>

          <h2 className="title">Frameworks and Libraries</h2>
          <div className="space-title"></div>

          <div className="score">
            <h3 className="score-title">Flutter</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('8') ? 'visible' : ''}`} style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">Flask</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('9') ? 'visible' : ''}`} style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">SwiftUI</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('10') ? 'visible' : ''}`} style={{ width: '55%' }}></div>
            </div>
          </div>

          <div className="score">
            <h3 className="score-title">React</h3>
            <div className="slider">
              <div className={`value ${visibleElements.includes('11') ? 'visible' : ''}`} style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
