


let linesArr:any[] = []
for (let i = 0; i < 26; i++) {
    linesArr.push(
        <hr 
        className="mt-[1.378rem]"
        key={`id-${i}`}
        style={{
            color: '#7ea6e6',
            backgroundColor: '#7ea6e6',
            height: 2.01,
            borderColor: '#7ea6e6',
        }} />
    )
}

export default function Background() {
    return (
    <div className="outline absolute top-0 w-full h-full z-0  bg-yellow-200 backdrop-blur">

        <div className="sticky z-100 w-3 left-[120px] h-full p-0.5 border-l-[3px] border-r-[3px] border-rose-400 " />

        <div className="absolute h-full w-full top-[16vh] z-100"> {linesArr} </div>

    </div>
  )
}