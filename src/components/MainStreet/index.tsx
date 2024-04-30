import SectionTitle from "@/components/Common/SectionTitle";

const MainStreet = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Florida Main Streets"
          title=""
          paragraph=
          {`Explore small towns and traditional commercial corridors by visiting Florida Main Streets! Consisting of over fifty historic towns and business districts across the state, Florida Main Streets highlight unique local businesses and signature events that make Florida communities welcoming and lively places to visit. 
          \n In Florida, communities have discovered that with the help of Florida Main Street, downtown can thrive again. Since 1985, Florida Main Street encourages economic development and is dedicated to bringing jobs, dollars, and people back to Florida’s historic districts, but most importantly, Florida Main Street is committed to building pride within the community.`}
          width="90%"
          center
        />

      </div>
    </section>
  );
};

export default MainStreet;
