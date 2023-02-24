import { useEffect } from 'react';
import { useForm, Resolver } from 'react-hook-form';

import { Button, Text } from '@ui';

interface FormFields {
  name: string;
}

const resolver: Resolver<FormFields> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver });
  const onSubmit = (data: FormFields) => {
    console.log('hi');
    fetch('/api/addUser', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="mx-auto my-16 max-w-screen-lg px-5">
      <div className="text-lg text-center mb-8">Add a new player</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg rounded-xl p-5 flex flex-col gap-y-5"
      >
        <div className="flex gap-x-5 items-center">
          <label htmlFor="name">
            <Text>Name</Text>
          </label>
          <input
            className="px-4 py-2 rounded-md border"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <Button theme="warning" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Index;
