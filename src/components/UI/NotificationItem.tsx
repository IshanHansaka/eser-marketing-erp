import type { ReactNode } from 'react';
import { Bell, X } from 'lucide-react';

export interface NotificationItemProps {
  icon?: ReactNode;
  title: string;
  date?: string | ReactNode;
  onDismiss?: () => void;
}
export default function NotificationItem({
  title,
  date,
  onDismiss,
}: NotificationItemProps) {
  return (
    <div className="flex items-start gap-4 py-4 px-2 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <div className="text-blue-800">
          <Bell size={20} />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-gray-800 text-sm leading-relaxed">{title}</p>
        <p className="text-gray-500 text-xs mt-1">{date}</p>
      </div>

      <button
        onClick={onDismiss}
        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Dismiss notification"
      >
        <X size={18} />
      </button>
    </div>
  );
}
