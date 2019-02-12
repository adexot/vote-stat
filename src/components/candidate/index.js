import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import './candidate.scss'
import Wiki from 'wikijs'

const parties = {
  apc: {
    president: 'Muhammadu Buhari',
    vice: 'Yemi Osinbajo',
  },
  pdp: {
    president: 'Atiku Abubakar',
    vice: 'Peter Obi',
  },
}

class Candidate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidate: '',
      vice: '',
    }
  }

  async getWikiData(candidate, state) {
    const candidateInfo = {}
    let candidateResponse = null

    await Wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
      .page(candidate)
      .then(res => (candidateResponse = res))
      .then(() => candidateResponse.summary())
      .then(res => (candidateInfo.html = res))
      .then(() => candidateResponse.mainImage())
      .then(res => (candidateInfo.image = res))
      .then(() => {
        this.setState({
          [state]: candidateInfo,
        })
      })
      .catch(err => console.log('Unable to fetch Candidate Info', err))
  }

  componentDidMount() {
    const { party } = this.props
    const partyCandidates = parties[party]
    if (partyCandidates) {
      this.getWikiData(partyCandidates.president, 'candidate')
      this.getWikiData(partyCandidates.vice, 'vice')

      this.setState({
        candidate: partyCandidates.president,
        vice: partyCandidates.vice,
      })
    }
  }

  render() {
    const { candidate, vice } = this.state
    const { party } = this.props

    const partyCandidates = parties[party]
    const candidateName = partyCandidates.president.split(' ')
    const viceName = partyCandidates.vice.split(' ')

    return (
      <Fragment>
        {candidate ? (
          <main className="flex-container candidate-container">
            <div className="candidate-detail-column scrollable">
              <Link to="/#candidates-grid" className="close-section">
                close
              </Link>
              <div className="candidate-party">
                All Progressive Congress (APC)
              </div>
              <h1 className="header candidate-name">
                {candidateName[0]}
                <br />
                {candidateName[1]}
              </h1>
              <div>&mdash; PRESIDENTIAL CANDIDATE</div>
              <div
                className="candidate-description"
                dangerouslySetInnerHTML={{ __html: candidate.html }}
              />
            </div>
            <div className="candidate-image-column">
              <img src={candidate.image} className="full-image" />
            </div>
            <div className="candidate-vice-column scrollable">
              {vice && (
                <Fragment>
                  <div className="vice-image">
                    <img src={vice.image} className="full-image" />
                  </div>
                  <h3 className="vice-name">
                    {viceName[0]}
                    <br />
                    {viceName[1]}
                  </h3>
                  <div>&mdash; VICE-PRESIDENTIAL CANDIDATE</div>
                  <div
                    className="vice-description"
                    dangerouslySetInnerHTML={{ __html: vice.html }}
                  />
                </Fragment>
              )}
            </div>
          </main>
        ) : (
          <div>
            <h1>Loading candidate's data...</h1>
          </div>
        )}
      </Fragment>
    )
  }
}

export default Candidate
