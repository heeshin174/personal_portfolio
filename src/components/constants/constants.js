import DroneFarm from "../../img/Project/DroneFarm.png";
import HomeIot from "../../img/Project/HomeIot.png";
import Portfolio from "../../img/Project/Portfolio.png";
import Cardealer from "../../img/Project/Cardealer.png";

export const projects = [
  {
    title: "Drone Farm",
    description:
      "Design a drone farm dashboard with javafx. The project will handle both drone animation and physical drone flying.",
    image: DroneFarm,
    tags: ["Java", "Javafx"],
    source: "https://github.com/heeshin174/",
    visit: "https://github.com/heeshin174/",
    id: 0,
  },
  {
    title: "Home IoT",
    description:
      "The Home IoT project will simulate sensor data and user interaction with a smart home. The project will handle both current state information (I.e. what are the sensors indicating right now) and historical information. A process will be required to generate historical sensor data and record the data into a database.",
    image: HomeIot,
    tags: ["Python", "flask", "HTML", "CSS", "JavaScript", "Postgresql"],
    source: "https://github.com/heeshin174/",
    visit: "https://github.com/heeshin174/",
    id: 1,
  },
  {
    title: "Personal Portfolio",
    description:
      "This is a personal portfolio project that represent my overall career as developer",
    image: Portfolio,
    tags: ["React", "CSS"],
    source: "https://github.com/heeshin174/heeshin174.github.io",
    visit: "https://heeshin174.github.io/",
    id: 2,
  },
  {
    title: "Car dealership Database",
    description: "Design a Car dealership Database using Postgresql",
    image: Cardealer,
    tags: ["Postgresql"],
    source: "https://github.com/heeshin174",
    visit: "https://github.com/heeshin174",
    id: 3,
  },
];
