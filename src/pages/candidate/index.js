import React from 'react'
import './candidate.scss'

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

const Candidate = () => (
    <Layout >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main className='flex-container candidate-container'>
            <div className='candidate-detail-column scrollable'>
                <div>
                    All Progressive Congress (APC)
                </div>
                <h1 className='header candidate-name'>
                    Muhammed
                    <br />
                    Buhari
                </h1>
                <div>&mdash; PRESIDENTIAL CANDIDATE</div>
                <p className='candidate-description'>
Aute pariatur quis elit ea. Commodo ut consectetur nostrud et. Id ipsum aliqua cillum sint nostrud magna labore enim laborum dolor proident. Elit excepteur consequat ut exercitation velit amet ipsum irure aliqua. In minim elit in aliqua dolore exercitation nulla cupidatat eiusmod consequat esse. Consequat veniam reprehenderit amet aliqua excepteur velit dolore magna ad. Veniam aliquip cillum occaecat labore occaecat sunt.

Incididunt sint ullamco eiusmod qui esse ut non aliquip ut proident consectetur. Elit sunt consectetur ut do mollit quis nostrud deserunt ullamco. Commodo irure incididunt nulla consectetur laboris tempor ut anim culpa pariatur fugiat reprehenderit commodo.

Culpa sit id ex amet est proident ut in reprehenderit ipsum. Fugiat commodo ullamco aute culpa excepteur. Elit elit est consectetur reprehenderit aliquip duis elit voluptate pariatur exercitation dolore adipisicing excepteur. Culpa irure ipsum cillum Lorem pariatur aliquip sint eu officia sit. Sint ad consequat est pariatur reprehenderit ut amet aute. Consequat et sint aute ea nostrud elit aliqua sit ex ipsum.

Cillum reprehenderit deserunt culpa deserunt exercitation. Voluptate ea aliquip aute irure reprehenderit officia sit aliquip. Ad fugiat laborum sunt in Lorem consectetur. Consectetur ex et qui eu sunt laborum dolore qui dolore nulla duis.
                </p>
            </div>
            <div className='candidate-image-column'></div>
            <div className='candidate-vice-column scrollable'>
                <div className='vice-image'></div>
                <h3 className='vice-name'>Olayemi Osibanjo</h3>
                <div>&mdash; VICE-PRESIDENTIAL CANDIDATE</div>
                <p className='vice-description'>
Ad adipisicing sit qui sit duis ut eiusmod officia aute et. Sunt tempor reprehenderit qui fugiat labore proident cillum deserunt deserunt officia. Ipsum ipsum dolore aliqua excepteur culpa tempor in deserunt velit qui labore consequat et officia. Incididunt quis ea eu irure minim aliquip officia. Est do enim labore proident irure aliqua eiusmod commodo non commodo magna nulla.

Sunt id deserunt fugiat proident. In amet culpa occaecat elit ullamco velit aliquip dolore ad. Cillum magna non ea sunt veniam do occaecat aliqua proident officia aute cillum ea ullamco. Nulla qui est officia labore voluptate eiusmod adipisicing ut quis deserunt eu ex cillum. Eiusmod consequat adipisicing nisi nisi nulla esse. Ut sit ex occaecat aliqua proident anim aliqua enim officia non non.
                </p>
            </div>
        </main>
    </Layout>
)

export default Candidate
