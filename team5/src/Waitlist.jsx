import { useState, useEffect } from 'react'

export default function Waitlist() {
    //this entire block won't be necessary after I get the props object
    const fakeProps = {
        student: 'Jenny Smith',
        topic: 'Django db debugging'
    }

    fakeProps.completed = false
    fakeProps.currentUser = true

    const fakeData = [
        {
            student: 'Mario',
            topic: 'React component connections',
            completed: false,
            currentUser: false
        },
        {
            student: 'Luigi',
            topic: 'Wireframing feedback',
            completed: false,
            currentUser: false
        },
        {
            student: 'Peach',
            topic: "addl. questions from today's lesson",
            completed: false,
            currentUser: false
        }
    ]

    const [queueItems, setQueueItems] = useState(fakeData)

    useEffect(() => {
        const withUser = [...queueItems, fakeProps]
        setQueueItems(withUser)
        // setTimeout(
        //   () => handleCompletion(withUser), 2000
        // )

    }, [])

    //I'm either going to use scrap this entirely because it isn't really able to demo what I want it to, or I'm going to try setInterval...
    // function handleCompletion(withUser){
    //   //freaking race condition?!?!?!
    //   const tempItems = [...withUser]
    //   tempItems[0].completed = true
    //   console.log(tempItems)
    //   const onlyUnfinished = tempItems.filter ((item) => item.completed === false)
    //   console.log(onlyUnfinished)
    //   setQueueItems(onlyUnfinished)
    // }


    const itemCards =
        queueItems.map((item, index) =>
            <div
                key={`queueItem_${index}`}
                style={item.currentUser ? { color: 'green' } : { color: 'black' }}
            >
                <p>{index + 1}. {item.student} - {item.topic}</p>
                <hr />
            </div>
        )

    const cancel = () => {
        setQueueItems(queueItems.slice(0, queueItems.length - 1))
    }
    //ok, now you can keep clicking and just delete the entire array, but just click once. If this was real it would have a backend and this would be attached to a unique id, but this will do for demoing how it's supposed to work

    const waitTime = <span style={{ color: 'green' }}>about 1 hr</span>
    //irl there would be some math estimate to calculate this, maybe based on average amount of time, maybe based on TA input after seeing the ticket, and a way for the TA to update the time estimate for the current issue they're working on. For now, hard coded proof of concept.

    return (
        <div>
            <h2>Full Waitlist</h2>
            <p><span style={{
                fontSize: '11px',
                border: '1px solid black',
                borderRadius: '6px',
                backgroundColor: 'rgb(98, 98, 98)',
                padding: '2px 14px 3px 14px'
            }}>LIVE</span> Wait time: {waitTime}</p>
            {itemCards}
            <button
                onClick={cancel}
            >Cancel Ticket</button>
        </div>
    )
}