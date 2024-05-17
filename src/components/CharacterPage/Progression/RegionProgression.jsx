function RegionProgression({ regionName, completion, setCompletion }) {
    const handleDailyChange = (e) => {
      setCompletion({ ...completion, daily: e.target.checked });
    };
  
    const handleWeeklyChange = (e) => {
      setCompletion({ ...completion, weekly: e.target.checked });
    };
  
    return (
      <div>
        <h2>{regionName}</h2>
        <label>
          <input type="checkbox" checked={completion.daily} onChange={handleDailyChange} />
          Daily
        </label>
        <label>
          <input type="checkbox" checked={completion.weekly} onChange={handleWeeklyChange} />
          Weekly
        </label>
      </div>
    );
  }

  export default RegionProgression;