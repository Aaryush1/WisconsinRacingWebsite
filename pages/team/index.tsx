import TeamMemberCard from '@/components/TeamMemberCard'
import TeamMemberCard2 from '@/components/TeamMemberCard2'
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export default function Team() {
    return (
        <div>
            < br />
            <Typography variant='h2' sx={{ px: 76 }}>
                Our Team
            </Typography>
            <br />

            <Grid2 container spacing={4} textAlign='center' marginLeft={15}>
                <Grid2 xs={4}>
                    <TeamMemberCard
                        name='Amir Shukle'
                        title='Team Principal'
                        image={'/amir.JPG'}
                        description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Amir Shukle'
                        title='Team Principal'
                        image={'/amir.JPG'}
                        description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.'
                        linkedIn='https://www.linkedin.com/in/amir-shukle' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Amir Shukle'
                        title='Team Principal'
                        image={'/amir.JPG'}
                        description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.'
                        linkedIn='https://www.linkedin.com/in/amir-shukle' />
                </Grid2>
            </Grid2>

        </div >
    )
}
