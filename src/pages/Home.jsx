import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import work_data from '../data/design_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import about_data from '../data/about_data';

import Header from '../components/Header';
import NavButton from '../components/NavButton';
import waveform from '../waveform.json';

function resampleArray(data, targetLength) {
  const result = [];
  for (let i = 0; i < targetLength; i++) {
    const index = Math.floor(i * data.length / targetLength);
    result.push(data[index]);
  }
  return result;
}

function Home() {
    const { hash } = useLocation();
    const [hoveredSection, setHoveredSection] = useState(null);
    const [backgroundStyle, setBackgroundStyle] = useState({});
    
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const containerRef = useRef(null);
    const backgroundRef = useRef(null);

    const handleNavButtonHover = (section, time) => {
        setHoveredSection(section);
        
        // Calculate fill percentage based on time
        const totalDuration = 264; // 4:24 in seconds
        const [minutes, seconds] = time.split(':').map(Number);
        const timeInSeconds = minutes * 60 + seconds;
        const fillPercentage = (timeInSeconds / totalDuration) * 100;
        
        // Update CSS custom property for dynamic fill
        if (backgroundRef.current) {
            backgroundRef.current.style.setProperty('--fill-percentage', `${fillPercentage}%`);
        }
    };

    const handleNavButtonLeave = () => {
        setHoveredSection(null);
        // Reset fill percentage
        if (backgroundRef.current) {
            backgroundRef.current.style.setProperty('--fill-percentage', '0%');
        }
    };

    const updateBackgroundPosition = () => {
        const container = containerRef.current;
        const background = backgroundRef.current;
        if (!container || !background) return;

        const containerRect = container.getBoundingClientRect();
        const mainRect = background.parentElement.getBoundingClientRect();
        
        setBackgroundStyle({
            position: 'absolute',
            top: `${containerRect.top - mainRect.top}px`,
            left: `${containerRect.left - mainRect.left}px`,
            width: `${containerRect.width}px`,
            height: `${containerRect.height}px`,
            zIndex: 0,
            pointerEvents: 'none'
        });
    };

    const renderWaveform = () => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = '';

        const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const barGapRem = 0.5;
        const barWidthRem = 0.25;
        const barGap = barGapRem * remInPx;
        const barWidth = barWidthRem * remInPx;

        const containerWidth = container.offsetWidth;
        const maxBars = Math.floor(containerWidth / (barWidth + barGap));
        const sampled = resampleArray(waveform, maxBars);

        sampled.forEach(value => {
            const bar = document.createElement('div');
            bar.style.height = `${value * 100}%`;
            bar.style.width = `${barWidth}px`;
            bar.style.background = 'black';
            bar.style.flex = '0 0 auto';
            container.appendChild(bar);
        });

        // Update background position after rendering waveform
        setTimeout(updateBackgroundPosition, 0);
    };

    useEffect(() => {
        renderWaveform();
        window.addEventListener('resize', () => {
            renderWaveform();
            updateBackgroundPosition();
        });
        return () => window.removeEventListener('resize', renderWaveform);
    }, []);

  return (
    <main className="home">
        {/* Background container that sits behind the waveform */}
        <div 
            ref={backgroundRef}
            className={`waveform-background ${hoveredSection ? `hover-${hoveredSection.toLowerCase()}` : ''}`}
            style={backgroundStyle}
        />
        <div className='container home'>
            <Header home={true}/>
            <div id='home-grid'>
                <h2>JEFFCHANG.MP3</h2>
                <div ref={containerRef}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '4rem',
                        width: '100%',
                        gap: '0.5rem',
                        alignSelf: 'center',
                        justifySelf: 'stretch',
                        position: 'relative',
                        zIndex: 1
                    }}>
                </div>
                <div>
                    <NavButton 
                        time={"0:52"} 
                        text={"Design"} 
                        link={"/Design"}
                        onMouseEnter={() => handleNavButtonHover('Design', '0:52')}
                        onMouseLeave={handleNavButtonLeave}
                    />
                    <NavButton 
                        time={"1:26"} 
                        text={"Film"} 
                        link={"/Film"}
                        onMouseEnter={() => handleNavButtonHover('Film', '1:26')}
                        onMouseLeave={handleNavButtonLeave}
                    />
                    <NavButton 
                        time={"2:12"} 
                        text={"Music"}  
                        link={"/Recollections"}
                        onMouseEnter={() => handleNavButtonHover('Music', '2:12')}
                        onMouseLeave={handleNavButtonLeave}
                    />
                    <NavButton 
                        time={"3:18"} 
                        text={"Research"} 
                        link={"/Reflection"}
                        onMouseEnter={() => handleNavButtonHover('Research', '3:18')}
                        onMouseLeave={handleNavButtonLeave}
                    />
                    <NavButton 
                        time={"4:24"} 
                        text={"About"} 
                        link={"/About"}
                        onMouseEnter={() => handleNavButtonHover('About', '4:24')}
                        onMouseLeave={handleNavButtonLeave}
                    />
                </div>
            </div>
            <div className='body' style={{display:"flex", flexDirection:"column", whiteSpace:"pre-line", gap:"0.25rem", width:"100%"}}>
                <p>// A technical product designer blending engineering rigor and musical creativity to build tools that empower creative expression.</p>
            </div>
        </div>
    </main>
  )
}

export default Home