import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { TeamLead } from '@/types/TeamLead';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Image from 'next/image';

const style = {
    position: 'absolute',
    top: '8%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'grey.100',
    boxShadow: 24,
    p: 4,
    color: 'text.primary',
    borderRadius: '3%',
};

function TeamMemberModal(props: TeamLead) {
    const { name, image, description, linkedIn, twitter, github, instagram } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Typography variant="body2" color="text.secondary" onClick={handleOpen}>
                More Info
            </Typography>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Grow in={open}>
                    <Box sx={style}>
                        <Image src={image} alt={name} width={300} height={350} />
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                        {linkedIn && <Link target='_blank' href={linkedIn}><LinkedInIcon /></Link>}
                        {github && <Link target='_blank' href={github}><GitHubIcon /></Link>}
                        {instagram && <Link target='_blank' href={instagram}><InstagramIcon /></Link>}
                        {twitter && <Link target='_blank' href={twitter}><TwitterIcon /></Link>}
                        <br />
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleClose}
                        >
                            Close</Button>

                    </Box>
                </Grow  >
            </Modal>
        </>
    )
}

//TODO: Click to add modal anywhere
export default function TeamMemberCard2(props: TeamLead) {
    const { name, title, image } = props;
    return (
        <Card sx={{ maxWidth: 250 }}>
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
                    <br />
                    <TeamMemberModal {...props} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}