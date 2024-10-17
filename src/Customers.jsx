import React from "react";
import CustomersSlides from "./componentsFour/customersSlides/CustomersSlides";
import CustomersCompany from "./componentsFour/customersCompany/CustomersCompany";
import CustomersGrid from "./componentsFour/CustomersGrid/CustomersGrid";

const Customers = () => {
  return (
    <>
      <CustomersSlides />
      <CustomersCompany/>
      <CustomersGrid/>
    </>
  );
};

export default Customers;
