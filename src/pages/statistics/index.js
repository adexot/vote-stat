import React from 'react'
import { Link } from 'gatsby'
import './statistics.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const isEmptyArray = arr => Array.isArray(arr) && arr.length < 1;

const candidatesList = [
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
    {
        candidate: {
            surname: 'Mohammed',
            firstname: 'Buhari'
        },
        runningMate: {
            surname: 'Osibajo',
            firstname: 'Yemi'
        },
        party: 'APC',
        votes: '15,345,239'
    },
];

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

const Statistics = () => (
    <Layout >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main className='flex-container statistics-container'>
            <div className='stats-column'>
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
                            <tr>
                                <td>

                                    <span className='surname'>{item.candidate.surname}</span>
                                    <span className='firstname'>{item.candidate.firstname}</span>
                                </td>
                                <td>
                                    <span className='surname'>{item.runningMate.firstname}</span>
                                    <span className='firstname'>{item.runningMate.firstname}</span>
                                </td>
                                <td>{item.party}</td>
                                <td align='right'>{item.votes}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className='candidates-column'>
                <div className='candidates-card'>
                    <div className='candidate-vote-info'>
                        <div className='candidate-image'>
                            {/* TODO: add the circular image with progress-bar */}
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
                        <div className='candidate-image'></div>
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
                                                width: '50%'
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
        </main>
    </Layout>
)

export default Statistics
