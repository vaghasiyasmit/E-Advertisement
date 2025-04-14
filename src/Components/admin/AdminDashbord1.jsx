import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, Typography, Grid } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);



export default function AdminDashboard1() {
  const [userCount, setUserCount] = useState(0)
  const [agencyCount, setAgencyCount] = useState(0)
  // const navigate = useNavigate()

  const getAllUsers = async () => {
      try {
          const res = await axios.get('/users')
          const users = res.data.data

          const userCount = users.filter(u => u.roleId.name === 'user').length
          const agencyCount = users.filter(u => u.roleId.name === 'Agency').length

          setUserCount(userCount)
          setAgencyCount(agencyCount)
      } catch (err) {
          console.error('Failed to fetch users:', err)
      }
  }

  useEffect(() => {
      getAllUsers()
  }, [])

  const handleCardClick = (type) => {
      navigate(`/users/${type}`)  // this will go to /users/user or /users/agency
  }

  return (
      <div style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                  <Card 
                      sx={{ backgroundColor: '#e3f2fd', borderRadius: 3, boxShadow: 3, cursor: 'pointer' }}
                      onClick={() => handleCardClick('user')}
                  >
                      <CardContent>
                          <Typography variant="h6">Total Users</Typography>
                          <Typography variant="h4" fontWeight="bold">{userCount}</Typography>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Card 
                      sx={{ backgroundColor: '#fce4ec', borderRadius: 3, boxShadow: 3, cursor: 'pointer' }}
                      onClick={() => handleCardClick('agency')}
                  >
                      <CardContent>
                          <Typography variant="h6">Total Agencies</Typography>
                          <Typography variant="h4" fontWeight="bold">{agencyCount}</Typography>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
      </div>
  )
}
