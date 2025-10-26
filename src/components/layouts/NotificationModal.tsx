import { Bell, X } from 'lucide-react';
import NotificationItem, {
  NotificationItemProps,
} from '../UI/NotificationItem';

export interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Array<NotificationItemProps & { id: number }>;
  onDismissNotification: (id: number) => void;
}

export default function NotificationModal({
  isOpen,
  onClose,
  notifications,
  onDismissNotification,
}: NotificationModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900">Notifications</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center hover:bg-blue-50 transition-colors"
            aria-label="Close notifications"
          >
            <X size={20} className="text-blue-900" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto h-[calc(100%-80px)]">
          {notifications.length > 0 ? (
            <div className="px-4">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  title={notification.title}
                  date={notification.date}
                  onDismiss={() => onDismissNotification(notification.id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Bell size={48} className="mb-4" />
              <p className="text-lg">No notifications</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
