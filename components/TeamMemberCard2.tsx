import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { TeamLead } from '../pages/team';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Fade';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'grey.100',
    boxShadow: 24,
    p: 4,
    color: 'text.primary',
    borderRadius: '3%',
};

//TODO: Add a create a component for what modal displays    
export default function TeamMemberCard2({ name, title, image, description }: TeamLead) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ maxWidth: 250 }} onClick={handleOpen}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="175"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {title}
                    </Typography>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Grow in={open}>
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {name}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {description}
                                </Typography>
                            </Box>
                        </Grow  >
                    </Modal>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}