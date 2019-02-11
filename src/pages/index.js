import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'
import { parse } from 'querystring';

class IndexPage extends Component {
  constructor(props){
    super(props)

    const electionDate = (new Date('February 16, 2019 08:00:00')).getTime()
    const currentDate = Date.now()
    let timeDifference = electionDate - currentDate;
    this.state = {
      timer: {
        days: parseInt(timeDifference / (1000 * 60 * 60 * 24)),
        hours: parseInt((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 3600)),
        minutes: parseInt((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: parseInt(timeDifference / (1000 * 60 * 60 * 24))
      }
    };
  }

  componentDidMount(){
    const electionDate = (new Date('February 16, 2019 08:00:00')).getTime()
    const currentDate = Date.now()
    let timeDifference = electionDate - currentDate;
    let minutes = parseInt((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    setInterval(()=>{
      console.log(timeDifference);
      this.setState({
        timer: {
          days: parseInt(timeDifference / (1000 * 60 * 60 * 24)),
          hours: parseInt((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 3600)),
          minutes: parseInt((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: parseInt(timeDifference / (1000 * 60 * 60 * 24))
        }
      })
      timeDifference -= 1;
      // Check if we're at zero.
      if (timeDifference == 0) {
        clearInterval();
      }
    }, 1000);

  }

  render() {
    const {timer} = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main className="flex-container index-container">
          <div className="left-column">
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
            <div className="election-date">
              until Saturday,
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
              <div className="grid-item-top-left">
                <Link to="/candidate" className="candidate-link" />
              </div>
              <div className="grid-item-grey" />
              <div className="grid-item-top-right-bottom" />
              <div className="grid-item-empty" />
              <div className="grid-item-image-one">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/c-1.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-two">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/v-1.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-three">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/c-2.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-four">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/v-2.png"
                  alt=""
                  className="candidate-img"
                />
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
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/v-3.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-nine">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/c-3.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-ten">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/v-4.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-eleven">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/c-4.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-twelve" />
              <div className="grid-item-image-thirteen" />
              <div className="grid-item-image-14">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/c-5.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-15">
                <img
                  src="https://res.cloudinary.com/adexot/image/upload/v1548090122/Election2019/v-5.png"
                  alt=""
                  className="candidate-img"
                />
              </div>
              <div className="grid-item-image-16" />
              <div className="grid-item-image-17" />
              <div className="grid-item-image-18" />
              <div className="grid-item-image-19" />
              <div className="grid-item-image-20" />
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
              <div className="grid-item-image-24" />
              <div className="grid-item-image-25" />
              <div className="grid-item-image-26" />
              <div className="grid-item-image-27" />
              <div className="grid-item-image-28" />
              <div className="grid-item-image-29" />
              <div className="grid-item-image-30" />
              <div className="grid-item-image-31" />
              <div className="grid-item-image-32" />
              <div className="grid-item-image-33" />
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
              <div className="grid-item-image-37" />
              <div className="grid-item-image-38" />
              <div className="grid-item-image-39" />
              <div className="grid-item-image-40" />
              <div className="grid-item-image-41" />
              <div className="grid-item-image-42" />
              <div className="grid-item-image-43" />
              <div className="grid-item-image-44" />
              <div className="grid-item-image-45" />
              <div className="grid-item-image-46 grid-text-box">
                <p className="text-small">
                  This will be the sixth quadrennial elections since the end of
                  military rule in 1999.
                </p>
              </div>
              <div className="grid-item-image-47" />
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
