'use client';

import CheckIcon from '@/icon/CheckIcon';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import SelectLib, { OptionProps, components } from 'react-select';
import countryList from 'react-select-country-list';
import CheckSmallIcon from "@/icon/CheckSmallIcon";

// иконки ✅ ◯

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
    const [country, setCountry] = useState<{ value: string; label: string } | null>(null);
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value: { value: string; label: string } | null) => {
        setCountry(value);
    };

    // Кастомный компонент для опции
    const Option = (props: OptionProps<CountryOption, false>) => {
        const { data, isSelected } = props;
        const countryCode = data.value.toLowerCase(); // например "us"
        const flagUrl = `https://flagcdn.com/w20/${countryCode}.png`; // флаг через CDN

        return (
            <components.Option {...props}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src={flagUrl} alt={data.label} width={24} height={24} style={{ borderRadius: '50%' }} />
                        <span>{data.label}</span>
                    </div>

                    {isSelected ? (
                        <span className='select-check-icon'>
                            <CheckSmallIcon />
                        </span>
                    ) : (
                        <span className='select-check-icon empty'></span>
                    )}
                </div>
            </components.Option>
        );
    };

    return (
        <div className={`select-wrapper ${className}`}>
            {label && <label className="select-label">{label}</label>}
            <SelectLib
                placeholder={placeholder}
                classNamePrefix={'select'}
                options={options}
                value={country}
                onChange={changeHandler}
                components={{ Option }}
                menuIsOpen={true}
            />
        </div>
    );
}
