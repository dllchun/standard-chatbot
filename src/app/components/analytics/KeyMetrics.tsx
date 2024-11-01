const KeyMetrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Total Conversations</h3>
        <p className="text-3xl font-bold">1,500</p>
        <p className="text-green-500">+10% from last week</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Completion Rate</h3>
        <p className="text-3xl font-bold">92%</p>
        <p className="text-green-500">+5% from last month</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Avg. Response Time</h3>
        <p className="text-3xl font-bold">1.2 seconds</p>
        <p className="text-red-500">-3% slower</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">User Satisfaction</h3>
        <p className="text-3xl font-bold">4.6/5</p>
        <p className="text-green-500">+0.5 stars</p>
      </div>
    </div>
  );
};

export default KeyMetrics;
