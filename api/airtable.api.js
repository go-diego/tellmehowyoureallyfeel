import ky from "ky/umd";

export default function Airtable() {
    // TODO: create ky instance and define urlPreffix
    const baseUrl = "https://api.airtable.com/v0";
    const QUESTIONS_BASE = "appMCSWRv9HqlvajJ";
    const SUBMISSIONS_BASE = "appQQw5CGO4GDUrzO";
    const baseOptions = {
        headers: { Authorization: `Bearer ${process.env.ATKEY}` }
    };
    async function getActiveQuestion() {
        const url = `${baseUrl}/${QUESTIONS_BASE}/Questions?filterByFormula=NOT({isActive} = FALSE())`;
        const response = await ky.get(url, baseOptions).json();
        return response;
    }

    async function createSubmission(body) {
        const url = `${baseUrl}/${SUBMISSIONS_BASE}/Submissions`;
        const options = {
            ...baseOptions,
            json: body
        };
        const response = await ky.post(url, options).json();
        return response;
    }

    return Object.freeze({
        getActiveQuestion,
        createSubmission
    });
}
