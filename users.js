import React, { useEffect, useState } from "react";
import { FilterableTable } from "react-filterable-table";

import UserService from "../services/userService";
import verifyUser from "../functions/verifyUser";

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
  { name: "id", displayName: "id", inputFilterable: true, sortable: true },
  {
    name: "email",
    displayName: "Correo",
    inputFilterable: true,
    sortable: true,
  },
  {
    name: "area",
    displayName: "Área",
    inputFilterable: true,
    exactFilterable: true,
    sortable: true,
  },
];

const Users = () => {
  const [usersData, setusersData] = useState([]);

  verifyUser();
  useEffect(() => {
    UserService.getAll()
      .then((response) => {
        console.log(response);
        setusersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FilterableTable
      namespace="Users"
      initialSort="id"
      data={usersData}
      fields={fields}
      noRecordsMessage="There are no users to display"
      noFilteredRecordsMessage="No user match your filters!"
    />
  );
};

export default Users;
