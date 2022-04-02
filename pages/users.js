import React, { useEffect, useState } from "react";
import { Table, Button, Alert, InputGroup, Icon, Input } from "rsuite";
const { Column, HeaderCell, Cell, Pagination } = Table;
import { useRouter } from "next/router";

import UserService from "../services/userService";
import VerifyUser from "../components/VerifyUser";
import { Heading } from "@chakra-ui/layout";

const inputStyle = {
  width: "50%",
};

const Users = () => {
  const router = useRouter();
  const [usersData, setUsersData] = useState([]);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UserService.getAll()
      .then((response) => {
        console.log(response);
        setUsersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getData() {
    if (sortColumn && sortType) {
      return usersData.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return usersData;
  }
  function handleSortColumn(sortColumn_, sortType_) {
    setLoading(true);

    setTimeout(() => {
      setSortColumn(sortColumn_);
      setSortType(sortType_);
      setLoading(false);
    }, 500);
  }

  function submitUser2() {
    var email = document.getElementById("email_create").value;
    var area = document.getElementById("area_create").value;
    var password = "123";

    var obj = new Object();
    obj.email = email;
    obj.area = area;
    obj.password = password;

    var data = JSON.stringify(obj);
    console.log(data);
    UserService.create(data);
    router.push("/users");
  }

  function deleteUser2(id) {
    UserService.remove(id);
    router.push("/users");
  }

  function updateUser2(id) {
    router.push("/users");
  }

  function generateProjection() {
    Alert.info("La proyección está en proceso de generarse.");
    //Alert.success("La proyección fue procesada exitosamente.");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <VerifyUser />
      <Heading>Usuarios</Heading>
      <div style={inputStyle}>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="avatar" />
          </InputGroup.Addon>
          <Input type="text" id="email_create" name="email" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="tag-area" />
          </InputGroup.Addon>
          <Input type="text" id="area_create" name="area" />
        </InputGroup>
        <Button type="button" onClick={submitUser2}>
          {" "}
          Crear{" "}
        </Button>
      </div>
      <Table
        height={420}
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        /*onRowClick={(data) => {
          console.log(data);
        }}*/
      >
        <Column align="center" sortable>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={400} sortable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column sortable>
          <HeaderCell>Área</HeaderCell>
          <Cell dataKey="area" />
        </Column>
        <Column width={120} fixed="right">
          <HeaderCell>Action</HeaderCell>

          <Cell>
            {(rowData) => {
              function handleAction() {
                deleteUser2(rowData.id);
              }
              return (
                <span>
                  {/*<a onClick={handleAction}> Edit </a> |{" "}*/}
                  <a onClick={handleAction}> Remove </a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>

      <Button appearance="primary" onClick={generateProjection}>
        Generar Proyección
      </Button>
    </div>
  );
};

export default Users;
