import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[10px]">
      <div className="container">
        <SectionTitle
          subtitle="2023"
          title="Accredited Communities"
          paragraph="The Main Street America™ standards of performance—used for designating programs as Main Street America™ Accredited members—were developed by the National Main Street Center and our Coordinating Program partners. Main Street America™ designation at the Accredited level is available to programs affiliated with a Coordinating Program. To see the criteria for accreditation"
          width="100%"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
