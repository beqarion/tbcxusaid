const isScrolled = () => {
  const scrollPos = window.scrollY
  if (scrollPos > 0) {
    return true
  }
  return false
}
export default isScrolled
