import Banner from "../components/home/Banner/Banner";
import About from "../components/home/about/About";
import EducationAndSkill from "../components/home/educationAndSkill/EducationAndSkill";
import HappyClients from "../components/home/happyClientsCounter/HappyClients";
import Services from "../components/home/services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <EducationAndSkill />
      <HappyClients />
    </div>
  );
};

export default Home;
