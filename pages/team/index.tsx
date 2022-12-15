import TeamMemberCard from '@/components/TeamMemberCard'
import TeamMemberCard2 from '@/components/TeamMemberCard2'
import styles from '@/styles/Home.module.css'

export interface TeamLead {
    name: string;
    title: string;
    image: string;
    description: string;
    linkedIn?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
}

export default function Team() {
    return (
        <div>
            <h1>Team</h1>
            <div className={styles.grid}>
                <TeamMemberCard
                    name='Amir Shukle'
                    title='Team Principal'
                    image='/amir.JPG'
                    description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.' />

                <TeamMemberCard2
                    name='Amir Shukle'
                    title='Team Principal'
                    image='/amir.JPG'
                    description='I am a reliable, hardworking engineer and will bring invaluable experience on an internationally recognized racing team as well as three years of experience on a nationally ranked engineering team.' />
            </div>
        </div >
    )
}
