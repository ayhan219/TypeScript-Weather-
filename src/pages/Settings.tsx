import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [unit, setUnit] = useState<'Celsius' | 'Fahrenheit'>('Celsius');
  const [city, setCity] = useState<string>('');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark', theme === 'light');
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value as 'Celsius' | 'Fahrenheit');
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const saveSettings = () => {
    console.log('Settings saved:', { theme, unit, city });
    alert('Settings saved successfully!');
  };

  return (
    <div className="w-full h-screen flex justify-end md:justify-center items-center bg-[#0B121E] text-white pr-2 md:pr-0">
      <div className=" w-[80%] md:w-full max-w-md bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-6 text-center">Settings</h1>

        <div className="space-y-4">
          {/* Theme Switch */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Theme</span>
            <button
              onClick={handleThemeChange}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>

          {/* Unit Selection */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Temperature Unit</span>
            <select
              value={unit}
              onChange={handleUnitChange}
              className="px-3 py-1 text-sm border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none"
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
            </select>
          </div>

          {/* Default City */}
          <div>
            <label htmlFor="city" className="block font-medium mb-1">
              Default City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city"
              className="w-full px-3 py-1 text-sm border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={saveSettings}
              className="px-6 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
