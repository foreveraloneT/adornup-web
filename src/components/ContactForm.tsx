import * as React from 'react';
import Button from './Button';

import Input from './Input';
import Textarea from './TextArea';
import PhoneInput, {
  type PhoneInputProps,
  type CountryData,
  isCountryData,
} from './PhoneInput';
import { sendEmail } from '../apis/email';

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
  submitting?: boolean
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
  submitting = false,
  onNameChange,
  onEmailChange,
  onNoteChange,
  onPhoneChange,
  onSubmit,
}) => {
  const shouldDisabledButton = React.useMemo<boolean>(() => {
    return [name, email, phone].some(value => value.length === 0);
  }, [name, email, phone]);

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
        disabled={submitting}
        full
        max={200}
        onChange={onNameChange}
      />
      <PhoneInput
        country="th"
        full
        disabled={submitting}
        onChange={onPhoneChangeHandler}
      />
      <Input
        placeholder='Email*'
        type="email"
        value={email}
        full
        disabled={submitting}
        max={100}
        onChange={onEmailChange}
      />
      <Textarea
        placeholder='Add text (optional)'
        rows={8}
        value={note}
        full
        disabled={submitting}
        maxLength={3000}
        onChange={onNoteChange}
      />
      <Button
        className='uppercase'
        type="submit"
        full
        disabled={submitting || shouldDisabledButton}
      >
        { submitting ? 'Submitting...' : 'Submit' }
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

  const onSubmitHandler = async (data: ContactFormData): Promise<void> => {
    setSubmitting(true);

    const countryCode = isCountryData(data.countryData) ? data.countryData.countryCode : '';
    const countryName = isCountryData(data.countryData) ? data.countryData.name : '';

    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        note: data.note,
        phone: data.phone,
        countryCode,
        countryName,
        emailTo: process.env.GATSBY_RECEIVER_EMAILS ?? '',
      });
    } catch (_) {
      alert('Something went wrong, please try again later...');
    } finally {
      setSubmitting(false);
    }

    setTimeout(() => {
      window.location.reload();
    });
  };

  return (
    <PureContactForm
      name={name}
      email={email}
      note={note}
      phone={phone}
      submitting={submitting}
      onNameChange={(e) => { setName(e.target.value); }}
      onEmailChange={(e) => { setEmail(e.target.value); }}
      onNoteChange={(e) => { setNote(e.target.value); }}
      onPhoneChange={setPhone}
      onSubmit={(data) => { void onSubmitHandler(data); }}
    />
  );
};

export default ContactForm;
