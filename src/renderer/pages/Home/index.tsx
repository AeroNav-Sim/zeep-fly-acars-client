import { BackgroundImage, Container, Tabs } from "@mantine/core";
import { useState } from "react";
import backgroundImage from "../../../assets/images/cockpit.webp";
import Flight from "../../components/pages/Home/Flight";
import Radar from "../../components/pages/Home/Radar";
import Metar from "../../components/pages/Home/Metar";
import Logbook from "../../components/pages/Home/Logbook";
import News from "../../components/pages/Home/News";
import Settings from "../../components/pages/Home/Settings";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string | null>("flight");

  return (
    <BackgroundImage src={backgroundImage} h="100vh" w="100vw">
      <Container h="100vh" w="100vw" bg="rgba(0, 0, 0, 0.7)">
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="flight">Plano de Voo</Tabs.Tab>
            <Tabs.Tab value="radar">Radar</Tabs.Tab>
            <Tabs.Tab value="metar">Metar</Tabs.Tab>
            <Tabs.Tab value="logbook">Logbook</Tabs.Tab>
            <Tabs.Tab value="news">Notícias</Tabs.Tab>
            <Tabs.Tab value="settings">Configurações</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="flight" py={10}>
            <Flight />
          </Tabs.Panel>

          <Tabs.Panel value="radar">
            <Radar />
          </Tabs.Panel>

          <Tabs.Panel value="metar">
            <Metar />
          </Tabs.Panel>

          <Tabs.Panel value="logbook">
            <Logbook />
          </Tabs.Panel>

          <Tabs.Panel value="news">
            <News />
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </BackgroundImage>
  );
};

export default Home;
