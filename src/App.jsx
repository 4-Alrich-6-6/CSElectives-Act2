const students = [
    { id: 1, name: 'Josh Rendel Blanco', isPresent: true },
    { id: 2, name: 'Jhon Rey Cubalan', isPresent: false },
    { id: 3, name: 'Emman Gabriel Dela Cruz', isPresent: true },
    { id: 4, name: 'Shaine Parazo', isPresent: false },
];

function App() {


  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Student Attendance</h2>
      
      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex justify-between items-center p-3 border bg-orange-200 border-black-600 rounded-lg">
            <span className="text-gray-700 font-medium">{student.name}</span>
            <span
              className={`px-3 py-1 text-sm font-semibold ${
                student.isPresent
                  ? 'bg-green-100 text-green-800 border Aborder-black-600'
                  : 'bg-red-100 text-red-800 border border-black-600'
              }`}
            >
              {student.isPresent ? 'Present' : 'Absent'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;