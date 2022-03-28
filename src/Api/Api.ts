export const Api = {
    getCurrencyLayer() {
        return fetch('https://api.exmo.com/v1/ticker/').then(async (result) => {
            // результат запроса
            if (result.status === 200 && result.ok) {
                // превращение в JSON
                return result.json()
            }
        }).then((JSON_DATA) => {
            // вывод данных
            return JSON_DATA
            // действия с данными...
        }).catch((error) => {
            // обработка ошибок
            console.error('Ошибка получения списка: ', error);
        })
    }
}