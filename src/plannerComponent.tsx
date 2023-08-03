import React, { useEffect } from 'react';
import axios from 'axios';

const planner: React.FC = () => {
  useEffect(() => {
    loadExternalContent();
  }, []);

  const loadExternalContent = async () => {
    const url = 'assets/planner-files/planner.html';
    try {
      const response = await axios.get(url);
      const element = document.getElementById('Planner');
      console.log(element);
      if (element) {
        element.innerHTML = response.data;
        loadCSSFile();
        loadJSFile('assets/planner-files/planner.js');
        loadPNGFile('assets/planner-files/kyros.png');
      }
    } catch (error) {
      console.error('Error loading external content:', error);
    }
  };

  const loadCSSFile = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/planner-files/planner.css';
    document.head.appendChild(link);
  };

  const loadJSFile = (src: string) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  };

  const loadPNGFile = (src: string) => {
    const img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
  };

  return (
    <div id='Planner'>

    </div>
  );
};

export default planner;