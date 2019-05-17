

const phoneService = {
    getAllPhones() {
        const API_URL = 'https://raw.githubusercontent.com/Sanchelo/Phones-App/gh-pages/api/phones.json';
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL, false);
        xhr.send();
        if(xhr.status !== 200) {
            console.error(`Error occured: ${xhr.status}: ${xhr.statusText}`);
            return[];
        }
        console.log(xhr.responseText);
        return JSON.parse(xhr.responseText);
    },
    getPhoneById(phoneId) {
        const API_URL = `https://raw.githubusercontent.com/Sanchelo/Phones-App/gh-pages/api/phones/${phoneId}.json`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL, false);
        xhr.send();
        if(xhr.status !== 200) {
            console.error(`Error occured: ${xhr.status}: ${xhr.statusText}`);
            return[];
        }
        console.log(xhr.responseText);
        return JSON.parse(xhr.responseText);
    }
};

export default phoneService;