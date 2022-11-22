import React from "react";
import TableMoudle from "./TableMoudle";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { InnerTitle } from "./CrudButton";
const title = ["Title1", "Title2", "Title3", "Title4", "Title5"];

const items = [
  {
    data1: "data1",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data2",
    data2: "7",
    data3: "4",
    data4: "3",
    data5: "2",
  },
  {
    data1: "data3",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data4",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data5",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
];
const TestApi4 = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} sx={{ pt: 5 }}>
          <InnerTitle name="API_4" />

          <TableMoudle title={title} items={items} />
        </Container>
      </React.Fragment>
    </>
  );
};

export default TestApi4;
