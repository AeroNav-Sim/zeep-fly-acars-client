import {
  Container,
  Input,
  Button,
  BackgroundImage,
  Box,
  Image,
  Flex,
  Text,
} from "@mantine/core";
import backgroundImage from "../../../assets/images/cockpit.webp";
import logo from "../../../assets/logo/logo-full.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <BackgroundImage src={backgroundImage} h="100vh" w="100vw">
      <Container h="100vh" w="100vw" bg="rgba(0, 0, 0, 0.7)">
        <Flex justify="center" direction="column" align="center" h="92%">
          <Image src={logo} alt="Logo" w={200} mb={40} />
          <Box maw={300} mx="auto">
            <Input
              placeholder="Pilot ID / Callsign"
              variant="filled"
              size="md"
              radius="md"
              pb={10}
            />
            <Input
              placeholder="Senha"
              variant="filled"
              size="md"
              radius="md"
              type="password"
            />
            <Flex justify="flex-end" mt={10}>
              <Button
                size="md"
                radius="md"
                variant="light"
                onClick={handleLogin}
              >
                Conectar
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Flex
            justify="center"
            align="center"
            direction="column"
            flex={1}
            gap={5}
          >
            <Text size="xs" c="white">
              Powered by AeroNav Sim
            </Text>
            <Text size="xs" c="white">
              Versão 1.0.0
            </Text>
          </Flex>
        </Box>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
