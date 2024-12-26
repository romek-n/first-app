export default defineEventHandler(async (event) => {
   const { code } = event.context.params
   const {currencyKey} = useRuntimeConfig()

   const uri = `https://currencyapi.net/api/v1/currencies=${code}&apiKey=${currencyKey}`

   const { data } = await$fetch(uri)

   return data
})