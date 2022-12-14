import TeamMemberCard from '@/components/TeamMemberCard'
import amir from '@/public/amir.jpg';


export default function Team() {
    return (
        <div>
            <h1>Team</h1>
            <p>This is the team page</p>
            <TeamMemberCard name='Amir Shukle' title='Team Principle' image='/amir.JPG' description='Team President' />
        </div>
    )
}
