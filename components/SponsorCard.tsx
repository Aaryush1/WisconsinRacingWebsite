import { SponsorInfo } from "@/types/SponsorInfo";
import { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Backdrop } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function SponsorCard(props: SponsorInfo) {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);
    const handleClose = () => setOpen(false);



    const { name, tier, year, logo, website, description } = props;
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="175"
                    image={logo}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {tier}
                    </Typography>
                    <Backdrop sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}>
                        <div className='image-container' style={{
                            position: 'relative',
                            height: 250,
                            width: 190,
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            <Link href={website}>
                                <Image src={logo} alt={name} fill style={{ marginLeft: '68%' }} loading='lazy' />
                            </Link>
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A proud sponsor since {year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>

                    </Backdrop>
                </CardContent>
            </CardActionArea>
        </Card>


    )
}