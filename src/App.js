import "./App.css";
import students from "./students";
function App() {
  console.log(students);
  return (
    <div className="App">
      <h1>Thong tin sinh vien</h1>
      <div>
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
