const DetailedMetrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Performance by Channel</h3>
        <p>WhatsApp: 1,200 conversations</p>
        <p>Widget: 300 conversations</p>
        <p>Playground: 500 conversations</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Unresolved Queries</h3>
        <p>50 unresolved queries</p>
      </div>
    </div>
  );
};

export default DetailedMetrics;
