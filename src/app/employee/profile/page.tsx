export default function Profile() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">My Profile</h1>
        <p className="text-gray-600">
          Manage your personal information and keep your profile up to date.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl">👤</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Anne Perera</h2>
              <p className="text-gray-600">anneperera@gmail.com</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
            Edit
          </button>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              Anne Perera
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Employee Id
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              E0234
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Job Title
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              Sales Operator
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Department
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              Sales
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              Female
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              1999-02-26
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telephone Number
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              +94 71 980 3428
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-500">
              No.08, Park Lane, Nugegoda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
