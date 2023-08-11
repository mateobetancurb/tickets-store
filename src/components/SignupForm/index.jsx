import { useForm } from "react-hook-form";

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleFormSubmit = (data) => {
		console.log(data);
	};

	const handleFormClear = () => {
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<label>
					Name
					<input {...register("name", { required: true })} />
				</label>
				<br />
				<label>
					Age
					<input {...register("age", { required: true })} />
				</label>
				<br />
				<label>
					Address
					<input {...register("address", { required: true })} />
				</label>
				<br />
				<label>
					Zipcode
					<input {...register("zipcode", { required: true })} />
				</label>
				<br />
				<label>
					Phone
					<input {...register("phone", { required: true })} />
				</label>
				<br />
				<div>
					<button type="submit">Submit</button>
					<button type="button" onClick={handleFormClear}>
						Clear
					</button>
				</div>
			</form>
		</>
	);
};
export { SignupForm };
