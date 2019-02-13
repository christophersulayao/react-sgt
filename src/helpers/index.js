export function randomString(length = 8){
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'
    let output = '';

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);

        output = output + characters[randomIndex];

    }

    return output;
}

export function formatPostData(data){
    const urlParams = new URLSearchParams();

    for(let [key, value] of Object.entries(data)){
        urlParams.append(key, value);
    }
    return urlParams;
}