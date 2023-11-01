import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import GEDashboardBreadCrumb from "@/components/ui/GEDashboardBreadCrumb";

const AboutUs = () => {
  return (
    <div>
      <GEBreadCrumb
        items={[
          {
            label: "About Us",
          },
        ]}
      />
    </div>
  );
};

export default AboutUs;
