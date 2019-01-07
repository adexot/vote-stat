import React from 'react'
import { Link } from 'gatsby'
import './statistics.scss'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Statistics = () => (
    <Layout >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main className='flex-container'>
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
                            <td>Mohammodu Buhari</td>
                            <td>Yemi Osibanjo</td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                        <tr>
                            <td>Mohammodu Buhari</td>
                            <td>Yemi Osibanjo</td>
                            <td>APC</td>
                            <td>15,234,871</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='candidates-column'>
                <div className='candidates-card'></div>
                <h5>VOTES BY STATE</h5>
                <table>
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
