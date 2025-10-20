'use client';

import Button from '@/componens/ui/Button';
import Input from '@/componens/ui/Input';
import Select from '@/componens/ui/Select';

export default function OrderPopupDetails() {
    return (
        <div className="order-popup-details">
            <h3 className="order-popup-details-title">Your Details</h3>
            <div className="order-popup-details-row">
                <Input label={'First Name'} placeholder={'Еnter your First Name'} />
                <Input label={'Last Name'} placeholder={'Еnter your Last Name'} />
            </div>
            <Input label={'Email'} type={'mail'} placeholder={'Еnter your Email'} />
            <Input label={'Street Name and Number'} placeholder={'Your Street Name and Number'} />
            <Input label={'Zip Code'} placeholder={'Еnter your Zip Code'} />
            <Input label={'City'} placeholder={'Еnter your City'} />
            <Select label={'Еnter your Country'} />
            <Input label={'BASE Wallet Address'} placeholder={'Enter your BASE wallet address'} />
            <Button className="order-popup-details-button" title={'Continue'} />
        </div>
    );
}
