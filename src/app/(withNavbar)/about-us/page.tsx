import OurApproach from "@/components/ui/AboutUs/OurApproach";
import WhyChooseUs from "@/components/ui/AboutUs/WhyChooseUs";
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
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default AboutUs;
