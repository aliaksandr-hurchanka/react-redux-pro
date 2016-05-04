// This is action creator

const uid = () => Math.random().toString(34).slice(2);

export const addService = (text) => {
    return {
        type: 'ADD_SERVICE',
        id: uid(),
        text: text
    }
}
