import axios from "axios";

export const getCourseList = async () => {
    return await axios.get(`https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos`)
}

export const createCourse = async (formData) => {
    return await axios.post(`https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos`, formData)
}

export const updateCourse = async (courseId, formData) => {
    return await axios.put(`https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos/${courseId}`, formData)
}