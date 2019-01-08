import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main className='flex-container index-container'>
      <div className='left-column'>
        <div className='header'>
          42
          <span className='text-dark'>days</span>
        </div>
        <div className='header'>
          10
          <span className='text-dark'>hours</span>
        </div>
        <div className='header'>
          11
          <span className='text-dark'>mins</span>
        </div>
        <div className='header'>
          16
          <span className='text-dark'>secs</span>
        </div>
        <div className='election-date'>
          until Saturday,
          <br/>
          16 February, 2019.
        </div>
      </div>
      <div className='right-column'>
        <h2 className='header text-green'>
          Nigerian
          <br/>
          General Election
          <br/>
          <span class='text-white'>16th, Feb 2019</span>
        </h2>
        <p className='text-grey'>
          Follow the <strong className='text-white'>Nigerian general presidential election</strong> statistics here live.
          <br />
          Get overviewof basic statistics about the electoral features of each state.
        </p>
        <div className='grid'></div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
