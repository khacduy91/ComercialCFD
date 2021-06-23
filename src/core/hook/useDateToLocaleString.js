


export default function useDateToLocaleString(date) {

    const event = new Date(date)

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const day = event.toLocaleDateString(undefined, options)

    return { day }
}