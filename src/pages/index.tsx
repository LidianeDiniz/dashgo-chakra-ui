import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";


type SignInFormData = {
  email: string;
  password: string;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required("Senha obrigatória"),
})
export default function SingnIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(SignInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const { errors } = formState;

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
        
            type="email"
            label="E-mail"
            error={errors.email}
            {...register( 'email') }
          />
          <Input
           
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
