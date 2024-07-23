import { useState } from "react";
import { FabAddButton } from "../../../components/buttons";

export default function OpenedTicket() {
    const [tickets, setTickets] = useState([]);
    return (
        <div>
            {tickets.length > 0 ?
                <div>
                    {tickets.map((ticket) => (<div key={ticket.id}>{ticket.title}</div>))}
                </div>
                :
                <p>There is no opened tickets... click the button to add new.</p>
            }
            <FabAddButton onClick={() => setTickets([...tickets, { id: Date.now(), title: `New Ticket ${tickets.length + 1} at ${new Date().toLocaleString()}` }])} />
        </div>
    );
}