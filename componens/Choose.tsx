'use client';

import Lotti2 from '@/animations/Line 2.json';
import CheckIcon from '@/icon/CheckIcon';
import CloudIcon from '@/icon/CloudIcon';
import NotIcon from '@/icon/NotIcon';
import Lottie from 'lottie-react';
import Image from 'next/image';
import QuestionIcon from "@/icon/QuestionIcon";

export default function Choose() {
    return (
        <section className="choose" id='hempynomics'>
            <Image className="choose-img" src="/img/choose-bg.png" alt="banner" fill priority />
            <div className="container">
                <div className="choose-content">
                    <h2 className="choose-title">why choose hempy?</h2>
                    <table className="choose-table">
                        <thead>
                            <tr>
                                <th className="choose-table-cloud">
                                    <Lottie className="choose-table-cloud-lottie" animationData={Lotti2} />
                                    <span>
                                        <CloudIcon  />
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
                                        <span className="mobile">Hemp<br />Hoodie</span>
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
                                        <span className="default">Patagonia hemp hoodie</span>
                                        <span className="mobile">Patagonia hemp hoodie</span>
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
                                        <span className="default">H&M cotton hoodie</span>
                                        <span className="mobile">H&M cotton hoodie</span>
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
                                        <span className="default"></span>
                                        <span className="mobile">Adidas polyester hoodie</span>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100% Organic Hemp</td>
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
                                <td>Biotech-Softened</td>
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
                                <td>Soft & Breathable</td>
                                <td>
                                    <CheckIcon />
                                </td>
                                <td>
                                  {/*<span className='question'>?</span>*/}
                                    <QuestionIcon/>
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
                                    <CheckIcon />
                                </td>
                                <td>
                                    {/*<span className='question'>?</span>*/}
                                    <QuestionIcon/>
                                </td>
                                <td>
                                    <CheckIcon />
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
                                    <NotIcon />
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
                                    {/*<span className='question'>?</span>*/}
                                    <QuestionIcon/>
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                                <td>
                                    <NotIcon />
                                </td>
                            </tr>
                            <tr>
                                <td>Made in Europe</td>
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
                                <td>$50 HeMPY Rewards</td>
                                <td className='choose-table-span-wrapper'>
                                    <CheckIcon /> <br />
                                    <span>50$ in $HEMPY</span>
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
                                <td>limited edition</td>
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
