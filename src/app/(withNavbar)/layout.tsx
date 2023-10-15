"use client";
import Contents from "@/components/ui/Contents";
import { Layout } from "antd";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const userLoggedIn = isLoggedIn();
  // const router = useRouter();

  // console.log(userLoggedIn);

  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     router.push("/login");
  //   }
  //   setIsLoading(true);
  // }, [router, userLoggedIn]);

  // if (!isLoading) {
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <Layout>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default WithNavbarLayout;
