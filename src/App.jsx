import { OverViewChunk } from "../Chunks/OverViewChunk"
import { Search } from "../Chunks/Search"
import { TransectionChunk } from "../Chunks/TransectionChunk"


function App() {

  return (
    <>
      <div className='px-7 py-3'>
        <Search />
      </div>
      <div className=" border-b-2 pb-1"></div>
      <div className='px-7 '>
        <OverViewChunk />
        <TransectionChunk />
      </div>
    </>
  )
}

export default App
