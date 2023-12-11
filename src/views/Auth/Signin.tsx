import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex, Tabs, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import useAuth from "../../context/AuthContext";
import { signinSchema } from "@/types/FormSchema.type";
import { IconBrandFacebook, IconBrandGoogle, IconBrandLine, IconLock } from "@tabler/icons-react";

export default function SigninPage() {
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const form = useForm({
    initialValues: { email: "tae@hotmail.com", password: "!Test123456" },
    validate: yupResolver(signinSchema),
  });

  async function handleSubmit() {
    try {
      console.log("Submit !");
      console.log(form.values);
      login(form.values.email, form.values.password);
    } catch (error) {}
  }

  return (
    <Container size={500}>
      <form onSubmit={form.onSubmit((values) => handleSubmit())}>
        <Paper radius="md" shadow="md" mt={30} py={30}>
          <Flex justify={"center"} align={"center"} mb={20}>
            <IconLock />
            <Title align="center" order={3} ml={"sm"}>
              เข้าสู่ระบบด้วย
            </Title>
          </Flex>

          <Tabs defaultValue="first" mt={20}>
            <Tabs.List grow>
              <Tabs.Tab value="first">บัญชี Social</Tabs.Tab>
              <Tabs.Tab value="second">Email & Password</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">
              <Box p={30}>
                <Button fullWidth>
                  <Box sx={{ position: "absolute", left: "0.925rem" }}>
                    <IconBrandFacebook />
                  </Box>
                  เข้าสู่ระบบด้วย Facebook
                </Button>
                <Button color="green" fullWidth mt={"sm"}>
                  <Box sx={{ position: "absolute", left: "0.925rem" }}>
                    <IconBrandLine />
                  </Box>
                  เข้าสู่ระบบด้วย Line
                </Button>
                <Button variant="default" fullWidth mt={"sm"}>
                  <Box sx={{ position: "absolute", left: "0.925rem" }}>
                    <IconBrandGoogle />
                  </Box>
                  เข้าสู่ระบบด้วย Google
                </Button>
              </Box>
            </Tabs.Panel>

            <Tabs.Panel value="second">
              <Box p={30}>
                <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} autoComplete="username" />
                <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  mt="md"
                  {...form.getInputProps("password")}
                  autoComplete="current-password"
                />
                <Group position="apart" mt="lg">
                  <Checkbox label="Remember me" />
                  <Anchor component="button" size="sm" onClick={() => navigate("/forgotpassword")}>
                    Forgot password?
                  </Anchor>
                </Group>
                <Button type="submit" fullWidth mt="xl" loading={loading}>
                  Sign in
                </Button>

                <Text color="dimmed" size="sm" align="center" mt={20}>
                  Do not have an account yet?{" "}
                </Text>
                <Text align="center">
                  <Anchor size="sm" component="button" onClick={() => navigate("/signup")}>
                    Create account
                  </Anchor>
                </Text>
              </Box>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </form>
    </Container>
  );
}
