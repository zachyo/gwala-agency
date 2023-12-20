import PageTitle from "../components/Typography/PageTitle";
import PayoutSettings from "../components/Settings/PayoutSettings";
import CommissionSettings from "../components/Settings/CommissionSettings";
import InitiatePayMe from "../components/Settings/PayMeSettings";

const SettingsPage = () => {
  return (
    <div className="mb-8">
      <PageTitle>Settings</PageTitle>
      <div className="flex flex-col gap-8">
        <PayoutSettings />
        <InitiatePayMe />
        <CommissionSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
