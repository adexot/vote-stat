import React, { Component, Fragment } from 'react'
import './statistics.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import firebase from 'firebase'

const isEmptyArray = arr => Array.isArray(arr) && arr.length < 1

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

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
    party: 'PDP',
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
    party: 'NDP',
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
    party: 'CCC',
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
    party: 'ACG',
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
    party: 'FGA',
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
    party: 'GDH',
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
    party: 'VCH',
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
    party: 'YET',
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
    party: 'SKJ',
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
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
  {
    state: 'Abia',
    vote: '12300',
  },
]

class Statistics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeColumn: 'stats',
      data: null,
      party: '',
    }
  }

  changePageContent(column) {
    this.setState({
      activeColumn: column,
    })
  }

  showCandidatesVotes(party) {
    this.setState({
      party: party,
      activeColumn: 'candidates'
    })

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  fetchData(){
    const db = firebase.firestore()

    db.collection('candidates')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState(prevState => ({
            data: doc.data(),
            party: prevState.party || 'apc'
          }))
        })
      })
      .catch(err => console.log(`ERROR => ${err}`));
  }

  componentDidMount() {
    const tagBox = document.createElement('div')
    tagBox.setAttribute('data-wall-id', 'first-wall-12407')
    document.querySelector('.taggbox-container').appendChild(tagBox)
    const script = document.createElement('script')
    script.setAttribute('src', '//web.taggbox.com/app/js/embed.min.js')
    script.setAttribute('defer', true)
    document.body.appendChild(script)

    if (!firebase.apps.length) {
      // Initialize Cloud Firestore through Firebase
      firebase.initializeApp({
        apiKey: 'AIzaSyBLODSNH88sLtACyX0CDPZdlz_KNxBVAoc',
        authDomain: 'election2019-oadex.firebaseapp.com',
        projectId: 'election2019-oadex',
      })
    }

    this.fetchData();

    setInterval(() => this.fetchData(), 10000);
  }

  renderCandidateImage(id) {
    return (<img src={`https://res.cloudinary.com/adexot/image/upload/c_thumb,w_200,g_face/Election2019/c-${id}.png`} alt={`candidate=${id}-image`} className="candidate-thumbnail"/>);
  }

  render() {
    const { activeColumn, data, party } = this.state
    const activeParty = party ? data[party] : null
    const voteSum = party ? arrSum(activeParty.votes) : 0
    const overallVotes = 64000000

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ul className="tabbed-nav">
          <li
            className={activeColumn === 'stats' ? 'active' : ''}
            onClick={() => this.changePageContent('stats')}
          >
            STATISTICS
          </li>
          <li
            className={activeColumn === 'twitter' ? 'active' : ''}
            onClick={() => this.changePageContent('twitter')}
          >
            TWEETS
          </li>
        </ul>
        <main className="flex-container statistics-container">
          <div
            className={`stats-column ${activeColumn === 'stats' ? 'show' : ''}`}
          >
            <table>
              <thead>
                <tr>
                  <th width="35%">Candidate</th>
                  <th width="30%">Running Mate</th>
                  <th width="20%">Party</th>
                  <th width="15%">Votes</th>
                </tr>
              </thead>
              <tbody>
                {!isEmptyArray(candidatesList) &&
                  candidatesList.map((item, index) => (
                    <tr key={index} onClick={() => this.showCandidatesVotes(item.party.toLowerCase())} className={item.party.toLowerCase() === party ? 'active' : ''}>
                      <td className="cd-info">
                        {this.renderCandidateImage(index + 1)}
                        <div className="inline-block cd-name">
                          <div className="">
                            <span className="surname">
                              {item.candidate.surname}
                            </span>
                            <span className="firstname">
                              {item.candidate.firstname}
                            </span>
                          </div>
                          <div className="candidate-vice-name">
                            <span className="surname">
                              {item.runningMate.surname}
                            </span>
                            <span className="firstname">
                              {item.runningMate.firstname}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="surname">
                          {item.runningMate.firstname}
                        </span>
                        <span className="firstname">
                          {item.runningMate.surname}
                        </span>
                      </td>
                      <td>{item.party}</td>
                      <td align="right">
                        <span>{item.votes}</span>
                        <span className="mobile-party">{item.party}</span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div
            className={`candidates-column ${
              activeColumn === 'candidates' ? 'show' : ''
            }`}
          >
            {activeParty && (
              <Fragment>
                <div className="candidates-card">
                  <div className="candidate-vote-info">
                    <div className="candidate-image">
                      {this.renderCandidateImage(activeParty.id)}
                    </div>
                    <div className="candidate-name">
                      <span className="surname">
                        {activeParty.president.surname}
                      </span>
                      <span className="firstname">
                        {activeParty.president.firstname}
                      </span>
                    </div>
                    <div className="candidate-stat">
                      <span className="surname">{voteSum}</span>
                      <span className="firstname">{parseFloat(voteSum / overallVotes).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="candidate-vote-info">
                    <div className="candidate-image">
                      {this.renderCandidateImage(1)}
                    </div>
                    <div className="candidate-name">
                      <span className="surname">Chike</span>
                      <span className="firstname">Ukaegbu</span>
                    </div>
                    <div className="candidate-stat">
                      <span className="surname">53,537</span>
                      <span className="firstname">15.21%</span>
                    </div>
                  </div>
                </div>
                <h5 className="vote-count-header">VOTES BY STATE</h5>
                <table className="vote-count-stat">
                  <thead>
                    <tr>
                      <th />
                      <th className="align-right" />
                      <th width="30%" />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {!isEmptyArray(candidatesVote) &&
                      candidatesVote.map((item, index) => {
                        const voteCount = data[party].votes[index];
                        const votePercent = Math.ceil((voteCount / voteSum) * 100) || 0;
                        return (<tr>
                          <td>{item.state}</td>
                          <td align="right">{voteCount || 0}</td>
                          <td>
                            <div className="progress-bar">
                              <div
                                className="indicator"
                                style={{
                                  width: `${votePercent}%`,
                                }}
                              />
                            </div>
                          </td>
                          <td>{votePercent}%</td>
                        </tr>)
                      })}
                  </tbody>
                </table>
              </Fragment>
            )}
          </div>
          <div
            className={`twitter-column ${
              activeColumn === 'twitter' ? 'show' : ''
            }`}
          >
            <div
              className="taggbox-container"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
              }}
            >
              <div
                className="taggbox-socialwall"
                data-wall-id="first-wall-12407"
              >
                {' '}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    candidate1: file(relativePath: { eq: "cd-0.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    candidate2: file(relativePath: { eq: "cd-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Statistics
