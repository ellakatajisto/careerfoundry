import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import { InfoWindow } from './InfoWindow';

function CourseCard(props) {
    const { setActiveCourse, activeCourse, course, setInfoIsOpen, infoIsOpen, handleOpenInfo, handleCloseInfo } = props;

  const onClick = () => {
    handleOpenInfo()
    //set active course
    const activeCourse = course;
    setActiveCourse(activeCourse)
    console.log(activeCourse)
  }

return (
    <>
<Card sx={{ maxWidth: 345 }} className="Course-card">
      <CardHeader sx={{textTransform: 'upperCase', minHeight: 65}}
        id="card-header"
        // avatar={<Avatar>C</Avatar>}
        title={course.title}
      />
    <CardContent>
        <Button  sx={{ color: 'white', borderColor: 'white', textTransform: 'none' }} className="Card-button" variant="outlined" onClick={onClick}>Learn more</Button>
        <Typography
              sx={{ marginLeft: 4, marginTop: 2 }}
              className="event-time"
              variant="body2"
            >
            {course.next_start_formatted}
        </Typography>
    </CardContent>
    </Card>

<InfoWindow
handleCloseInfo={handleCloseInfo}
handleOpenInfo={handleOpenInfo}
infoIsOpen={infoIsOpen}
setInfoIsOpen={setInfoIsOpen}
course={activeCourse}>
</InfoWindow>
</>
);
}
export default CourseCard;