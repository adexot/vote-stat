import React, {Component} from 'react'
import './statistics.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const isEmptyArray = arr => Array.isArray(arr) && arr.length < 1;

const candidatesList = [
  {
    image:
      'https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/cd-0.png',
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '5,000',
  },
  {
    candidate: {
      surname: 'Mohammed',
      firstname: 'Buhari',
    },
    runningMate: {
      surname: 'Osibajo',
      firstname: 'Yemi',
    },
    party: 'APC',
    votes: '15,345,239',
  },
]

const candidatesVote = [
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
    {
        state: 'Abia',
        vote: '12300'
    },
];

class Statistics extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeColumn: 'stats'
        };
    }

    changePageContent(column){
        this.setState({
            activeColumn: column
        });
    }

    componentDidMount(){
      const tagBox = document.createElement('div');
      tagBox.setAttribute('data-wall-id', 'first-wall-12407');
      document.querySelector('.taggbox-container').appendChild(tagBox);
      const script = document.createElement('script');
      script.setAttribute('src', '//web.taggbox.com/app/js/embed.min.js');
      script.setAttribute('defer', true);
      document.body.appendChild(script);

    }

    render() {
        const {activeColumn} = this.state;

        return (
            <Layout >
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <ul className='tabbed-nav'>
                    <li
                        className={activeColumn === 'stats' ? 'active' : ''}
                        onClick={() => this.changePageContent('stats')}>STATISTICS</li>
                    <li
                        className={activeColumn === 'twitter' ? 'active' : ''}
                        onClick={() => this.changePageContent('twitter')}>TWEETS</li>
                </ul>
                <main className='flex-container statistics-container'>
                    <div className={`stats-column ${activeColumn === 'stats' ? 'show' : ''}`}>
                        <table>
                            <thead>
                                <tr>
                                    <th width='35%'>Candidate</th>
                                    <th width='30%'>Running Mate</th>
                                    <th width='20%'>Party</th>
                                    <th width='15%'>Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* FIXME: abstract the logic for checking an empty array */}
                                {!isEmptyArray(candidatesList) && candidatesList.map((item) => (
                                    <tr onClick={() => this.changePageContent('candidates')}>
                                        <td className='cd-info'>
                                            <img
                                            src={item.image}
                                            className='candidate-thumbnail' />
                                            <div className='inline-block cd-name'>
                                                <div className=''>
                                                    <span className='surname'>{item.candidate.surname}</span>
                                                    <span className='firstname'>{item.candidate.firstname}</span>
                                                </div>
                                                <div className='candidate-vice-name'>
                                                    <span className='surname'>{item.runningMate.surname}</span>
                                                    <span className='firstname'>{item.runningMate.firstname}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className='surname'>{item.runningMate.firstname}</span>
                                            <span className='firstname'>{item.runningMate.surname}</span>
                                        </td>
                                        <td>{item.party}</td>
                                        <td align='right'>
                                            <span>{item.votes}</span>
                                            <span className='mobile-party'>{item.party}</span>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div className={`candidates-column ${activeColumn === 'candidates' ? 'show' : ''}`}>
                        <div className='candidates-card'>
                            <div className='candidate-vote-info'>
                                <div className='candidate-image'>
                      <img src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/cd-0.png" alt=""/>
                                </div>
                                <div className='candidate-name'>
                                    <span className='surname'>Chike</span>
                                    <span className='firstname'>Ukaegbu</span>
                                </div>
                                <div className='candidate-stat'>
                                    <span className='surname'>53,537</span>
                                    <span className='firstname'>15.21%</span>
                                </div>
                            </div>
                            <div className='candidate-vote-info'>
                                <div className='candidate-image'>
                      <img src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/cd-0.png" alt="" />
                                </div>
                                <div className='candidate-name'>
                                    <span className='surname'>Chike</span>
                                    <span className='firstname'>Ukaegbu</span>
                                </div>
                                <div className='candidate-stat'>
                                    <span className='surname'>53,537</span>
                                    <span className='firstname'>15.21%</span>
                                </div>
                            </div>
                        </div>
                        <h5 className='vote-count-header'>VOTES BY STATE</h5>
                        <table className='vote-count-stat'>
                            <thead>
                                <tr>
                                    <th ></th>
                                    <th className='align-right'></th>
                                    <th width='30%'></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isEmptyArray(candidatesVote) && candidatesVote.map(item => (
                                    <tr>
                                        <td>{item.state}</td>
                                        <td align='right'>{item.vote}</td>
                                        <td>
                                            <div className='progress-bar'>
                                                <div
                                                    className='indicator'
                                                    style={{
                                                        width: '100%'
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td>58%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={`twitter-column ${activeColumn === 'twitter' ? 'show' : ''}`}>
                <div className="taggbox-container" style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'auto'
                }}>
                <div className="taggbox-socialwall" data-wall-id="first-wall-12407">  </div></div>
                    </div>
                </main>
            </Layout>
        );
    }
};

export const query = graphql`
  query {
    candidate1: file(relativePath: { eq: "cd-0.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        },
    candidate2: file(relativePath: { eq: "cd-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
  }
`

export default Statistics
