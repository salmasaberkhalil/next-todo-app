"use client";

import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodos(data.data);
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input }),
    });

    if (res.ok) {
      const data = await res.json();
      setTodos((prev) => [...prev, data.todo]);
      setInput("");
    } else {
      alert("title must be unique");
    }
  };

  const handelDelete = async (id) => {
    const res = await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } else {
      alert("حدث خطأ أثناء الحذف");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 10,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fdfdfd",
      }}
    >
      <Typography variant="h5" mb={2}>
        To-Do List ✅
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <TextField
          name="title"
          label="Enter a new task"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>

      <Paper elevation={1}>
        <List>
          {todos.length === 0 ? (
            <Typography textAlign="center" py={2} color="gray">
              No tasks yet.
            </Typography>
          ) : (
            todos.map((todo) => (
              <ListItem key={todo._id} divider>
                <ListItemText primary={todo.title} />
                <Button onClick={() => handelDelete(todo._id)}>Delete</Button>
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Box>
  );
}
