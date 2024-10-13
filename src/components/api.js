import axios from 'axios';
import Swal from 'sweetalert2';
const fetchApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/sent', data);
        SuccessAlert()
        return response;
    } catch (error) {
        errorAlert(error)
        return error;
    }
}

const errorAlert = (error)=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error}`,
      });
}

const SuccessAlert = (mes)=>{
    Swal.fire({
      icon: "success",
      title: "Thank you!!!",
      showConfirmButton: false,
      timer: 1500
    });
}
export {fetchApi}