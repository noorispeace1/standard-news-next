export const metadata = {
  title: "Standard News - Careers",
  description: "Join the team at Standard News, the most trusted news portal in Bangladesh. Explore opportunities in journalism, media, and technology.",
};

const CareerPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Banner */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Work with the Best</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Be part of the most trusted news portal in Bangladesh. Help us tell stories that matter.
        </p>
      </section>

      {/* 2. About the Company / Culture */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Standard News?</h2>
            <p className="text-gray-600 mb-4">
              At Standard News, we believe in truth, integrity, and the power of information. 
              Our team consists of passionate journalists, creative designers, and tech-savvy 
              developers working together to keep Bangladesh informed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Competitive Salaries & Benefits
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Dynamic & Inclusive Workspace
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Continuous Professional Growth
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center italic text-gray-500">
            [Add Company Office Image Here]
          </div>
        </div>
      </section>

      {/* 3. Current Openings Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Current Openings</h2>
          
          <div className="space-y-4">
            {/* Job Item 1 */}
            <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Senior News Reporter</h3>
                <p className="text-gray-500">Dhaka, Bangladesh • Full-time</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Item 2 */}
            <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-800">UX/UI Designer</h3>
                <p className="text-gray-500">Remote / Dhaka • Full-time</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don’t see a fit? Send your CV to <strong>hr@standardnews.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;