import {
  Edit,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@pankod/refine-chakra-ui";
import { useForm } from "@pankod/refine-react-hook-form";

export const LangEdit = () => {
  const {
    refineCore: { formLoading },
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<any>();

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!errors?.title}>
        <FormLabel>Title</FormLabel>
        <Input
          id="title"
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>
      </FormControl>
    </Edit>
  );
};
