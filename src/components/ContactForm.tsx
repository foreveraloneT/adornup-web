import * as React from 'react';
import Button from './Button';

import Input from './Input';
import Textarea from './TextArea';

interface ContactFormData {
  name: string
  email: string
  note: string
}

interface PureContactFormProps {
  name?: string
  email?: string
  note?: string
  onNameChange: React.ChangeEventHandler<HTMLInputElement>
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onNoteChange: React.ChangeEventHandler<HTMLTextAreaElement>
  onSubmit: (data: ContactFormData) => void
}

const PureContactForm: React.FC<PureContactFormProps> = ({
  name = '',
  email = '',
  note = '',
  onNameChange,
  onEmailChange,
  onNoteChange,
  onSubmit,
}) => {
  const shouldDisabledButton = React.useMemo<boolean>(() => {
    return [name, email].some(value => value.length === 0);
  }, [name, email]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      note,
    });
  };

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={onSubmitHandler}
    >
      <Input
        placeholder='Enter your name*'
        value={name}
        onChange={onNameChange}
        full
      />
      <Input
        placeholder='Email*'
        type="email"
        value={email}
        onChange={onEmailChange}
        full
      />
      {/* TODO: phone input */}
      <Input
        placeholder='+66'
        full
      />
      <Textarea
        placeholder='Add text (optional)'
        rows={8}
        value={note}
        onChange={onNoteChange}
        full
      />
      <Button
        className='uppercase'
        type="submit"
        full
        disabled={shouldDisabledButton}
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

  const onSubmitHandler = (data: ContactFormData): void => {
    console.log('data', data);
  };

  return (
    <PureContactForm
      name={name}
      email={email}
      note={note}
      onNameChange={(e) => { setName(e.target.value); }}
      onEmailChange={(e) => { setEmail(e.target.value); }}
      onNoteChange={(e) => { setNote(e.target.value); }}
      onSubmit={onSubmitHandler}
    />
  );
};

export default ContactForm;
