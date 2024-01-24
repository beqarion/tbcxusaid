// get single element - with just query
// get elements array - with query in square brackets

export default (query) => {
  if (Array.isArray(query)) {
    const elements = Array.from(document.querySelectorAll(query[0]))

    if (!elements) {
      throw new Error(`Cannot get elements with query string: ${query[0]}`)
    }
    return elements
  }
  const el = document.querySelector(query)
  if (!el) {
    throw new Error(`Cannot get element with query string: ${query}`)
  }
  return el
}
