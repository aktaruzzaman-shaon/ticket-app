import Ticketcard from "./(components)/ticketcard";

export default function DashBoard() {
  return (
    <div className="p-5 ">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <Ticketcard></Ticketcard>
        <Ticketcard></Ticketcard>
        <Ticketcard></Ticketcard>
      </div>
    </div>
  );
}
