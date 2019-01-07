import React from 'react'
import { Link } from 'gatsby'
import './team.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

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
                <div className='member-box'>
                    <div className='member-image'></div>
                    <h3 className='member-name'>Otuogbai Francis</h3>
                    <h4 className='member-profession'>UI:UX DESIGNER</h4>
                    <p className='member-description'>
                        Ea deserunt do eu laboris sit excepteur. Irure laborum ea proident enim dolore laborum aliqua aliquip laboris exercitation. Sunt ullamco cupidatat minim laboris. Fugiat est nulla nulla est quis nostrud. Tempor magna nostrud aliquip qui nisi occaecat adipisicing aute culpa ea.

                    </p>
                    <div className='member-contact'>
                        www.linkedin.com/in/francis-otuogbai
                    </div>
                </div>
                <div className='member-box'>
                    <div className='member-image'></div>
                    <h3 className='member-name'>Adekunle Oseni</h3>
                    <h4 className='member-profession'>Frontend Developer</h4>
                    <p className='member-description'>
                        Ea deserunt do eu laboris sit excepteur. Irure laborum ea proident enim dolore laborum aliqua aliquip laboris exercitation. Sunt ullamco cupidatat minim laboris. Fugiat est nulla nulla est quis nostrud. Tempor magna nostrud aliquip qui nisi occaecat adipisicing aute culpa ea.

                    </p>
                    <div className='member-contact'>
                        www.linkedin.com/in/francis-otuogbai
                    </div>
                </div>
            </div>
        </main>
    </Layout>
)

export default Team
