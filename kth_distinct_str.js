const url = [['name', 'mehedi'], ['age', 24]];
const newUrl = new URLSearchParams(url);
newUrl.set("ammujan","ayshumoni")
const fullUrl = `www.google.com?${newUrl}`
console.log(fullUrl)
