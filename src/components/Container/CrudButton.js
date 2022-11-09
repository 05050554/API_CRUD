import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";

export const AddBtn = (props) => {
  return (
    <>
      <Button variant="contained" color="success" onClick={props.action}>
        {" "}
        <AddCircleOutlineIcon />
        新增
      </Button>
    </>
  );
};


export const EditBtn = (props) => {
    return (
      <>
        <Tooltip title="修改">
          <Button variant="contained" onClick={props.action}>
            <EditIcon style={{ fontSize: "30" }} />
            Edit
          </Button>
        </Tooltip>{" "}
      </>
    );
  };

  export const DeleteBtn = (props) => {
    return (
      <>
        <Tooltip title="刪除">
          <Button
            variant="contained"
            color="error"
            onClick={props.action}
          >
            <DeleteIcon style={{ fontSize: "30" }} />
            Delete
          </Button>
        </Tooltip>
      </>
    );
  };

  export const InnerTitle = (props) => {
    return (
      <>
        <Typography variant="h3" fontWeight="500" sx={{ pb: 5 }}>
            {props.name}
          </Typography>

      </>
    );
  };