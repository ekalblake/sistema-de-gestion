
import axios from "axios"

export const getStudents = async () => {
    return await axios.get(`https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/alumnos`)
}