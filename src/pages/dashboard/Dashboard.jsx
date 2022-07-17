import React from "react";
import { useAuth } from "../../context/authContext";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  if (loading) {
    return <h1>Loding...</h1>;
  }
  return (
    <Container>
      <h1>Dashboard</h1>
      <p>{user.email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};
