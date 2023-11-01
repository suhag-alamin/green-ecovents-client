import Celebrate from "@/components/ui/AboutUs/Celebrate";
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
        <Celebrate />
      </div>
    </div>
  );
};

export default AboutUs;
