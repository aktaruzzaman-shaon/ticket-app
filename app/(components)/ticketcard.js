import Deleteblock from "./deleteblock"
import Prioritydisplay from "./prioritydisplay"
import Progreesdisplay from "./progreesdisplay"
import Statusdisplay from "./statusdisplay"

const Ticketcard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">

      <div className="flex mb-3">
        <Prioritydisplay></Prioritydisplay>
        <div className="ml-auto">
          <Deleteblock></Deleteblock>
        </div>

      </div>

      <h4 >Tciket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">THis is the ticket description</p>
      <div className="flex-grow"></div>

      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1 ">08/31 10.43 PM</p>
          <Progreesdisplay></Progreesdisplay>
        </div>
        <div className="ml-auto flex items-end">
          <Statusdisplay></Statusdisplay>
        </div>
      </div>
    </div>
  )
}

export default Ticketcard