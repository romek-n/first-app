export default defineEventHandler(async (event) => {
   // handle query params
   // const { name } = useQuery(event)
 
   // handle post data
   // const { age } = await useBody(event)
 
   // return {
   //   message: `Hello, ${name}! You are ${age} years old.`
   // }
 
   // api call with private key
   const data = await $fetch('https://currencyapi.net/api/v1/currencies?key=3w2B8xUBoSQoTaEFPQQ1TKye3JsRLosueQcr');
 
   return data.currencies;
 });
