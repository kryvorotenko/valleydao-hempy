import CheckIcon from '@/icon/CheckIcon';
import CloudIcon from '@/icon/CloudIcon';
import NotIcon from '@/icon/NotIcon';
import Image from 'next/image';

export default function Choose() {
    return (
        <section className="choose">
            <Image className="choose-img" src="/img/choose-bg.png" alt="banner" fill priority />
            <div className="container">
                <div className="choose-content">
                    <h2 className="choose-title">why choose hempy?</h2>
                    <table className="choose-table">
                        <thead>
                            <tr>
                                <th className="choose-table-cloud">
                                    <span>
                                        <CloudIcon />
                                        Feature
                                    </span>
                                </th>
                                <th>
                                    <span className="choose-table-header-item">
                                        <Image
                                            src={'/img/choose/choose-item1.png'}
                                            alt="item"
                                            width={206}
                                            height={220}
                                        />
                                         <span className="default">Hemp Hoodie</span>
                                        <span className="mobile">
                                            Hemp<br/>Hoodie
                                        </span>

                                    </span>
                                </th>
                                <th>
                                    <span className="choose-table-header-item">
                                        <Image
                                            src={'/img/choose/choose-item2.png'}
                                            alt="item"
                                            width={206}
                                            height={220}
                                        />
                                        <span className="default"> Mass-Market 1</span>
                                        <span className="mobile">
                                            Mm <br />1
                                        </span>
                                    </span>
                                </th>
                                <th>
                                    <span className="choose-table-header-item">
                                        <Image
                                            src={'/img/choose/choose-item3.png'}
                                            alt="item"
                                            width={206}
                                            height={220}
                                        />
                                        <span className="default">Mass-Market 2</span>
                                        <span className="mobile">
                                            Mm <br />2
                                        </span>
                                    </span>
                                </th>
                                <th>
                                    <span className="choose-table-header-item">
                                        <Image
                                            src={'/img/choose/choose-item4.png'}
                                            alt="item"
                                            width={206}
                                            height={220}
                                        />
                                        <span className="default">Mass-Market 3</span>
                                        <span className="mobile">
                                            Mm <br />3
                                        </span>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100%  <br/>Organic Hemp</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Biotech-<br/>Softened</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Soft &<br/>Breathable</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <CheckIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Durable</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Plastic-Free</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Eco-Friendly</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Rewards</td>
                                <td>
                                    <CheckIcon /> <br />
                                    {/*<span>50$ in $HEMPY</span>*/}
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Unique</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
