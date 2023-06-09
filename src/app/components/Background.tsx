


let linesArr:any[] = []
for (let i = 0; i < 29; i++) {
    linesArr.push(
        <hr 
        className="mt-[26px] drop-shadow-[0_1px_1px_rgba(100,149,237,1)] opacity-70"
        key={`id-${i}`}
        style={{
            color: '#7ea6e6',
            backgroundColor: '#7ea6e6',
            height: 1,
            borderColor: '#7ea6e6',
        }} />
    )
}

export default function Background() {
    return (
    <div className="absolute top-0 w-full z-0  bg-gradient-to-b from-[#fae96e] via-[#f5e990] to-[#fae96e] drop-shadow-xl min-w-[500px] max-w-[800px] w-full h-[999px] pointer-events-none select-none ">

        <div className="sticky z-100 w-[1px] left-[180px] h-full p-0.5 border-l-[2px] border-r-[2px] border-rose-400 drop-shadow-[0_1px_1px_rgba(200,0,0,0.5)] opacity-60" />

        <div className="absolute h-full w-full top-[160px] z-100"> {linesArr} </div>

    </div>
  )
}