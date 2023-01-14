// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';


// function Pagesdog() {

//   const [httpCat, setHttpCat] = useState("");
//   const [image, setImage] = useState("");

//   const findCat = (event) => {
//     try {
//       event.preventDefault();
//       setImage("https://random.dog/doggos");
//     }
//     catch (error) {
//       console.log(error)
//     }
//   };
//   const proximaPagina=()=>{
//     console.log('olá')
//     return navigate('/pageshttp')
//   }

//   return (
//     <div>
//       <h1>Status Codes</h1>
//       <form action="#">
//         <input
//           placeholder="Digite algum status http."
//           tipe="text"
//           onChange={(event) => setHttpCat(event.target.value)}
//         />
//         <button type="button" onClick={findCat}>Buscar</button>

//       </form>

//       <div>{image && <img src={image} alt="Cats HTTP" />}</div>


//     </div>
//   );
// }
// export default Pagesdog;