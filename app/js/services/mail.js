var baseUrl = '/mail';

export function sendMail(data) {
    return fetch(`${baseUrl}/sendmail`,
        {
            method: 'POST',
            cache:'no-cache',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(value => {
            return value.json();
        });
}