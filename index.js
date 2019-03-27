import axios from 'axios'
import cheerio from 'cheerio'

async function getHTML(url){
  const http_request = await axios.get(url)
  return http_request.data
}

async function main(){
  console.log( await getHTML('https://www.facebook.com/events/652637088498120')
)}

main()
