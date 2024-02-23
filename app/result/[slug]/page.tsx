"use client";
import { useEffect, useState } from "react"
import { CircularProgress } from '@mui/joy';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function Page({ params }: { params: { slug: string } }) {

    let id = params.slug
    let [data, setData] = useState<any>()
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState<boolean>(false);
    let [errorMessage, setErrorMessage] = useState<string>();

    useEffect(() => {
        console.log(id)
        fetch("/api/v0/fetch",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'text/html'
                },
                method: "POST",
                body: decodeURIComponent(id)
            })
            .then(async function (res) {
                let data = await res.json();
                console.log(data.data)
                if(data.error){
                    setError(true);
                    setErrorMessage(data.message)
                    setLoading(false);
                    return;
                }
                setData(data.data);
                setLoading(false)
                return;
            })
            .catch(function (res) { console.log(res) })
    }, [])


    if (loading) {
        return (
            <main className='flex min-h-screen flex-col items-center justify-center gap-2'>
                <CircularProgress />
                <p>Fetching data...</p>
            </main>
        )
    }

    if(error){
        return (
            <main className='flex min-h-screen flex-col items-center justify-center gap-2'>
                <p>An error occurred:</p>
                <p>{errorMessage}</p>
            </main>
        )
    }

    else {
        return (
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <title>Picofinder</title>
                <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2">
                    <p>Found {data.length} results!</p>
                    <Button href="../" variant="outlined">Go back</Button>
                    <div>
                        <DataGrid slots={{ toolbar: GridToolbar }} rows={data} columns={columns} disableRowSelectionOnClick {...data} />
                    </div>
                </main>
            </ThemeProvider>
        )
    }
}

const columns = [
    {
        field: "id", headerName: "", width: 50, renderCell: (params: any) => (
            <a href={"https://pico.rynav.xyz/api/v4/download?id=" + params.value} ><FileDownloadIcon /></a>
        )
    },
    { field: "filename", headerName: "File name", width: 400 },
    {
        field: "length", headerName: "Song duration",
        renderCell: (params: any) => (
            <p>{Math.floor(params.value / 60).toString().padStart(2, "0")}:{(params.value % 60).toString().padStart(2, "0")}</p>
        )
    },
    { field: "filesize", headerName: "File size" },
    { field: "uploaddate", headerName: "Upload date", width: 300 },
    { field: "encoder", headerName: "Encoder", width: 300 },
    {
        field: "audio", headerName: "", width: 325, renderCell: (params: any) => (
            <audio controls src={params.value}></audio>
        )
    }
]