import { lazy, useState } from 'react';

const OpenedTicket = lazy(() => import('./open_ticket'));
const HistoryTicket = lazy(() => import('./history_ticket'));
export default function TicketScreen() {
    const [index, setIndex] = useState(0);

    return (
        <div className="text-center overflow-auto">
            <header className="text-white p-3">
                <div className="d-flex gap-3 justify-content-center my-2">
                    <button onClick={() => setIndex(0)} className={`${index === 0 ? 'bg-dark active text-white' : ''} w-25 border-0 rounded-3 p-3`}>Open</button>
                    <button onClick={() => setIndex(1)} className={`${index === 1 ? 'bg-dark active text-white' : ''} w-25 border-0 rounded-3 p-3`}>History</button>
                </div>
            </header>
            <main>
                {index === 0 ? <OpenedTicket /> : <HistoryTicket />}
            </main>
        </div>
    );
}
