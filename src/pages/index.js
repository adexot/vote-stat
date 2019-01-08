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
        <div className='grid-container'>
          <div className='grid-item-top-left'></div>
          <div className='grid-item-grey'></div>
          <div className='grid-item-top-right-bottom'></div>
          <div className='grid-item-empty'></div>
          <div className='grid-item-image-one'></div>
          <div className='grid-item-image-two'></div>
          <div className='grid-item-image-three'></div>
          <div className='grid-item-image-four'></div>
          <div className='grid-item-image-five'>
            <p>
              The incumbent President, Muhammadu Buhari won a re-election bid after winning the APC presidential primaries held on 29 September 2018.
            </p>
          </div>
          <div className='grid-item-image-six'></div>
          <div className='grid-item-image-seven'></div>
          <div className='grid-item-image-eight'></div>
          <div className='grid-item-image-nine'></div>
          <div className='grid-item-image-ten'></div>
          <div className='grid-item-image-eleven'></div>
          <div className='grid-item-image-twelve'></div>
          <div className='grid-item-image-thirteen'></div>
          <div className='grid-item-image-14'></div>
          <div className='grid-item-image-15'></div>
          <div className='grid-item-image-16'></div>
          <div className='grid-item-image-17'></div>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
