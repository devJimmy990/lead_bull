import { useState } from "react";

export default function HistoryTicket() {
    const [tickets] = useState([]);
    return (
        <div>
            {tickets.length > 0 ?
                <div>
                    {tickets.map((ticket) => (<div key={ticket.id}>{ticket.title}</div>))}
                </div>
                :
                <p>There is no closed ticket.</p>
            }
        </div>
    );
}