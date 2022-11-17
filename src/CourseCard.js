import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { InfoWindow } from "./InfoWindow";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/FavoriteBorder";

function CourseCard(props) {
  const {
    setActiveCourse,
    activeCourse,
    course,
    infoIsOpen,
    handleOpenInfo,
    handleCloseInfo,
    favouriteCourses,
    setFavouriteCourses,
  } = props;

  const onClick = () => {
    handleOpenInfo();
    //set active course
    const activeCourse = course;
    setActiveCourse(activeCourse);
    console.log(activeCourse);
  };

  const addToFavourites = () => {
    const newFavourite = course;
    setFavouriteCourses([...favouriteCourses, newFavourite]);
    console.log(favouriteCourses);
  };

  const deleteFromFavourites = () => {
    const filteredArray = favouriteCourses.filter((item) => item !== course);
    setFavouriteCourses(filteredArray);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="Course-card">
        <CardHeader
          sx={{ textTransform: "upperCase", minHeight: 65 }}
          id="card-header"
          title={course.title}
        />
        <CardContent>
          <Button
            sx={{ color: "white", borderColor: "white", textTransform: "none" }}
            className="Card-button"
            variant="outlined"
            onClick={onClick}
          >
            Learn more
          </Button>
          <Typography
            sx={{ marginLeft: 4, marginTop: 2 }}
            className="event-time"
            variant="body2"
          >
            {course.next_start_formatted}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            {!favouriteCourses.includes(course) ? (
              <FavoriteBorder
                sx={{ color: "white" }}
                onClick={addToFavourites}
              />
            ) : (
              <Favorite
                sx={{ color: "#a35b4f" }}
                onClick={deleteFromFavourites}
              />
            )}
          </IconButton>
        </CardActions>
      </Card>

      {infoIsOpen && (
        <InfoWindow
          handleCloseInfo={handleCloseInfo}
          infoIsOpen={infoIsOpen}
          course={activeCourse}
        ></InfoWindow>
      )}
    </>
  );
}
export default CourseCard;
