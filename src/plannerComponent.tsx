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
      window.addEventListener('load', () => {
        const element = document.getElementById('calendar');
        if (element) {
          element.innerHTML = response.data;
        }
      });
    } catch (error) {
      console.error('Error loading external content:', error);
    }
  };
  return (
    <div id='planner'>
      {/* The loaded content will be inserted here */}
    </div>
  );
};

export default planner;