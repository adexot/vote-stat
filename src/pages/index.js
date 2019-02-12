import React, { Component, Fragment } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Candidate from '../components/candidate'
import './index.scss'
import Countdown from 'react-countdown-now'

const Modal = ({ children, closeModalFn, className }) => {
  return (
    <div className={`modal ${className}`}>
      <button className="close-modal-btn" onClick={() => closeModalFn()}>
        close
      </button>
      <div className="modal-container">{children}</div>
    </div>
  )
}

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      party: '',
    }
  }

  renderCandidateImage(id, vice) {
    return (
      <img
        src={`https://res.cloudinary.com/adexot/image/upload/Election2019/${
          vice ? 'v' : 'c'
        }-${id}.png`}
        alt={`candidate=${id}`}
        className="candidate-img"
      />
    )
  }

  displayTimer(timer) {
    return (
      <Fragment>
        <div className="header">
          {timer.days}
          <span className="text-dark">day{timer.days > 1 && 's'}</span>
        </div>
        <div className="header">
          {timer.hours}
          <span className="text-dark">hour{timer.hours > 1 && 's'}</span>
        </div>
        <div className="header">
          {timer.minutes}
          <span className="text-dark">min{timer.minutes > 1 && 's'}</span>
        </div>
        <div className="header">
          {timer.seconds}
          <span className="text-dark">sec{timer.seconds > 1 && 's'}</span>
        </div>
      </Fragment>
    )
  }

  renderTimer() {
    const electionDate = new Date('February 16, 2019 08:00:00').getTime()
    const currentDate = Date.now()
    let timeDifference = electionDate - currentDate
    return (
      <Countdown
        date={Date.now() + timeDifference}
        intervalDelay={1}
        precision={3}
        renderer={props => this.displayTimer(props)}
      />
    )
  }

  viewCandidate(party) {
    this.setState({
      modalVisible: true,
      party: party,
    })
  }

  closeModal() {
    this.setState({
      modalVisible: false,
      party: '',
    })
  }

  render() {
    const { modalVisible, party } = this.state

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main className="flex-container index-container">
          <Modal
          className={modalVisible ? 'show' : ''}
          closeModalFn={() => this.closeModal()}
          >
            {
              modalVisible &&
              <Candidate party={party} />
            }

          </Modal>
          <div className="left-column">
            {this.renderTimer()}
            <div className="election-date">
              Until Saturday,
              <br />
              16 February, 2019.
            </div>
          </div>
          <div className="right-column">
            <h2 className="right-column-header text-green">
              Nigerian
              <br />
              General Election
              <br />
              <span className="text-white">16th, Feb 2019</span>
            </h2>
            <p className="text-grey">
              Follow the{' '}
              <strong className="text-white">
                Nigerian general presidential election
              </strong>{' '}
              statistics here live.
              <br />
              Get overviewof basic statistics about the electoral features of
              each state.
            </p>
            <div className="grid-container" id="candidates-list">
              <div className="grid-item-top-left" />
              <div className="grid-item-grey" />
              <div className="grid-item-top-right-bottom" />
              <div className="grid-item-empty" />
              <div
                className="grid-item-image-one pointer"
                onClick={() => this.viewCandidate('apc')}
              >
                {this.renderCandidateImage(1)}
              </div>
              <div className="grid-item-image-two">
                {this.renderCandidateImage(1, true)}
              </div>
              <div
                className="grid-item-image-three pointer"
                onClick={() => this.viewCandidate('pdp')}
              >
                {this.renderCandidateImage(2)}
              </div>
              <div className="grid-item-image-four">
                {this.renderCandidateImage(2, true)}
              </div>
              <div className="grid-item-image-five">
                <p className="text-small">
                  The incumbent President, Muhammadu Buhari won a re-election
                  bid after winning the APC presidential primaries held on 29
                  September 2018.
                </p>
              </div>
              <div className="grid-item-image-six" />
              <div className="grid-item-image-seven" />
              <div className="grid-item-image-eight">
                {this.renderCandidateImage(3, true)}
              </div>
              <div className="grid-item-image-nine">
                {this.renderCandidateImage(3)}
              </div>
              <div className="grid-item-image-ten">
                {this.renderCandidateImage(4, true)}
              </div>
              <div className="grid-item-image-eleven">
                {this.renderCandidateImage(4)}
              </div>
              <div className="grid-item-image-twelve" />
              <div className="grid-item-image-thirteen" />
              <div className="grid-item-image-14">
                {this.renderCandidateImage(5)}
              </div>
              <div className="grid-item-image-15">
                {this.renderCandidateImage(5, true)}
              </div>
              <div className="grid-item-image-16" />
              <div className="grid-item-image-17" />
              <div className="grid-item-image-18" />
              <div className="grid-item-image-19">
                {this.renderCandidateImage(6)}
              </div>
              <div className="grid-item-image-20">
                {this.renderCandidateImage(6, true)}
              </div>
              <div className="grid-item-image-21" />
              <div className="grid-item-image-22 grid-text-box">
                <p className="text-small">
                  The President of Nigeria is elected using a simple majority of
                  the highest votes cast, as well as over 25% of the votes in at
                  least two-thirds of states. The 360 members of the House of
                  Representatives are elected using first-past-the-post voting
                  in single-member constituencies, whilst the 109 members of the
                  Senate are elected from 108 single-seat constituencies into
                  which the States are divided (three each) and one single-seat
                  constituency consisting the Federal Capital Territory, all by
                  first-past-the-post voting.
                </p>
              </div>
              <div className="grid-item-image-23" />
              <div className="grid-item-image-24">
                {this.renderCandidateImage(7)}
              </div>
              <div className="grid-item-image-25">
                {this.renderCandidateImage(8, true)}
              </div>
              <div className="grid-item-image-26">
                {this.renderCandidateImage(8)}
              </div>
              <div className="grid-item-image-27" />
              <div className="grid-item-image-28" />
              <div className="grid-item-image-29">
                {this.renderCandidateImage(9)}
              </div>
              <div className="grid-item-image-30" />
              <div className="grid-item-image-31" />
              <div className="grid-item-image-32" />
              <div className="grid-item-image-33">
                {this.renderCandidateImage(10)}
              </div>
              <div className="grid-item-image-34" />
              <div className="grid-item-image-35" />
              <div className="grid-item-image-36 grid-text-box">
                <p className="text-small">
                  Article 134 of the Nigerian Constitution stipulates that a
                  presidential candidate will be duly elected after attaining
                  both the highest number of votes cast, and having received at
                  least a quarter of the votes at each of at least two-thirds of
                  the 36 states and the Federal Capital Territory (FCT). If no
                  candidate satisfies the requirement, a second election will be
                  held between the two leading candidates within seven days from
                  the pronouncement of the result.
                </p>
              </div>
              <div className="grid-item-image-37">
                {this.renderCandidateImage(11)}
              </div>
              <div className="grid-item-image-38" />
              <div className="grid-item-image-39" />
              <div className="grid-item-image-40" />
              <div className="grid-item-image-41">
                {this.renderCandidateImage(12)}
              </div>
              <div className="grid-item-image-42" />
              <div className="grid-item-image-43" />
              <div className="grid-item-image-44">
                {this.renderCandidateImage(13)}
              </div>
              <div className="grid-item-image-45" />
              <div className="grid-item-image-46 grid-text-box">
                <p className="text-small">
                  This will be the sixth quadrennial elections since the end of
                  military rule in 1999.
                </p>
              </div>
              <div className="grid-item-image-47">
                {this.renderCandidateImage(14)}
              </div>
              <div className="grid-item-image-48" />
              <div className="grid-item-image-49" />
              <div className="grid-item-image-50" />
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
