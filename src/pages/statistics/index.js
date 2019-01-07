import React from 'react'
import { Link } from 'gatsby'
import './statistics.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

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
                            <th width='15%' align='right'>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>
                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>
                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>
                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>
                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>
                                <span className='surname'>Mohammodu</span>
                                <span className='firstname'>Buhari</span>
                            </td>
                            <td>
                                <span className='surname'>Yemi</span>
                                <span className='firstname'>Osibajo</span>
                            </td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='candidates-column'>
                <div className='candidates-card'>
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
                    <tbody>
                        <tr>
                            <td>Abia</td>
                            <td>1,930,500</td>
                            <td>
                                111
                            </td>
                            <td>58%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </Layout>
)

export default Statistics
