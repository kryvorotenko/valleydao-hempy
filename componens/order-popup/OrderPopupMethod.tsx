'use client'
import Button from '@/componens/ui/Button';
import Input from '@/componens/ui/Input';
import AppleIcon from '@/icon/AppleIcon';
import BitcoinIcon from '@/icon/BitcoinIcon';
import CardIcon from '@/icon/CardIcon';
import CheckSmallIcon from '@/icon/CheckSmallIcon';
import GoogleIcon from '@/icon/GoogleIcon';
import { useState } from 'react';

export default function OrderPopupMethod() {
    const [checked, setChecked] = useState(false);

    const toggleHandler = () => setChecked((prev) => !prev);

    return (
        <div className="order-popup-method">
            <h3 className="order-popup-method-title">Payment Method</h3>
            <Button
                title={'pay by Crypto'}
                icon={<BitcoinIcon />}
                className="order-popup-method-button"
                color={'yellow'}
            />
            <div className="order-popup-method-row">
                <span>Сhange payment method</span>
                <div className="order-popup-method-row-content">
                    <button type={'button'} className="order-popup-method-row-button">
                       <AppleIcon/>
                        Pay
                    </button>
                    <button type={'button'} className="order-popup-method-row-button">
                        <GoogleIcon/>
                        Pay
                    </button>
                    <button type={'button'} className="order-popup-method-row-button">
                        <CardIcon/> card
                    </button>
                </div>
                <Input label={'Have a discount code?'} placeholder={'Enter your code here'}/>
                <Input label={'Card number'} placeholder={'Еnter your Card number'} type={'number'}/>
                <div className="order-popup-method-data">
                    <Input label={'Expiry'} placeholder={'MM'}/>
                    <Input placeholder={'YYYY'}/>
                    <Input label={'CVV'} placeholder={'CVV'}/>
                </div>
                <div className="order-popup-method-radio">
                    <label className="order-popup-method-radio-label">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={checked}
                            onChange={toggleHandler}
                            className="order-popup-method-radio-input"
                        />
                        <span className="order-popup-method-radio-icon">
                            <CheckSmallIcon isChecked={checked}/>
                        </span>
                        <span className="order-popup-method-radio-text">
                            I agree to the terms & conditions
                        </span>
                    </label>
                </div>

                <Button title={'Pre-order now'} className="order-popup-method-button"/>
            </div>
        </div>
    );
}
