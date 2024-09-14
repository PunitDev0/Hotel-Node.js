import { useForm } from 'react-hook-form';
import axios from 'axios';

const App
 = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data  );
    
    try {
      const response = await axios.post('http://localhost:3000/person', data);
      console.log('Person saved successfully:', response.data);
      reset(); // reset the form on success
    } catch (error) {
      console.error('Error saving person:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <label>Name</label>
        <input {...register('name', { required: 'Name is required' })} className="border p-2 w-full" />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register('age', { required: 'Age is required' })} className="border p-2 w-full" />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <div>
        <label>Work</label>
        <select {...register('work', { required: 'Work is required' })} className="border p-2 w-full">
          <option value="chef">Chef</option>
          <option value="manager">Manager</option>
          <option value="waiter">Waiter</option>
        </select>
        {errors.work && <span>{errors.work.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: 'Email is required' })} className="border p-2 w-full" />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Address</label>
        <input {...register('address', { required: 'Address is required' })} className="border p-2 w-full" />
        {errors.address && <span>{errors.address.message}</span>}
      </div>

      <div>
        <label>Salary</label>
        <input type="number" {...register('salary', { required: 'Salary is required' })} className="border p-2 w-full" />
        {errors.salary && <span>{errors.salary.message}</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
    </form>
  );
};

export default App
;
