import { CreateProductInput } from '@/schema/product'
import { trpc } from '@/utils/trpc'
import {useForm, Controller} from 'react-hook-form'
import Select from 'react-select'

const ProductForm = () => {
  const { register, handleSubmit, control } = useForm<CreateProductInput>();

  const { mutate, error } = trpc.useMutation(["admin.createProduct"], {
    onError: (error) => {},
    onSuccess: () => {},
  });

  const onSubmit = (values: CreateProductInput) => {
    mutate(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Product Name" />
        <input {...register("description")} placeholder="Description" />
        <input {...register("featuredImage")} placeholder="Description" />
        <input {...register("price")} placeholder="Description" />
        <input {...register("salePrice")} placeholder="Description" />
        <input {...register("tags")} placeholder="Description" />
        <input {...register("description")} placeholder="Description" />
      </form>
    </div>
  );
}

export default ProductForm