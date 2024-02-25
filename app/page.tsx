"use client";
import { CssVarsProvider } from '@mui/joy/styles';
import { Input, Typography, Button, Autocomplete } from '@mui/joy';
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/joy/Alert';

export default function Home() {
  const { push } = useRouter();

  let [title, setTitle] = useState<string>("");
  let [lengthFrom, setLengthFrom] = useState<any>("");
  let [lengthTo, setLengthTo] = useState<any>("");

  const [encoder, setEncoder] = useState<any>([]);
  const [encoderTyped, setEncoderTyped] = useState<string | any>("");
  const [month, setMonth] = useState<any>([]);
  const [year, setYear] = useState<any>([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [customEncoder, setCustomEncoder] = useState<string>();

  function fetchData() {

    let query = Buffer.from(JSON.stringify({ encoder: (customEncoder ? customEncoder : encoder), title: title, lengthFrom: lengthFrom, lengthTo: lengthTo, uploadYear: year, uploadMonth: month }), "utf-8").toString("base64")

    console.log(query);
    if(encoder.toString().length <= 1 && year.length <= 2 && month.length <= 2 && title.length <= 3){
      setError(true)
      setErrorMessage("Title is too short, please select an encoder or make the title more than 3 chars long!")
      return;
    }
    setLoading(true)

    return push(`result/${query}`)
  }


  return (
    <CssVarsProvider defaultMode="system">
      <main className="flex min-h-screen flex-col items-center justify-center gap-2 ">
        {getInitColorSchemeScript()}
        <form className='flex flex-col text-center gap-2'>
          <Typography level="title-lg" >Title</Typography>
          <div className='flex flex-row items-center gap-2'>
            <Input variant="outlined" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} name='title' className='w-full' disabled={loading} />
          </div>

          <Typography level="title-lg" >Duration</Typography>
          <div className='flex flex-row items-center gap-2'>
            <Input variant="outlined" placeholder='From' value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value.replace(/[^[0-9]:]/g, ""))} name='dateFrom' className='w-full' error={!lengthFrom.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthFrom.length > 1} />
            -
            <Input variant="outlined" placeholder='To' value={lengthTo} onChange={(e) => setLengthTo(e.target.value.replace(/[^[0-9]:]/g, ""))} className='w-full' name='dateTo' error={!lengthTo.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthTo.length > 1} />
          </div>
          <div>
            <Typography level="title-lg" >Upload date</Typography>
            <div className='flex flex-row items-center gap-2'>
              <Autocomplete
                placeholder="Upload Months"
                value={month}
                onChange={(event, newValue) => {
                  setMonth(newValue);
                }}
                options={months}
                disabled={loading}
              />
              <Autocomplete
                placeholder="Upload years"
                value={year}
                onChange={(event, newValue) => {
                  setYear(newValue);
                }}
                options={years}
                disabled={loading}
              />
            </div>
          </div>

          <Typography level="title-lg">Encoder</Typography>
          <div className='flex flex-row items-center gap-2'>
            <Autocomplete
              id="tags-default"
              placeholder="Encoders"
              options={encoders}
              limitTags={2}
              value={encoder}
              onChange={(event, newValue) => {
                setEncoder(newValue);
              }}
              inputValue={encoderTyped}
              onInputChange={(event, newInputValue) => {
                setEncoderTyped(newInputValue);
              }}
              className='w-full'
              disabled={loading}
            />
          </div>
          { encoder == "Custom" && (
            <div>
              <Typography level="title-lg" >Custom encoder</Typography>
              <div className='flex flex-row items-center gap-2'>
                <Input variant="outlined" placeholder='Custom encoder' value={customEncoder} onChange={(e) => setCustomEncoder(e.target.value)} name='custom encoder' className='w-full' disabled={loading} />
              </div>
            </div>
          )}
          
        </form>
        <Button variant="outlined" type="solid" onClick={fetchData} disabled={loading || (!lengthFrom.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthFrom.length > 1 || !lengthTo.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthTo.length > 1)}>Submit</Button>

        <Typography level="title-sm">Join us on <a href='https://discord.gg/BbSGtQfvJu' className='text-purple-300'>discord</a>!</Typography>
        {error && (
            <Alert variant="outlined" color="danger">{errorMessage}</Alert>
        )}
        <footer className="absolute bottom-0 left-0 w-screen h-16">
          <div className="container mx-auto text-center text-xs">
            <p>&copy; {new Date().getFullYear()} pico.rynav.xyz | contact@rynav.xyz</p>
            <div className="mt-4 ">
              <a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a> |
              <a href="/privacy-policy" className="text-blue-400 hover:underline"> Privacy Policy</a>
            </div>
          </div>
        </footer>
      </main>
    </CssVarsProvider>
  )
}



let encoders = [
  "LAME in FL Studio 8",
  "LAME in FL Studio 10",
  "LAME in FL Studio 11",
  "LAME in FL Studio 12",
  "LAME in FL Studio 20",
  "LAME",
  "REAPER",
  "iTunes",
  "Logic Pro",
  "GarageBand",
  "MediaMonkey",
  "Fraunhofer",
  "Mixcraft",
  "Exact Audio Copy",
  "Lavf",
  "Custom",
  "NONE",
]

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
  "ALL"
]

let years = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "ALL"
]