import type { StoryObj } from '@storybook/react';
import { Form as FormSnack, FormType } from '.';
import { Button } from '../button';
import { Input } from '../input';
import { Select } from '../select';
import { Calendar } from '../calendar';

const meta = {
  title: 'Form/Form',
  component: FormSnack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    onSubmit: () => {},
    children: <></>,
  },
  render: () => {
    const handleOnSubmit = (form: FormType) => {
      console.log('Form:', form);
      if (Object.values(form).some(({ error }) => error)) {
        console.log('Form has errors');
        return;
      }
      console.log('Form submitted');
    };

    return (
      <>
        <FormSnack onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={[{ type: 'empty' }, { type: 'email' }]} />

          <Input label="Password" type="password" name="pass" validatorOptions={[{ type: 'empty' }]} />

          <Select
            label="Select"
            name={'select'}
            validatorOptions={[{ type: 'empty' }]}
            selectOptions={['Option1', 'Option2']}></Select>

          <Calendar name={'date'} label={'Date'} validatorOptions={[{ type: 'empty' }, { type: 'date' }]} />

          <Button type="submit">Submit</Button>
        </FormSnack>
      </>
    );
  },
};
