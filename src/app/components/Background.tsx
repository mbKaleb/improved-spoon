


let linesArr:any[] = []
for (let i = 0; i < 29; i++) {
    linesArr.push(
        <hr 
        className="mt-[26px] drop-shadow-[0_1px_1px_rgba(100,149,237,1)]"
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
    <div className="absolute top-0 w-full z-0  bg-yellow-200 drop-shadow-xl min-w-[350px] max-w-[800px] w-full h-[999px]">

        <div className="sticky z-100 w-[1px] left-[180px] h-full p-0.5 border-l-[2px] border-r-[2px] border-rose-400 drop-shadow-[0_1px_1px_rgba(200,0,0,0.5)]" />

        <div className="absolute h-full w-full top-[160px] z-100"> {linesArr} </div>

    </div>
  )
}