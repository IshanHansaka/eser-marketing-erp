import React from 'react';

interface StatCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  color?: 'gray' | 'blue' | 'orange';
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color = 'gray' }) => {
  const colorClasses: Record<string, string> = {
    gray: 'bg-gray-50 text-gray-900',
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-medium text-blue-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;