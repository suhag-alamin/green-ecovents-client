import OurApproach from "@/components/ui/AboutUs/OurApproach";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";

const AboutUs = () => {
  return (
    <div>
      <GEBreadCrumb
        title="Who We Are"
        items={[
          {
            label: "About Us",
          },
        ]}
      />
      <div>
        <OurApproach />
      </div>
    </div>
  );
};

export default AboutUs;
