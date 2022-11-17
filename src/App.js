import './App.css';
import {useEffect, useState} from 'react';

function App() {
  // for fetching the courses from the API
  const [courses, setCourses] = useState([]);

  // useEffect -> without dependencies, only trigger on first render
  useEffect(() => {
    fetch("https://private-e05942-courses22.apiary-mock.com/courses")
      .then((res) => res.json())
      .then((json) => {
        const courses = json;
        setCourses(courses);
        console.log("courses", courses)
      });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div>
        <p>Take a look at the courses!</p>
        {courses.map(({title}) => (
          <p>Course name: {title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
