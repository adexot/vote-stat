import React from 'react'
import { Link } from 'gatsby'
import './team.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const teamMembers = [
  {
    image:
      'https://res.cloudinary.com/adexot/image/upload/v1547493774/Election2019/francis.png',
    name: 'Francis Otuogbai',
    profession: 'UI:UX DESIGNER',
    description:
      'Ea deserunt do eu laboris sit excepteur. Irure laborum ea proident enim dolore laborum aliqua aliquip laboris exercitation. Sunt ullamco cupidatat minim laboris. Fugiat est nulla nulla est quis nostrud. Tempor magna nostrud aliquip qui nisi occaecat adipisicing aute culpa ea.',
    linkedin: 'www.linkedin.com/in/francis-otuogbai',
  },
  {
    image: '',
    name: 'Adekunle Oseni',
    profession: 'Frontend Engineer',
    description:
      'Ea deserunt do eu laboris sit excepteur. Irure laborum ea proident enim dolore laborum aliqua aliquip laboris exercitation. Sunt ullamco cupidatat minim laboris. Fugiat est nulla nulla est quis nostrud. Tempor magna nostrud aliquip qui nisi occaecat adipisicing aute culpa ea.',
    linkedin: 'www.linkedin.com/in/adekunle-oseni',
  },
]

const Team = () => (
    <Layout >
        <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
        <main className='team flex-container'>
            <div className='team-intro'>
                <h1>
                    We made this for the fun of it,
                    <br />
                    & our love for Nigeria.
                </h1>
            </div>
            <div className='team-members scrollable'>
                {teamMembers.map(member => (
                    <div className='member-box'>
                        <div className='member-header'>
                            <div className='member-image'>
                                <img src={member.image} alt=""/>
                            </div>
                            <h3 className='member-name'>{member.name}</h3>
                        </div>
                        <h4 className='member-profession'>{member.profession}</h4>
                        <p className='member-description'>
                            {member.description}
                        </p>
                        <div className='member-contact'>
                            {member.linkedin}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </Layout>
)

export default Team
