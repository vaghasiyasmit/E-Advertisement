import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material'

export const UserTable = () => {
    const { type } = useParams() // either 'user' or 'agency'
    const [rows, setRows] = useState([])

    const columns = [
        { field: 'username', headerName: 'username', width: 100 },
        // { field: 'Agencyname', headerName: 'Agencyname', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        // { field: 'phone', headerName: 'Phone', width: 150 },
        // { field: 'role', headerName: 'Role', width: 100 },
    ]

    const fetchUsers = async () => {
        try {
            const res = await axios.get('/user')
            const filtered = res.data.data.filter(u => u.roleId.name.toLowerCase() === type)
            const formattedRows = filtered.map(u => ({
                id: u._id, // ✅ Add this line
                username: u.username,
                // Agencyname: u.Agencyname,
                email: u.email,
                // role: u.roleId.name
            }))
            setRows(formattedRows)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }
    

    useEffect(() => {
        fetchUsers()
    }, [type])

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h5" gutterBottom>
                {type === 'user' ? 'User List' : 'Agency List'}
            </Typography>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={5} 
                    rowsPerPageOptions={[5]} 
                />
            </div>
            
        </div>
    )
}
