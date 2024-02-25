"use client";
import {
    useEffect,
    useState
} from "react"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table"
import { columns } from "@/components/ui/columns";


export default function Page({ params }: { params: { slug: string } }) {

    let id = params.slug;
    let [data, setData] = useState<any>();
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState<boolean>(false);
    let [errorMessage, setErrorMessage] = useState<string>();

    useEffect(() => {
        console.log(id);
        fetch("/api/v0/fetch",
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "text/html"
                },
                method: "POST",
                body: decodeURIComponent(id)
            })
            .then(async function(res) {
                let data = await res.json();
                console.log(data.data);
                if (data.error) {
                    setError(true);
                    setErrorMessage(data.message);
                    setLoading(false);
                    return;
                }
                setData(data.data);
                setLoading(false);
                return;
            })
            .catch(function(res) {
                console.log(res);
            });
    }, []);


    if (loading) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center gap-2">
                <p>Fetching data...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center gap-2">
                <p>An error occurred:</p>
                <p>{errorMessage}</p>
            </main>
        );
    } else {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2">
                <p>Found {data.length} results!</p>
                <Link className={buttonVariants({ variant: "outline" })} href={"../"}>Go back</Link>
                    <div>
                        <DataTable columns={columns} data={data} />
                    </div>
                </main>
        )
    }
}



