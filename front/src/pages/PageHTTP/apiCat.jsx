
const findCat = (event) => {
  try {
    event.preventDefault();
    setImage("https://http.cat/" + httpCat);
  }
  catch (error) {
    console.log(error)
  }
};

export default findCat