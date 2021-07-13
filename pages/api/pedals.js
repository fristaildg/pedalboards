const pedalsHandler = async (req, res) => {
  const response = await fetch('https://www.pedalplayground.com/public/data/pedals.json')
  const data = await response.json()
  res.status(200).json(data)
}

export default pedalsHandler
