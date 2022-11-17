import './App.css';
import {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import careerFoundry from "./careerFoundry.png"

function App() {
  
  // for fetching the courses from the API
  const [courses, setCourses] = useState([]);
  // whether the info window is open or not
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  // determine the active course for the
  const [activeCourse, setActiveCourse] = useState(null);
  // an array for the favorite courses
  const [favouriteCourses, setFavouriteCourses] = useState([]);

    const handleCloseInfo = () => {
      setInfoIsOpen(false);
    };
  
    const handleOpenInfo = () => {
      setInfoIsOpen(true);
      console.log("handle open info")
    };

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
      <p>Course selection</p>
      </header>
      <div>
        <div className="App-body">
        {courses.map((course) => {
          return <CourseCard course={course} 
          handleCloseInfo={handleCloseInfo}
          handleOpenInfo={handleOpenInfo}
          infoIsOpen={infoIsOpen}
          activeCourse={activeCourse}
          setActiveCourse={setActiveCourse}
          favouriteCourses={favouriteCourses}
          setFavouriteCourses={setFavouriteCourses}></CourseCard>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
