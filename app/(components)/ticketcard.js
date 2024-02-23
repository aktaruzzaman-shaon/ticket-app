import Deleteblock from "./deleteblock"
import Prioritydisplay from "./prioritydisplay"
import Progreesdisplay from "./progreesdisplay"
import Statusdisplay from "./statusdisplay"

const Ticketcard = ({ ticket }) => {

  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">

      <div className="flex mb-3">
        <Prioritydisplay priority={ticket.priority}></Prioritydisplay>
        <div className="ml-auto">
          <Deleteblock id={ticket._id}></Deleteblock>
        </div>

      </div>

      <h4 >{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>

      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1 ">{formatTimeStamp(ticket.createdAt)}</p>
          <Progreesdisplay progress={ticket.progress}></Progreesdisplay>
        </div>
        <div className="ml-auto flex items-end">
          <Statusdisplay status={ticket.status}></Statusdisplay>
        </div>
      </div>
    </div>
  )
}

export default Ticketcard