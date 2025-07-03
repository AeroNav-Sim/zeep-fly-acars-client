import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  Text,
  Textarea,
} from "@mantine/core";

const Flight = () => {
  return (
    <>
      <Text size="xl" fw={700}>
        Olá, Julio Sousa
      </Text>
      <Grid mt={10}>
        <Grid.Col span={6}>
          <Box bg="rgba(0, 0, 0, 0.7)" p={10} bdrs={10} h="100%">
            <Text size="md" fw={500}>
              Plano de Voo
            </Text>
            <Divider my={10} />
            <Grid mt={10}>
              <Grid.Col span={6}>
                <Input.Wrapper label="Partida - ICAO">
                  <Input variant="filled" radius="md" placeholder="Ex: SBSP" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Input.Wrapper label="Chegada - ICAO">
                  <Input variant="filled" radius="md" placeholder="Ex: SBJR" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Input.Wrapper label="Número de Voo">
                  <Input variant="filled" radius="md" placeholder="Ex: 1234" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Input.Wrapper label="Passageiros">
                  <Input variant="filled" radius="md" placeholder="Ex: 178" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Input.Wrapper label="Altitude de Cruzeiro">
                  <Input variant="filled" radius="md" placeholder="Ex: 39000" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Input.Wrapper label="ZFW (kg)">
                  <Input variant="filled" radius="md" placeholder="Ex: 27849" />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  label="Rota"
                  placeholder="Ex: SBSP DCT SBJR"
                  variant="filled"
                  radius="md"
                />
              </Grid.Col>
            </Grid>
            <Flex justify="flex-end" gap={10} mt={10}>
              <Button radius="md" variant="light" color="green">
                Iniciar Voo
              </Button>
              <Button radius="md" variant="light" color="red">
                Finalizar Voo
              </Button>
            </Flex>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box bg="rgba(0, 0, 0, 0.7)" p={10} bdrs={10} h="100%">
            <Text size="sm" c="gray" fw={300}>
              [10:45:00] Iniciando Voo...
            </Text>
            <Text size="sm" c="gray" fw={300}>
              [10:45:00] Iniciando Voo...
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Flight;
