import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AddBtn, EditBtn, DeleteBtn } from "./CrudButton";
import Box from "@mui/material/Box";

const TableMoudle = (props) => {
  return (
    <>
      <Box sx={{ pb: 5 }}>
        <AddBtn />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {props.title.map((name, index) =>
                index === 0 ? (
                  <TableCell key={index} align="left">{name}</TableCell>
                ) : (
                  <TableCell  key={index} align="center">{name}</TableCell>
                )
              )}
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => (
              <TableRow
                key={item.data1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(item).map((itemValue, index) =>
                  index === 0 ? (
                    <TableCell  key={index} component="th" scope="row">
                      {itemValue}
                    </TableCell>
                  ) : (
                    <TableCell  key={index} align="center">{itemValue}</TableCell>
                  )
                )}
                <TableCell align="center">
                  <EditBtn /> <DeleteBtn />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableMoudle;
