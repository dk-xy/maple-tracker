import "../characterStyle.css";
import { useContext } from "react";
import { CharacterContext } from "../../../contexts/context";

function RegionProgression({ key, regionName, regionClass, completion, setCompletion, character }) {
  // const handleDailyChange = (e) => {
  //   setCompletion({ ...completion, daily: e.target.checked });
  // };

  // const handleWeeklyChange = (e) => {
  //   setCompletion({ ...completion, weekly: e.target.checked });
  // };

  // const handleDailyChange = (e) => {
  //   setCompletion(prevCompletion => ({ ...prevCompletion, daily: e.target.checked }));
  // };

  // const handleWeeklyChange = (e) => {
  //   setCompletion(prevCompletion => ({ ...prevCompletion, weekly: e.target.checked }));
  // };
  const progressionData = JSON.parse(localStorage.getItem('Progression')) || {};
  const regions = progressionData[character.id]?.arcaneRiver?.regions || {};


  const handleCheckboxChange = (regionName, completionType, isChecked) => {
    let progressionData = JSON.parse(localStorage.getItem('progression')) || {};
    if (progressionData[character.id]?.arcaneRiver?.regions?.[regionName]) {
      progressionData[character.id].arcaneRiver.regions[regionName].completion[completionType] = isChecked;
    }
    localStorage.setItem('Progression', JSON.stringify(progressionData));
  }


  return (
    <div className={`regionProgression ${regionClass}`}>
    <h5>{regionName}</h5>
    <div class="completionBoxes">
      <div class="regionCheckBox">
        <label>Daily
          <input
            type="checkbox"
            checked={regions[regionName]?.completion?.daily || false}
            onChange={e => handleCheckboxChange(regionName, 'daily', e.target.checked)}
          />
        </label>
      </div>
      <div class="regionCheckBox">
        <label>Weekly
          <input
            type="checkbox"
            checked={regions[regionName]?.completion?.weekly || false}
            onChange={e => handleCheckboxChange(regionName, 'weekly', e.target.checked)}
          />
        </label>
      </div>
    </div>
  </div>
  );
}

export default RegionProgression;