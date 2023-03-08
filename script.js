const apiKey = 'S4INS0NJGSYNO99L';
const exchangeRateElement = document.getElementById('exchangeRate');

async function updateExchangeRate() {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=BRL&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data['Realtime Currency Exchange Rate']) {
      const exchangeRate = Number(
        data['Realtime Currency Exchange Rate']['5. Exchange Rate']
      ).toFixed(4);
      exchangeRateElement.textContent = exchangeRate;
    } else {
      console.error('Error: Invalid response from API', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

setInterval(updateExchangeRate, 1000);

updateExchangeRate();
