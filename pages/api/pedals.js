// const fetchPedals = async () => {
//   const data = await fetch('https://www.pedalplayground.com/public/data/pedals.json', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   const response =  await data.json()
//   return JSON.parse(response)
// }

const pedalsHandler = async (req, res) => {
  const pedals = JSON.parse('../../src/pedals.json')
  res.status(200).json(pedals)
  // return fetch('../../src/pedals.json')
    // .then(pedals => res.status(200).json(pedals))  
}

export default pedalsHandler
