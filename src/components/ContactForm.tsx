import * as React from 'react';
import Button from './Button';
import { navigate } from 'gatsby';

import Input from './Input';
import Textarea from './TextArea';
import PhoneInput, {
  type PhoneInputProps,
  type CountryData,
} from './PhoneInput';

interface ContactFormData {
  name: string
  email: string
  note: string
  phone: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  countryData: CountryData | {}
}

interface PureContactFormProps {
  name?: string
  email?: string
  note?: string
  phone?: string
  disabled?: boolean
  onNameChange: React.ChangeEventHandler<HTMLInputElement>
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onNoteChange: React.ChangeEventHandler<HTMLTextAreaElement>
  onPhoneChange: PhoneInputProps['onChange']
  onSubmit: (data: ContactFormData) => void
}

const PureContactForm: React.FC<PureContactFormProps> = ({
  name = '',
  email = '',
  note = '',
  phone = '',
  disabled = false,
  onNameChange,
  onEmailChange,
  onNoteChange,
  onPhoneChange,
  onSubmit,
}) => {
  const shouldDisabledButton = React.useMemo<boolean>(() => {
    return [name, email, phone].some(value => value.length === 0);
  }, [name, email]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const [countryData, setCountryData] = React.useState<CountryData | {}>({});

  const onPhoneChangeHandler: PhoneInputProps['onChange'] = (value, data, ...rest) => {
    setCountryData(data);

    if (typeof onPhoneChange !== 'function') return;

    onPhoneChange(value, data, ...rest);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      note,
      phone,
      countryData,
    });
  };

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={onSubmitHandler}
      autoComplete="off"
    >
      <Input
        placeholder='Enter your name*'
        value={name}
        disabled={disabled}
        full
        onChange={onNameChange}
      />
      <PhoneInput
        country="th"
        full
        disabled={disabled}
        onChange={onPhoneChangeHandler}
      />
      <Input
        placeholder='Email*'
        type="email"
        value={email}
        full
        disabled={disabled}
        onChange={onEmailChange}
      />
      <Textarea
        placeholder='Add text (optional)'
        rows={8}
        value={note}
        full
        disabled={disabled}
        onChange={onNoteChange}
      />
      <Button
        className='uppercase'
        type="submit"
        full
        disabled={disabled || shouldDisabledButton}
      >
        Submit
      </Button>
    </form>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [note, setNote] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const sendEmail = async (data: ContactFormData): Promise<void> => {
    console.log('data', data);
    setSubmitting(true);

    // NOTE: stub calling the API
    await new Promise<void>((resolve) => {
      setTimeout(() => { resolve(); }, 500);
    });

    setSubmitting(false);

    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setNote('');
      void navigate('/');
    });
  };

  return (
    <PureContactForm
      name={name}
      email={email}
      note={note}
      phone={phone}
      disabled={submitting}
      onNameChange={(e) => { setName(e.target.value); }}
      onEmailChange={(e) => { setEmail(e.target.value); }}
      onNoteChange={(e) => { setNote(e.target.value); }}
      onPhoneChange={setPhone}
      onSubmit={(data) => { void sendEmail(data); }}
    />
  );
};

export default ContactForm;
