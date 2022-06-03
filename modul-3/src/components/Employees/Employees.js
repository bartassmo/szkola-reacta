import React from "react";

import EmployeesItem from "./EmployeesItem";
import { EmployeesData } from "./EmployeesData";



function Employees() {
  return (
    <>
      {EmployeesData.map((el) => (
        <EmployeesItem
          name={ el.name }
          age={ el.age }
          salary={ el.salary }
          position={ el.position }
        />
      ))}
    </>
  )
}

export default Employees;