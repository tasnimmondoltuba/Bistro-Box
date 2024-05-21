import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Resturent | Menu</title>
      </Helmet>
      <Cover img={menuImg}></Cover>
      <h2>men men menu</h2>
    </div>
  );
};

export default Menu;
