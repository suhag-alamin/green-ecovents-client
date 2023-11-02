import Info from "@/components/ContactUs/Info";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";

const ContactUs = () => {
  return (
    <div>
      <GEBreadCrumb
        title="How to Contact Us"
        items={[
          {
            label: "Contact Us",
          },
        ]}
      />
      <>
        <Info />
      </>
    </div>
  );
};

export default ContactUs;
