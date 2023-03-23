import classNames from 'classnames';
import * as React from 'react';
import
BasePhoneInput, {
  type PhoneInputProps as BasePhoneInputProps,
  type CountryData,
} from 'react-phone-input-2';

export interface PhoneInputProps extends BasePhoneInputProps {
  full?: boolean
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  full = false,
  containerClass,
  buttonClass = '',
  inputClass = '',
  dropdownClass = '',
  disabled = false,
  ...props
}) => {
  return (
    // NOTE: Use css from 'src/styles/phone-input.css'
    <BasePhoneInput
      containerClass={classNames(
        {
          '!bg-grey-disabled': disabled,
        },
        containerClass,
      )}
      buttonClass={classNames(
        'phone-button',
        '!bg-transparent !border !border-solid !border-grey-text1 !border-r-0 !rounded-none !pl-4',
        buttonClass,
      )}
      inputClass={classNames(
        '!outline-none !placeholder:uppercase !placeholder:text-grey-text2 !placeholder:font-sans !placeholder:font-normal',
        '!text-black !text-base !font-sans !font-normal',
        '!pl-[72px] !pr-4 !py-3 !border !border-solid !border-grey-text1',
        '!h-auto !rounded-none !bg-transparent !border-l-0',
        {
          '!w-full': full,
        },
        inputClass,
      )}
      dropdownClass={classNames(
        'phone-dropdown',
        '!bg-white !rounded-none !mx-0 !my-2 !px-4 !pb-4 !z-20 !left-0',
        '!uppercase !font-sans !text-base w-[350px]',
        dropdownClass,
      )}
      countryCodeEditable={false}
      enableSearch
      disableSearchIcon
      searchPlaceholder='Search for country'
      searchNotFound='No result found'
      autocompleteSearch={false}
      disabled={disabled}
      {...props}
    />
  );
};

export type {
  CountryData,
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const isCountryData = (val: CountryData | {}): val is CountryData => {
  return Object.keys(val).length > 0;
};

export default PhoneInput;
