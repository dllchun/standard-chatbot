"use client";

import React, { useState } from "react";
import KeyMetrics from "../components/analytics/KeyMetrics";
import GlobalMap from "../components/analytics/GlobalMap";
import DetailedMetrics from "../components/analytics/DetailedMetrics";
import AudienceDemographics from "../components/analytics/AudienceDemographics";

const AnalyticsPage = () => {
  return (
    <main className="p-6">
      {/* Centered container for all components */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Key Metrics Section (Open by default) */}
        <CollapsibleSection title="Key Metrics" initialCollapsed={false}>
          <KeyMetrics />
        </CollapsibleSection>

        {/* Global Map Section (Collapsed by default) */}
        <CollapsibleSection
          title="Global Performance Map"
          initialCollapsed={true}
        >
          <GlobalMap />
        </CollapsibleSection>

        {/* Detailed Metrics Section (Collapsed by default) */}
        <CollapsibleSection title="Detailed Metrics" initialCollapsed={true}>
          <DetailedMetrics />
        </CollapsibleSection>

        {/* Audience Demographics Section (Collapsed by default) */}
        <CollapsibleSection
          title="Audience Demographics"
          initialCollapsed={true}
        >
          <AudienceDemographics />
        </CollapsibleSection>
      </div>
    </main>
  );
};

export default AnalyticsPage;

/* Collapsible Section Component */
const CollapsibleSection = ({
  title,
  children,
  initialCollapsed = true, // Default collapsed behavior
}: {
  title: string;
  children: React.ReactNode;
  initialCollapsed?: boolean;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          className="text-sm text-blue-500"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      {/* Collapsible content with height limitation */}
      {!isCollapsed && (
        <div className="mt-4 h-64 sm:h-80 lg:h-96 max-h-96 overflow-auto">
          {children}
        </div>
      )}
    </section>
  );
};
