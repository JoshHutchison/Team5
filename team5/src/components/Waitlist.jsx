import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../Context'

export default function Waitlist() {

    const { ticketInfo, setTicketInfo } = useContext(DataContext)

    ticketInfo.completed = false
    ticketInfo.currentUser = true

    const fakeData = [
        {
            first: 'Mario',
            last: 'Mario',
            topic: 'React component connections',
            completed: false,
            currentUser: false
        },
        {
            first: 'Luigi',
            last: 'Mario',
            topic: 'Wireframing feedback',
            completed: false,
            currentUser: false
        },
        {
            first: 'Peach',
            last: 'Toadstool',
            topic: "addl. questions",
            completed: false,
            currentUser: false
        }
    ]

    const [queueItems, setQueueItems] = useState(fakeData)

    useEffect(() => {
        if (ticketInfo.first !== '') {
            const withUser = [...queueItems, ticketInfo]
            setQueueItems(withUser)
        }
    }, [])


    const itemCards =
        queueItems.map((item, index) =>
            <div
                key={`queueItem_${index}`}
                style={item.currentUser ? { color: 'green' } : { color: 'black' }}
            >
                <p >{index + 1}. {item.first} {item.last} - {item.topic}</p>
                <hr />
            </div>
        )

    const cancel = () => {
        setQueueItems(queueItems.slice(0, queueItems.length - 1))
        setTicketInfo({
            first: '',
            last: '',
            topic: ''
        })
    }
    //ok, now you can keep clicking and just delete the entire array, but just click once. If this was real it would have a backend and this would be attached to a unique id, but this will do for demoing how it's supposed to work

    const waitTime = <span style={{ color: 'green', marginLeft: '15px' }}>under 20 mins</span>
    //irl there would be some math estimate to calculate this, maybe based on average amount of time, maybe based on TA input after seeing the ticket, and a way for the TA to update the time estimate for the current issue they're working on. For now, hard coded proof of concept.

    return (
        <div className='waitlistContainer'
            style={{
                padding: '18px',
                fontWeight: '600',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <h2 style={{ fontWeight: '700' }}>Full Waitlist</h2>
            <p style={{
                display: 'flex'
            }}><span style={{
                fontSize: '11px',
                border: '1px solid black',
                borderRadius: '6px',
                padding: '3px 14px 2px 14px',
                marginRight: '6px',
                backgroundColor: 'rgb(98, 98, 98)',
                color: 'white'
            }}>LIVE</span> Wait time: {waitTime}</p>
            <div style={{ marginTop: '40px' }}>
                {itemCards}
            </div>
            { ticketInfo.first !== '' ? <button
                onClick={cancel}
                style={{
                    marginTop: '30px',
                    border: '1px solid black',
                    borderRadius: '6px',
                    backgroundColor: '#dc4141',
                    color: 'white'
                }}
            >Cancel Ticket</button> : <Link 
            to='../addticket'
            style={{
                marginTop: '30px',
                padding: '10px 40px 10px 40px',
                border: '1px solid black',
                borderRadius: '6px',
                backgroundColor: 'rgb(151, 151, 151',
                color: 'white'
            }}
            className='btn'
            >Add Ticket</Link>}
            <Link to='../'
                className='btn'
                style={{
                    border: '1px solid black',
                    borderRadius: '6px',
                    backgroundColor: 'rgb(98, 98, 98)',
                    color: 'white',
                    padding: '10px 40px 10px 40px',
                    marginTop: '25px'
                }}>Home</Link>
        </div>
    )
}