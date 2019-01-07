import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main className='flex-container'>
      <div className='left-column'>
        <div className='sub'>
          42
          <span className='dark'>days</span>
        </div>
        <div>
          10
          <span className='dark'>hours</span>
        </div>
        <div>
          11
          <span className='dark'>mins</span>
        </div>
        <div>
          16
          <span className='dark'>secs</span>
        </div>
        <div className='election-date'>
          <span>until Saturday,</span>
          <br/>
          <span>16 February, 2019.</span>
        </div>
      </div>
      <div className='rightColumn'>
        <h2>
          Nigerian
          <br/>
          General Election
          <br/>
          <span>16th, Feb 2019</span>
        </h2>
        <p>
          Follow the Nigerian general presidential election statistics here live.
          Get overviewof basic statistics about the electoral features of each state.
        </p>
      </div>
    </main>
  </Layout>
)

export default IndexPage
