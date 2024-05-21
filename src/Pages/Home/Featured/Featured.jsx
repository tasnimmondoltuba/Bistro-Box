import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="flex justify-center bg-slate-500 bg-opacity-40 items-center  pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Aug 20, 29</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            {" "}
            gap-16 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, porro delectus. Atque iure exercitationem amet
            voluptatibus itaque. In, magnam qui.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
