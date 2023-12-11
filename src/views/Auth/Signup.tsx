import { TextInput, PasswordInput, Paper, Title, Container, Button, Flex } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "@/types/FormSchema.type";

export default function SignupPage() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validate: yupResolver(signupSchema),
  });

  return (
    <Container size={420}>
      <div>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} />
            <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} />
            <PasswordInput
              label="Confirm password"
              placeholder="Your confirm password"
              mt="md"
              {...form.getInputProps("confirmPassword")}
            />

            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
            <Flex justify={"center"}>
              <Button variant="subtle" leftIcon={<IconArrowLeft size="0.9rem" />} onClick={() => navigate("/signin")}>
                Sign in
              </Button>
            </Flex>
          </Paper>
        </form>
      </div>
    </Container>
  );
}
