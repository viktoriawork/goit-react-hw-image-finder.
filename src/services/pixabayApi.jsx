import axios from "axios";

 const url = "https://pixabay.com/api/";
 const key = "23926107-b5133ff0aaa254f46e578b146";

 const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
   return axios
     .get(
       `${url}?key=${key}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`
     )
     .then((response) => response.data.hits)
     .catch((error) => console.log(error));
 };

 export default fetchImages;