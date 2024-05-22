import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categorys = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = category.indexOf(category);
  const [tabIndex, setTabIndex] = useState();
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="my-20">
      <Helmet>
        <title>Bistro Boss Resturent | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-16"
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
