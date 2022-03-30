import React from "react";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import Todoform from "../Todoform/Todoform";
import t from "./Todolistcss.module.css";
import { IconButton, Typography } from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  overall: {
    width: "50%",
  },
  table: {
    minWidth: 650,
  },
  Icon1: {
    "& svg": {
      fontSize: 25,
    },
  },
  Icon2: {
    "& svg": {
      fontSize: 35,
    },
  },
  Icon3: {
    "& svg": {
      fontSize: 75,
    },
  },
  Icon4: {
    "& svg": {
      fontSize: 100,
    },
  },
  empty: {
    margin: "20px",
  },
  
}))
const Todolist = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [flag, setFlag] = useState(false);
  const [editId, setEditId] = useState(0);

  // Fetch Tasks

  const getTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((resp) => setTasks(resp.data));
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:5000/tasks/${e.id}`, e)
      .then((resp) => {
        const newTodos = tasks.filter((event) => event.id !== e.id);
        setTasks(newTodos);
      })
      .catch((err) => console.log("error is ", err));
    setText("");
    setDay("");
  };

  const handleEdit = (e) => {
    console.log("takss", tasks);
    setEditId(e.id);
    setText(e.text);
    setDay(e.day);
    setFlag(true);
  };

  useEffect(() => {
    getTasks();
  }, []);
  console.log("taaks", tasks);
  return (
    <>
      <Todoform
        tasks={tasks}
        setTasks={setTasks}
        text={text}
        setText={setText}
        day={day}
        setDay={setDay}
        flag={flag}
        setFlag={setFlag}
        editId={editId}
        setEditId={setEditId}
        getTasks={getTasks}
      />
      <div className={t.center}>
        {tasks.length === 0 && (
          <Typography variant="h4" className={classes.empty}>
            {" "}
            No tasks to display please enter tasks!!!
          </Typography>
        )}




















        <ol>
          {tasks &&
            tasks.map((e) => {
              return (
                <Typography variant="h5">
                  <li key={e.id}>
                    {e.text} [ {e.day} ]
                    <IconButton
                      className={classes.Icon2}
                      color="secondary"
                      onClick={() => handleEdit(e)}
                    >
                      <EditTwoToneIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(e)}
                      className={classes.Icon2}
                      color="error"
                    >
                      <DeleteOutlineTwoToneIcon />
                    </IconButton>
                    {/* <button onClick={()=> handleEdit(e)}>Edit</button>
                  <button onClick={() => handleDelete(e)}>Delete</button> */}
                  </li>{" "}
                </Typography>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default Todolist;
