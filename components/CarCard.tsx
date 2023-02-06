import { CarInfo } from '../types/CarInfo';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, Grow, Backdrop } from '@mui/material';
import { useState } from 'react';
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

export default function CarCard(carInfo: CarInfo) {
    const { name, year, image, weight, position, ...details } = carInfo;
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);
    const handleClose = () => setOpen(false);

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
                    <br />
                    <Backdrop sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}>
                        <Grow in={open}>
                            <Box sx={style}>
                                <Typography variant="h4" component="div" gutterBottom>
                                    {name}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    {year}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    {weight}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    {position}
                                </Typography>
                            </Box>
                        </Grow>
                    </Backdrop>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}