function to(promise) {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
}

export default function AirTable() {
    const url = "https://api.airtable.com/v0";
    const base = "appMCSWRv9HqlvajJ";
    const key = process.env.ATKEY;
    async function getQuestions() {}

    return Object.freeze({
        getQuestions
    });
}
