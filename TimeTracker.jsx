// TimeTracker.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TimeTracker = ({ taskId }) => {
  const [hours, setHours] = useState('');

  const handleTimeSubmit = () => {
    if (hours) {
      axios.post(`/api/tasks/${taskId}/time`, { hours })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
      setHours('');
    }
  };

  return (
    <div>
      <input 
        type="number" 
        value={hours} 
        onChange={(e) => setHours(e.target.value)} 
        placeholder="Hours worked"
      />
      <button onClick={handleTimeSubmit}>Log Time</button>
    </div>
  );
};

export default TimeTracker;
