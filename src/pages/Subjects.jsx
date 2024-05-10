import { useState, useEffect } from 'react';

const Users = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5200/subjects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSubjects(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="lg:divide-y lg:divide-gray-700">
        {/* Other elements */}
      </div>
      {/* Loading and error handling */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className="bg-gray-900 w-full">
          <div className="mx-auto max-w-7xl">
            <div className="bg-gray-900 py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto"></div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Add Subject
                    </button>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                              Subject ID
                            </th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                              Trial ID
                            </th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                              First Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                              Last Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                              Date of Birth
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                              Gender
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                              Enrollment Status
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {subjects.map((subject) => (
                            <tr key={subject.subjectID}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                {subject.subjectID}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.trialID}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.firstName}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.lastName}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.dob}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.gender}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{subject.enrollmentStatus}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                  Edit<span className="sr-only">, {subject.name}</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  )
}

export default Users