import Image from 'next/image';

export default function CustomerHeader() {
  return (
    <div className="w-screen flex justify-end gap-8 py-6 pr-16">
      <Image
        src="/icons/notification-button.svg"
        width={32}
        height={32}
        alt="notification button"
      />
      <Image
        src="/icons/shopping-cart.svg"
        width={32}
        height={32}
        alt="shopping cart"
      />
      <div className="flex gap-3 items-center ml-8">
        <Image
          src="/images/profile-pic.svg"
          width={48}
          height={48}
          alt="profile picture"
        />
        <div>
          <p className="font-bold text-gray-800 text-lg">Kavindu Perera</p>
          <p className="text-gray-600 text-sm">Customer</p>
        </div>
      </div>
    </div>
  );
}
