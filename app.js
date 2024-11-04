if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });

 


    // Výpis výsledku do HTML elementu s ID 'result' (může být div nebo jiný element)
    document.getElementById('result').innerText = result;
}