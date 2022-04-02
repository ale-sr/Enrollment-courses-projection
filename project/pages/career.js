import React, { useEffect, useState } from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell, Pagination } = Table;
import { CSVLink } from "react-csv";
import { useRouter } from "next/dist/client/router";
import { courses_input } from "../components/Courses";

import VerifyUser from "../components/VerifyUser";

const Career = () => {
  const router = useRouter();
  const name = router.query.name;
  const [courses, setCourses] = useState(courses_input);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var data = [];
    courses_input.forEach(function (item, index) {
      if (item.area === name) data.push(item);
    });
    setCourses(data);
  }, []);

  /*useEffect(() => {
    ProjectionService.getAll()
      .then((response) => {
        console.log(response);
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  function getData() {
    if (sortColumn && sortType) {
      return courses.sort((a, b) => {
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
    return courses;
  }

  function handleSortColumn(sortColumn_, sortType_) {
    setLoading(true);

    setTimeout(() => {
      setSortColumn(sortColumn_);
      setSortType(sortType_);
      setLoading(false);
    }, 500);
  }

  return (
    <div>
      <VerifyUser />
      <CSVLink {...{ data: getData(), filename: "prediccion.csv" }}>
        Export to CSV
      </CSVLink>
      <Table
        height={420}
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
        <Column align="center" fixed sortable>
          <HeaderCell>Código del curso</HeaderCell>
          <Cell dataKey="codcurso" />
        </Column>

        <Column width={400} fixed sortable>
          <HeaderCell>Nombre</HeaderCell>
          <Cell dataKey="nombrecurso" />
        </Column>

        <Column sortable>
          <HeaderCell>Coeficiente de determinación</HeaderCell>
          <Cell dataKey="r2" />
        </Column>

        <Column sortable>
          <HeaderCell>Área</HeaderCell>
          <Cell dataKey="area" />
        </Column>
        <Column sortable>
          <HeaderCell>Estimación</HeaderCell>
          <Cell dataKey="prediccion" />
        </Column>
      </Table>
    </div>
  );
};

export default Career;
