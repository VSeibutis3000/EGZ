export default {
    post: async (address, object) => {
        const res = await fetch('http://localhost:3001' + address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        const data = await res.json()
        return await data
    },
    get: async (address) => {
        const res = await fetch('http://localhost:3001' + address)
        const data = await res.json()
        return await data
    }
}