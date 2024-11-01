const AudienceDemographics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Platform Usage</h3>
        <p>WhatsApp: 60%</p>
        <p>Widget: 30%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Device Breakdown</h3>
        <p>Mobile: 70%</p>
        <p>Desktop: 20%</p>
      </div>
    </div>
  );
};

export default AudienceDemographics;
