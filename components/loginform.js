"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
      }}
    >
      <Paper sx={{ p: 4, width: 350, textAlign: "center" }} elevation={4}>
        {session ? (
          <Stack spacing={2}>
            <Avatar
              src={session.user.image}
              alt={session.user.name}
              sx={{ width: 80, height: 80, mx: "auto" }}
            />
            <Typography variant="h6">{session.user.name}</Typography>
            <Typography variant="body2">{session.user.email}</Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => signOut()}
            >
              تسجيل الخروج
            </Button>
          </Stack>
        ) : (
          <>
            <Typography variant="h6" mb={3}>
              سجل الدخول بحساب Google
            </Typography>
            <Button
              variant="contained"
              startIcon={<FcGoogle />}
              onClick={() => signIn("google")}
              sx={{ backgroundColor: "#4285F4", color: "#fff" }}
              fullWidth
            >
              تسجيل الدخول بجوجل
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
}
