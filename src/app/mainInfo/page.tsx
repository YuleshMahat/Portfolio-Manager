import MainDetailForm from "@/components/MainDetailForm";
import React from "react";
import DashboardLayout from "@/app/dashboard/layout";

const page = () => {
  return (
    <DashboardLayout>
      <div className="d-flex flex-column justify-content-center container">
        <h1>Manage your website greeting to users!</h1>
        <MainDetailForm />
      </div>
    </DashboardLayout>
  );
};

export default page;
