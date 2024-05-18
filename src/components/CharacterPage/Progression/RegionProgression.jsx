import "../characterStyle.css";

function RegionProgression({ regionName, regionClass, completion, setCompletion }) {
  const handleDailyChange = (e) => {
    setCompletion({ ...completion, daily: e.target.checked });
  };

  const handleWeeklyChange = (e) => {
    setCompletion({ ...completion, weekly: e.target.checked });
  };

  return (
    <div className={`regionProgression ${regionClass}`}>
      <h5>{regionName}</h5>
      <div class="completionBoxes">
        <div class="regionCheckBox">
          <label>Daily</label>
          <input type="checkbox" checked={completion.daily} onChange={handleDailyChange} />
        </div>
        <div class="regionCheckBox">
          <label>Weekly</label>
          <input type="checkbox" checked={completion.weekly} onChange={handleWeeklyChange} />
        </div>
      </div>
    </div>
  );
}

export default RegionProgression;