import React from 'react'
import {Link} from 'gatsby'
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
          <br />
          16 February, 2019.
        </div>
      </div>
      <div className='right-column'>
        <h2 className='right-column-header text-green'>
          Nigerian
          <br />
          General Election
          <br />
          <span className='text-white'>16th, Feb 2019</span>
        </h2>
        <p className='text-grey'>
          Follow the <strong className='text-white'>Nigerian general presidential election</strong> statistics here live.
          <br />
          Get overviewof basic statistics about the electoral features of each state.
        </p>
        <div className='grid-container' id='candidates-list'>
          <div className='grid-item-top-left'>
            <Link to='/candidate' className='candidate-link'></Link>
          </div>
          <div className='grid-item-grey'></div>
          <div className='grid-item-top-right-bottom'></div>
          <div className='grid-item-empty'></div>
          <div className='grid-item-image-one'></div>
          <div className='grid-item-image-two'></div>
          <div className='grid-item-image-three'></div>
          <div className='grid-item-image-four'></div>
          <div className='grid-item-image-five'>
            <p className='text-small'>
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
          <div className='grid-item-image-18'></div>
          <div className='grid-item-image-19'></div>
          <div className='grid-item-image-20'></div>
          <div className='grid-item-image-21'></div>
          <div className='grid-item-image-22 grid-text-box'>
            <p className='text-small'>
              The President of Nigeria is elected using a simple majority of the highest votes cast, as well as over 25% of the votes in at least two-thirds of states.
              The 360 members of the House of Representatives are elected using first-past-the-post voting in single-member constituencies, whilst the 109 members of the Senate are elected from 108 single-seat constituencies into which the States are divided (three each) and one single-seat constituency consisting the Federal Capital Territory, all by first-past-the-post voting.
            </p>
          </div>
          <div className='grid-item-image-23'></div>
          <div className='grid-item-image-24'></div>
          <div className='grid-item-image-25'></div>
          <div className='grid-item-image-26'></div>
          <div className='grid-item-image-27'></div>
          <div className='grid-item-image-28'></div>
          <div className='grid-item-image-29'></div>
          <div className='grid-item-image-30'></div>
          <div className='grid-item-image-31'></div>
          <div className='grid-item-image-32'></div>
          <div className='grid-item-image-33'></div>
          <div className='grid-item-image-34'></div>
          <div className='grid-item-image-35'></div>
          <div className='grid-item-image-36 grid-text-box'>
            <p className='text-small'>
              Article 134 of the Nigerian Constitution stipulates that a presidential candidate will be duly elected after attaining both the highest number of votes cast, and having received at least a quarter of the votes at each of at least two-thirds of the 36 states and the Federal Capital Territory (FCT).

              If no candidate satisfies the requirement, a second election will be held between the two leading candidates within seven days from the pronouncement of the result.
            </p>
          </div>
          <div className='grid-item-image-37'></div>
          <div className='grid-item-image-38'></div>
          <div className='grid-item-image-39'></div>
          <div className='grid-item-image-40'></div>
          <div className='grid-item-image-41'></div>
          <div className='grid-item-image-42'></div>
          <div className='grid-item-image-43'></div>
          <div className='grid-item-image-44'></div>
          <div className='grid-item-image-45'></div>
          <div className='grid-item-image-46 grid-text-box'>
            <p className='text-small'>
              This will be the sixth quadrennial elections since the end of military rule in 1999.
            </p>
          </div>
          <div className='grid-item-image-47'></div>
          <div className='grid-item-image-48'></div>
          <div className='grid-item-image-49'></div>
          <div className='grid-item-image-50'></div>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
