import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const HoardingTable = () => {
    const columns = [
        { field: "_id", headerName: "ID", width: 209},
        { field: "hoardingDimension", headerName: "Hoarding Dimension", width: 155 },
        { field: "hoardingType", headerName: "Hoarding Type", width: 115 },
        { field: "Availablity_Status", headerName: "Availablity", width: 90 },
        { field: "hourlyRate", headerName: "Hourly Rate", width: 100 },
        { field: "stateId", headeName: "State", width: 65 },
        { field: "cityId", headerName: "City", width: 65 },
        { field: "areaId", headerName: "Area", width: 65 },
        { field: "latitude", headerName: "Latitude", width: 80 },
        { field: "longitude", headerName: "Longitude", width: 90 }
    ];

    const [hoarding, sethoarding] = useState([]);

    const getallhoarding = async () => {
        try {
            const res = await axios.get("/hoarding/getallhoarding");
            sethoarding(res.data.data);
        } catch (err) {
            console.error("Error fetching hoardings:", err);
        }
    };

    useEffect(() => {
        getallhoarding(); // <-- Call the function
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>AdminDashbord</h1>
            <div style={{ height: 490, width: '100%' }}>
                <DataGrid
                    rows={hoarding}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                    checkboxSelection
                    getRowId={(row) => row._id}
                />
            </div>
        </div>
    );
};










// import { DataGrid } from '@mui/x-data-grid'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export const AdminDashbord = () => {
//     const columns = [
//         {field:"_id",headerName:"ID",width:60},
//         {field:"hoardingDimension",headerName:"Hoarding Dimension",width:150},
//         {field:"hoardingType",headerName:"Hoarding Type",width:120},
//         {field:"Availablity_Status",headerName:"Availablity",width:85},
//         {field:"hourlyRate",headerName:"Hourly Rate",width:100},
//         {field:"stateId",headerName:"State",width:65},
//         {field:"cityId",headerName:"City",width:65},
//         {field:"areaId",headerName:"Area",width:65},
//         {field:"latitude",headerName:"Latitude",width:80},
//         {field:"longitude",headerName:"Longitude",width:80}
//     ]

//     const [hoarding, sethoarding] = useState([])

//     const getallhoarding = async () => {
//         const res = await axios.get("/hoarding/getallhoarding")
//         sethoarding(res.data.data)
//     }

//     useEffect(()=>{getallhoarding},[])
//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>AdminDashbord</h1>
//         <DataGrid 
//         rows={hoarding}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[10]}
//         checkboxSelection
//         getRowId={(row) => row._id}></DataGrid>

//     </div>
//   )
// }
