const fetchLocalData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Network response wasn't ok")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`There was error with fetch operation: ${error}`)
  }
}

export default fetchLocalData
