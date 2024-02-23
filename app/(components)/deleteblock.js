"use client"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

const Deleteblock = ({ id }) => {
    const router = useRouter();
    const deleteTicket = async () => {

        const res = await fetch(`http://localhost:3001/api/Ticekts/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            console.log("done")
            router.refresh();
        } else {
            console.log("not done")
        }

    }
    return (
        <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red-200" onClick={deleteTicket}></FontAwesomeIcon>
    )
}

export default Deleteblock