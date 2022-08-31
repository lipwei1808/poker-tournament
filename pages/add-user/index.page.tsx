import { useEffect } from "react";
import { useForm, Resolver, Controller } from "react-hook-form";

interface FormFields {
  name: string;
  numOfGames: number;
}

const resolver: Resolver<FormFields> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const Index = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver });
  const onSubmit = (data: FormFields) => console.log(data);

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
          <label htmlFor="name">Name</label>
          <input
            className="px-4 py-2 rounded-md border"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="flex gap-x-5 items-center">
          <label htmlFor="numOfGames">Number of Games</label>
          <Controller
            control={control}
            name="numOfGames"
            render={({ field }) => (
              <input
                {...field}
                className="px-4 py-2 rounded-md border"
                type="number"
                id="numOfGames"
                min={1}
                onChange={(field) => {
                  console.log(field.currentTarget.value);
                }}
              />
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
