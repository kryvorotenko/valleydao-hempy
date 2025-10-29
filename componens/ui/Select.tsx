'use client';

import CheckSmallIcon from '@/icon/CheckSmallIcon';
import Image from 'next/image';
import { useMemo } from 'react';
import { FieldError } from 'react-hook-form';
import SelectLib, { GroupBase, OptionProps, SingleValueProps, components } from 'react-select';
import countryList from 'react-select-country-list';

export interface CountryOption {
    value: string;
    label: string;
}

interface SelectProps {
    placeholder?: string;
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: FieldError;
}

export default function Select({ placeholder, className, label, value, onChange, error }: SelectProps) {
    const options = useMemo<CountryOption[]>(() => countryList().getData(), []);

    const Option = (props: OptionProps<CountryOption, false, GroupBase<CountryOption>>) => {
        const { data, isSelected } = props;
        const flagUrl = `https://flagcdn.com/${data.value.toLowerCase()}.svg`;

        return (
            <components.Option {...props}>
                <div className="select-row">
                    <div className="select-flag">
                        <Image className="select-flag-img" src={flagUrl} alt={data.label} width={24} height={24} />
                        <span>{data.label}</span>
                    </div>
                    <span className="select-check-icon">
                        <CheckSmallIcon isChecked={isSelected} />
                    </span>
                </div>
            </components.Option>
        );
    };

    const SingleValue = (props: SingleValueProps<CountryOption, false, GroupBase<CountryOption>>) => {
        const { data } = props;
        const flagUrl = `https://flagcdn.com/${data.value.toLowerCase()}.svg`;

        return (
            <components.SingleValue {...props}>
                <div className="select-flag">
                    <Image className="select-flag-img" src={flagUrl} alt={data.label} width={24} height={24} />
                    <span>{data.label}</span>
                </div>
            </components.SingleValue>
        );
    };

    const selectedOption = options.find((opt) => opt.value === value) ?? null;

    return (
        <div className={`select-wrapper ${className ?? ''}`}>
            {label && <label className="select-label">{label}</label>}
            <SelectLib<CountryOption, false>
                placeholder={placeholder}
                classNamePrefix="select"
                options={options}
                value={selectedOption}
                onChange={(val) => onChange?.(val?.value ?? '')}
                components={{ Option, SingleValue }}
            />
            {error && <p className="select-error">{error.message}</p>}
        </div>
    );
}
