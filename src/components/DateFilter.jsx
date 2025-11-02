import { useState } from 'react';

const DateFilter = ({ onFilter, onClear }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilter = () => {
    if (startDate || endDate) {
      onFilter(startDate, endDate);
      setIsFilterActive(true);
    }
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setIsFilterActive(false);
    onClear();
  };

  const handleQuickFilter = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);

    const endDateStr = end.toISOString().split('T')[0];
    const startDateStr = start.toISOString().split('T')[0];

    setStartDate(startDateStr);
    setEndDate(endDateStr);
    onFilter(startDateStr, endDateStr);
    setIsFilterActive(true);
  };

  return (
    <div className="neon-card p-6 mb-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* Filter Title */}
        <div className="flex-shrink-0">
          <h3 className="text-xl font-bold neon-text-purple font-orbitron mb-2">
            Filter by Date
          </h3>
          <p className="text-sm text-gray-400">
            Find articles from specific time periods
          </p>
        </div>

        {/* Date Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 flex-grow">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neon-blue mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="neon-input w-full"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-neon-blue mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="neon-input w-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleFilter}
            disabled={!startDate && !endDate}
            className="neon-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Apply Filter
          </button>

          {isFilterActive && (
            <button
              onClick={handleClear}
              className="neon-button bg-transparent border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Quick Filter Buttons */}
      <div className="mt-6 pt-6 border-t border-neon-blue/20">
        <p className="text-sm text-gray-400 mb-3">Quick Filters:</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleQuickFilter(7)}
            className="px-4 py-2 text-sm bg-card-bg border border-neon-green/30 text-neon-green rounded hover:border-neon-green hover:bg-neon-green/10 transition-all"
          >
            Last 7 Days
          </button>
          <button
            onClick={() => handleQuickFilter(30)}
            className="px-4 py-2 text-sm bg-card-bg border border-neon-green/30 text-neon-green rounded hover:border-neon-green hover:bg-neon-green/10 transition-all"
          >
            Last 30 Days
          </button>
          <button
            onClick={() => handleQuickFilter(90)}
            className="px-4 py-2 text-sm bg-card-bg border border-neon-green/30 text-neon-green rounded hover:border-neon-green hover:bg-neon-green/10 transition-all"
          >
            Last 3 Months
          </button>
        </div>
      </div>

      {/* Filter Status */}
      {isFilterActive && (
        <div className="mt-4 p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-neon-green font-medium">
              Filter Active: {startDate && `From ${startDate}`} {startDate && endDate && ' - '} {endDate && `To ${endDate}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
