const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-16 ">
      <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
      <h3 className="text-5xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
