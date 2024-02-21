import Ticketcard from "./(components)/ticketcard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/Tickets", {
      cache: "no-store"
    })
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error)
  }
}

export default async function DashBoard() {
  
  const  {tickets}  = await getTickets();
  console.log(tickets)
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ];

  return (
    <div className="p-5 ">
      <div>

        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => <div key={categoryIndex} className="mb-4">

          <h2>{uniqueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
              <Ticketcard id={_index} key={_index} ticket={filteredTicket}></Ticketcard>
            ))}
          </div>

        </div>)}

      </div>
    </div>
  );
}
