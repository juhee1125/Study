// // 프론트엔드에서는 라우터를 직접 호출할 수 없고, 반드시 HTTP 요청을 통해 URL을 호출해야만 함
// // axios는 api요청을 쉽게 해주는 비동기호출방식
// import axios from "axios"

// const URL = "http://localhost:3000"

// export async function getPosts() {
//     const response = await axios.get(`${URL}/posts`)

//     if (response.status == 200){
//         return response.data
//     } else{
//         return
//     }
// }

// export async function getPost(id) {
//     const response = await axios.get(`${URL}/posts/${id}`)

//     if (response.status == 200){
//         return response.data
//     } else{
//         return
//     }
// }

// export async function createPost(post) {
//     console.log(post)
//     const data = await createImage(post.file)
//     const imageId = post.file.name

//     post.imageId = imageId

//     const response = await axios.post(`${URL}/posts/`, post)

//     return response
// }

// export async function updatePost(id, post) {
//     const response = await axios.post(`${URL}/posts/${id}`, post)

//     return response
// }

// export async function deletePost(id) {
//     const response = await axios.delete(`${URL}/posts/${id}`)

//     return response
// }


// export async function getUser(id) {
//     const response = await axios.get(`${URL}/users/${id}`)

//     if (response.status == 200){
//         return response.data
//     } else{
//         return
//     }
// }

// export async function createUser(user) {
//     const response = await axios.post(`${URL}/users/`, user)

//     return response
// }

// export async function updateUser(id, user) {
//     const response = await axios.post(`${URL}/users/${id}`, user)

//     return response
// }

// export async function verifyUser(user) {
//     const response = await axios.post(`${URL}/users/login`, user)
//     if(response.data.success){
//         return response.data.token
//     }else{
//         return
//     }
// }


// export async function createImage(file) {
//     const formData = new FormData()
//     formData.append('image', file)
//     const response = await axios.post(`${URL}/images`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
//     return response
// }

// export async function getImage(id) {
//     const response = await axios.get(`${URL}/images/${id}`)
//     return response
// }

import axios from "axios";

const URL = "http://localhost:3000"

export async function getPosts() {
    //"http://localhost:3000/posts"
    const response = await axios.get(`${URL}/posts`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function getPost(id) {
    //"http://localhost:3000/posts/12345"
    const response = await axios.get(`${URL}/posts/${id}`)

    const post = response.data
    const data = await getImage(post.imageId)
    post.image = data
    return post
}

export async function createPost(post) {
    console.log(post)
    const data = await createImage(post.file)
    const imageId = post.file.name

    post.imageId = imageId

    //"http://localhost:3000/posts"
    const response = await axios.post(`${URL}/posts`, post)
    return response
}

export async function updatePost(id, post) {
    //"http://localhost:3000/posts/12345"
    const response = await axios.put(`${URL}/posts/${id}`, post)
    return response
}

export async function deletePost(id) {
    //"http://localhost:3000/posts/12345"
    const response = await axios.delete(`${URL}/posts/${id}`)
    return response
}

export async function getUser(id) {
    //"http://localhost:3000/users/12345"
    const response = await axios.get(`${URL}/users/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function createUser(user) {
    //"http://localhost:3000/users"
    const response = await axios.post(`${URL}/users`, user)
    return response
}

export async function updateUser(id, user) {
    //"http://localhost:3000/users/12345"
    const response = await axios.put(`${URL}/users/${id}`, user)
    return response
}

export async function verifyUser(user) {
    const response = await axios.post(`${URL}/users/login`, user)
    if (response.data.success) {
        return response.data.token
    } else {
        return
    }
}

export async function createImage(file) {
    const formData = new FormData()
    formData.append('image', file)
    const response = await axios.post(`${URL}/images`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response
}

export async function getImage(id) {
    const response = await axios.get(`${URL}/images/${id}`)
    return response
}