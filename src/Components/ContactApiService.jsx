export async function addContactToApi(contact) {
    const httpResponse = await fetch('https://localhost/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    });
    const data = await httpResponse.json();

    if (data) {
        console.log('success ' + data);
    } else {
        console.error('error ' + data);
    }
}