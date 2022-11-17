import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CourseCard(props) {
    const { course } = props;
return (
<Card sx={{ maxWidth: 345 }} className="Course-card">
      <CardHeader
        id="card-header"
        avatar={<Avatar>C</Avatar>}
        title={course.title}
      />
    </Card>
);
}
export default CourseCard;