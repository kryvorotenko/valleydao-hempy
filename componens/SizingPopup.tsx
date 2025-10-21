'use client'
import Button from '@/componens/ui/Button';
import CloseIcon from '@/icon/CloseIcon';
import React from "react";

interface PropsType {
    onClick?: () => void;
}

export default function SizingPopup({ onClick }: PropsType) {

    const handleOverlayClick = () => {
        if (onClick) onClick();
    };
    return (
        <div className="sizing-popup" onClick={handleOverlayClick}>
            <div onClick={(e) => e.stopPropagation()} className="sizing-popup-content">
                <div className="sizing-popup-header">
                    <h3 className="sizing-popup-header-title">Sizing chart</h3>
                    <Button className="sizing-popup-header-button" icon={<CloseIcon />} onClick={onClick} />
                </div>

                <table className="sizing-popup-table">
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>US/EU (in/<span className="highlight"> cm </span>)</th>
                            <th>Chest (cm)</th>
                            <th>Length (cm)</th>
                            <th>Sleeve (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>44–46</td>
                            <td>97–100</td>
                            <td>69–70</td>
                            <td>61–62</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>48–50</td>
                            <td>100–108</td>
                            <td>70–72</td>
                            <td>62–64</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>52–54</td>
                            <td>108–116</td>
                            <td>72–74</td>
                            <td>64–65</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>56–58</td>
                            <td>113–123</td>
                            <td>74–76</td>
                            <td>64–66</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
