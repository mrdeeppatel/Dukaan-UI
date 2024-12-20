import { OverViewChunk } from "../Chunks/OverViewChunk"
import { Search } from "../Chunks/Search"
import { SideBar } from "../Chunks/SideBar"
import { TransectionChunk } from "../Chunks/TransectionChunk"


function App() {

  return (
    <><div className="">
      <div>
        <SideBar></SideBar>
      </div>

      <div className=" ml-0 sm:ml-64">

        <div className='px-7 py-3'>
          <Search />
        </div>
        <div className=" border-b-2 pb-1"></div>
        <div className='px-7 '>
          <OverViewChunk />
          <TransectionChunk />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
