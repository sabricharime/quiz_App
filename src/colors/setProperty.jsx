function setProperty(obj) {
  for (let i in obj) {
    document.documentElement.style.setProperty(i, obj[i]);
  }
}

export default setProperty
