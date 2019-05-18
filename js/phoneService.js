

const phoneService = {
    getAllPhones({onSuccess, onError}) {
        const API_URL = 'https://raw.githubusercontent.com/Sanchelo/Phones-App/gh-pages/api/phones.json';
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL, true);
        xhr.send();

        xhr.onload = () => {
            
        if(xhr.status === 200) {
            onSuccess(JSON.parse(xhr.responseText)) 
        }
        else {
            onError(`Error occured: ${xhr.status}: ${xhr.statusText}`);
            return;
        };
    };

    },
    getPhoneById({phoneId, onSuccess, onError = () => {}}) {
        const API_URL = `https://raw.githubusercontent.com/Sanchelo/Phones-App/gh-pages/api/phones/${phoneId}.json`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL, true);
        xhr.send();
        xhr.onload = () => {
            
     
        if(xhr.status === 200) {
            onSuccess(JSON.parse(xhr.responseText)) 
        }
        else {
            onError(`Error occured: ${xhr.status}: ${xhr.statusText}`);
            return;
        };
    };

    }
};

export default phoneService;