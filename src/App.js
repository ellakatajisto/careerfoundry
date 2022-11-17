import './App.css';
import {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import careerFoundry from "./careerFoundry.png"

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
      <header className="App-header">
       <img src={careerFoundry} id="careerfoundry-icon"></img>
      <p>Take a look at our courses!</p>
      </header>
      <div>
        <div className="App-body">
        {courses.map((course) => {
          return <CourseCard course={course}></CourseCard>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
