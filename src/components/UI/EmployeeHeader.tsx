import Image from 'next/image';

export default function EmployeeHeader() {
  return (
    <div className="w-screen flex justify-end gap-10 py-6 pr-16">
      <Image
        src="/icons/notification-button.svg"
        width={32}
        height={32}
        alt="notification button"
      />
      <div className="flex gap-3 items-center">
        <Image
          src="/images/profile-pic.svg"
          width={48}
          height={48}
          alt="profile picture"
        />
        <div>
          <p className="font-bold text-gray-800 text-lg">Kavindu Perera</p>
          <p className="text-gray-600 text-sm">Employee</p>
        </div>
      </div>
    </div>
  );
}
