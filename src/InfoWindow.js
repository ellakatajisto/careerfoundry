import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function InfoWindow(props) {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };

    const { course, infoIsOpen,  handleCloseInfo } = props;

    return (
        <>
          <Modal
            open={infoIsOpen}
            onClose={handleCloseInfo}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }}>
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                        primary={course.title}
                        secondary={course.next_start_formatted}>
                        </ListItemText>
                      </ListItem>
                    </>
            </Box>
          </Modal>
        </>
      );
}