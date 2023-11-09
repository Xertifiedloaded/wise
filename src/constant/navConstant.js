import Nigeria from "../assets/images/nigeria.svg";
import Australia from "../assets/images/Austria.svg";
import Argentina from "../assets/images/argentina.svg";
import Arrow from "../assets/images/arrow.svg";
export const NavMenu = [
  {
    id: 1,
    title: "pricing",
  },
  {
    id: 2,
    title: "help",
  },
  {
    id: 3,
    title: "EU",
    arrow: Arrow,
    border: "1px solid red",
    country: [
      {
        local: "Nigeria",
        countryIcon: Nigeria,
      },
      {
        local: "Australia",
        countryIcon: Australia,
      },
      {
        local: "Argentina",
        countryIcon: Argentina,
      },
    ],
  },
  {
    id: 4,
    title: "register",
    link:'/register'
  },
];
