import { useState } from 'react';
import styles from '@/styles/Team.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TeamLead } from '@/types/TeamLead';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Backdrop from '@mui/material/Backdrop';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import Image from 'next/image';


const style = {
    position: 'absolute',
    top: '14%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'grey.100',
    boxShadow: 24,
    p: 1,
    color: 'text.primary',
    borderRadius: '3%',
};

//TODO: Fix modal image
export default function TeamMemberCard2(props: TeamLead) {
    const { name, image, title, description, linkedIn, twitter, github, instagram } = props;
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ maxWidth: 250 }} onClick={handleToggle}>
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
                    {linkedIn && <Link target='_blank' href={linkedIn}><LinkedInIcon sx={{ fill: '#0072B1' }} /></Link>}
                    {github && <Link target='_blank' href={github}><GitHubIcon sx={{ fill: '#171515' }} /></Link>}
                    {instagram && <Link target='_blank' href={instagram}><InstagramIcon sx={{ fill: '#bc2a8d' }} /></Link>}
                    {twitter && <Link target='_blank' href={twitter}><TwitterIcon sx={{ fill: '#1DA1F2' }} /></Link>}
                    <Backdrop sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}>
                        <Grow in={open}>
                            <Box sx={style}>
                                <Grid2 container>
                                    <Grid2 xs={12}>
                                        <div className='image-container' style={{
                                            position: 'relative',
                                            height: 250,
                                            width: 190,
                                            justifyContent: 'center',
                                            display: 'flex',
                                        }}>
                                            <Image src={image} alt={name} fill style={{ marginLeft: '68%' }} loading='lazy' />
                                        </div>
                                    </Grid2>
                                    <Grid2>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            {name}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            {description}
                                        </Typography>
                                        <br />
                                        {linkedIn && <Link target='_blank' href={linkedIn}><LinkedInIcon sx={{ fill: '#0072b1' }} /></Link>}
                                        {github && <Link target='_blank' href={github}><GitHubIcon sx={{ fill: '#171515' }} /></Link>}
                                        {instagram && <Link target='_blank' href={instagram}><InstagramIcon sx={{ fill: '#bc2a8d' }} /></Link>}
                                        {twitter && <Link target='_blank' href={twitter}><TwitterIcon sx={{ fill: '#1DA1F2' }} /></Link>}
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grow  >
                    </Backdrop>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}