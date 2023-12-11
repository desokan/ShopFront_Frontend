import Footer from "../components/footer/FooterContainer";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import NavBarMid from "../components/navbar/NavBarMid";

const Dashboard = () => {
  return (
    <>
      <NavBarMid disabled={true}/>
      <DashboardComponent />
      <Footer />
    </>
  );
};
export default Dashboard;
