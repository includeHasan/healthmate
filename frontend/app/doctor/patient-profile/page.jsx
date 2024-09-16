'use client'
const ProfileCard = () => {
  return (
      <div className="flex items-center p-4 bg-white shadow rounded-lg space-x-4">
          <img src="https://placehold.co/50x50" alt="Profile picture of Stephan Bastian" className="w-12 h-12 rounded-full" />
          <div className="flex-grow">
              <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-semibold">Stephan Bastian</h2>
                  <i className="fas fa-star text-yellow-500"></i>
              </div>
              <div className="text-sm text-gray-600">
                  <span>08/04/1959 (64y) Male</span> &bull; <span>MRN 456789</span> &bull; <span>(701) 293-4945</span>
              </div>
              <div className="text-sm text-gray-600">
                  <span>900 Oak Ridge Cir, Brighton, MI 48116</span>
              </div>
          </div>
          <div className="flex space-x-4">
              <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
                  <span className="text-xs text-gray-500">Eligibility</span>
                  <span className="text-sm font-semibold">Eligible</span>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
                  <span className="text-xs text-gray-500">PCP</span>
                  <span className="text-sm font-semibold">Dawn Baker, MD</span>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
                  <span className="text-xs text-gray-500">Acuity Risk Level</span>
                  <span className="text-sm font-semibold text-red-500">High</span>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
                  <span className="text-xs text-gray-500">Allergies</span>
                  <span className="text-sm font-semibold">Sulfur</span>
              </div>
          </div>
      </div>
  );
};

export default ProfileCard;