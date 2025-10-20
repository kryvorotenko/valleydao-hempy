'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import SelectLib, { components, OptionProps, SingleValueProps } from 'react-select';
import countryList from 'react-select-country-list';
import CheckSmallIcon from '@/icon/CheckSmallIcon';

interface PropsType {
    placeholder?: string;
    className?: string;
    label?: string;
}

interface CountryOption {
    value: string;
    label: string;
}

export default function Select({ placeholder, className, label }: PropsType) {
    const [country, setCountry] = useState<CountryOption | null>(null);
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value: CountryOption | null) => {
        setCountry(value);
    };

    const Option = (props: OptionProps<CountryOption, false>) => {
        const { data, isSelected } = props;
        const countryCode = data.value.toLowerCase();
        const flagUrl = `https://flagcdn.com/${countryCode}.svg`;
        return (
            <components.Option {...props}>
                <div className="select-row">
                    <div className="select-flag">
                        <Image
                            className="select-flag-img"
                            src={flagUrl}
                            alt={data.label}
                            width={24}
                            height={24}
                        />
                        <span>{data.label}</span>
                    </div>

                    <span className="select-check-icon">
                        <CheckSmallIcon isChecked={isSelected} />
                    </span>
                </div>
            </components.Option>
        );
    };

    const SingleValue = (props: SingleValueProps<CountryOption, false>) => {
        const { data } = props;
        const countryCode = data.value.toLowerCase();
        const flagUrl = `https://flagcdn.com/${countryCode}.svg`;         return (
            <components.SingleValue {...props}>
                <div className="select-flag">
                    <Image
                        className="select-flag-img"
                        src={flagUrl}
                        alt={data.label}
                        width={24}
                        height={24}
                    />
                    <span>{data.label}</span>
                </div>
            </components.SingleValue>
        );
    };

    return (
        <div className={`select-wrapper ${className ?? ''}`}>
            {label && <label className="select-label">{label}</label>}
            <SelectLib
                placeholder={placeholder}
                classNamePrefix="select"
                options={options}
                value={country}
                onChange={changeHandler}
                components={{ Option, SingleValue }}
            />
        </div>
    );
}
