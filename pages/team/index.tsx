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
                    <TeamMemberCard2
                        name='Amir Shukle'
                        title='Team Principal & Aerodynamics/Composites Lead'
                        image={'/amir.JPG'}
                        description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.'
                        linkedIn='https://www.linkedin.com/in/amir-shukle'
                        github='https://github.com/Aaryush1/WisconsinRacingWebsite' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Isaac Hewett'
                        title='Mechanical Technical Director'
                        image={''}
                        description='I am a committed, responsible, hard-working, dedicated problem-solver. I am excited about solving difficult engineering challenges that have never been solved before in a fast-paced environment. I particularly like working in a collaborative team environment where I can contribute and learn from my peers. I constantly try new things and pride myself on being innovative. I jump right in to figure things out.'
                        linkedIn='https://www.linkedin.com/in/amir-shukle'
                        github='https://github.com/Aaryush1/WisconsinRacingWebsite' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Christian Schuster'
                        title='Electrical Technical Director'
                        image={'/christian.JPG'}
                        description=''
                        linkedIn='https://www.linkedin.com/in/christian-schuster-8b98601ba/'
                        github='https://github.com/Aaryush1/WisconsinRacingWebsite' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Cade Fink'
                        title='Operations Manager'
                        image={'/cade.JPG'}
                        description='I am a huge people person! I have valued building relationships with customers and coworkers in every job I have held. I love trying new things and exploring different trains of thought. Accordingly, I believe that it is primarily through professional collaboration that innovations are created.'
                        linkedIn='https://www.linkedin.com/in/cade-fink-683b25178/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Cassie Mangiulli'
                        title='Business Lead'
                        image={'/cassie.JPG'}
                        description='Business Lead'
                        linkedIn='https://www.linkedin.com/in/casandra-mangiulli-68776a230/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Rachel Mangiulli'
                        title='Business Lead'
                        image={'/rachel.JPG'}
                        description='Business Lead'
                        linkedIn='https://www.linkedin.com/in/rachel-mangiulli-9a6272205/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Logan Maurer'
                        title='Aerodynamics/Composites Lead'
                        image={'/logan.JPG'}
                        description='Mechanical Engineering student studying at the University of Wisconsin-Madison. Main areas of interest are CFD simulation, 3D printing, and FSAE. Currently a Co-Lead of the Aerodynamics and Composite Structures sub-team for FSAE. Building two student-designed racecars at a time.'
                        linkedIn='https://www.linkedin.com/in/logan-samuel-maurer-a74491206/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Natalie Skiest'
                        title='Chassis Lead'
                        image={'/natalie.JPG'}
                        description='I am a Mechanical Engineering student at the University of Wisconsin-Madison. In addition, I am a member of these engineering organizations: Formula SAE, and Wisconsin Engineering Student Council. I am also a Women in Science and Engineering Alumni.'
                        linkedIn='https://www.linkedin.com/in/natalie-skiest/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Josh Wendt'
                        title='Chassis Lead'
                        image={'/joshw.JPG'}
                        description='Chassis Lead'
                        linkedIn='https://www.linkedin.com/in/joshua-wendt-167246214/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Sam Roslansky'
                        title='Powertrain Lead'
                        image={'/sam.JPG'}
                        description='Powertrain Lead'
                        linkedIn='https://www.linkedin.com/in/sam-roslansky-970a5a200/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Luke Osler'
                        title='Powertrain Lead'
                        image={'/luke.JPG'}
                        description='Powertrain Lead'
                        linkedIn='https://www.linkedin.com/in/luke-osler/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Josh Gottlieb'
                        title='Electric Drivetrain Lead'
                        image={'/joshG.JPG'}
                        description='I am a student in the class of 2024 at the University of Wisconsin - Madison, pursuing a degree in Electrical Engineering with a certificate in Engineering for Energy Sustainability. As a driven student, I am passionate about using my education to solve the issues that stem from climate change.'
                        linkedIn='https://www.linkedin.com/in/josh-gottlieb-5aa1651a0/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Michael Lang'
                        title='Electric Drivetrain Lead'
                        image={'/michael.JPG'}
                        description='Electric Drivetrain Lead'
                        linkedIn='https://www.linkedin.com/in/michael-lang-2474b6205/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Zachariah Bath'
                        title='Battery Lead'
                        image={'/zach.JPG'}
                        description='Looking for a summer internship that provides experience in the field of mechanical engineering, specifically in design work. Enrolled at the University of Wisconsin - Madison as a junior undergraduate in Mechanical Engineering and Physics with a GPA of 3.84/4.0. Currently in a co-op position for Extreme Engineering Solutions in Verona, Wisconsin. Previous jobs include undergraduate research assistant, seasonal laborer for the City of Fond du Lac, and a Stocker/Customer Service worker at True Value.'
                        linkedIn='https://www.linkedin.com/in/zachariahbath/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Alex Grotelueschen'
                        title='High Voltage Electronics Lead'
                        image={'/alex.JPG'}
                        description='Junior is Computer Engineering at UW-Madison interested in Computer Architecture Design, PCB Design, and Firmware Design'
                        linkedIn='https://www.linkedin.com/in/alex-grotelueschen/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Calvin Geishirt'
                        title='Low Voltage Electronics Lead'
                        image={'/calvin.JPG'}
                        description="Most of my work experience up until this point has been in the service industry, which has taught me many useful skills.
 I have always excelled at staying calm under pressure, and the service industry has only strengthened that skill. I often find myself in high stress situations where problems arise, and we don't have the staff or the time to properly address them, but I am always able to find creative ways to efficiently solve problems, while always ensuring that our guests have the best possible experience."
                        linkedIn='https://www.linkedin.com/in/calvin-geishirt-b59629233/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Pratham Sarvaiya'
                        title='Low Voltage Electronics Lead'
                        image={'/pratham.JPG'}
                        description='Low Voltage Electronics Lead'
                        linkedIn='https://www.linkedin.com/in/prathamsarvaiya/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Surya Raghavendran'
                        title='Controls Lead'
                        image={'/surya.jpg'}
                        description='I am interested in automotive electrification with a focus on controls and vehicle dynamics . After closing my screen repair business in Ann Arbor, I have learned valuable customer service and electronic repair skills. I will be attending the College of Engineering at the University of Wisconsin-Madison and majoring in Electrical Engineering.'
                        linkedIn='https://www.linkedin.com/in/suryarag/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Shrey Patel'
                        title='Controls Lead'
                        image={'/shrey.JPG'}
                        description='Controls Lead'
                        linkedIn='https://www.linkedin.com/in/shrey-patel-a73989141/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Eric Li'
                        title='Firmware Lead'
                        image={''}
                        description='Firmware Lead'
                        linkedIn='https://www.linkedin.com/in/libochengdi/' />
                </Grid2>
                <Grid2 xs={4}>
                    <TeamMemberCard2
                        name='Sean Staggs'
                        title='Firmware Lead'
                        image={'/sean.JPG'}
                        description='Firmware Lead'
                        linkedIn='https://www.linkedin.com/in/sean-staggs-168444169/' />
                </Grid2>
            </Grid2>

        </div >
    )
}
