import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync("password12",10),
        isAdmin:true,
    },
    {
        name:'Regular User 1',
        email:'user1@example.com',
        password:bcrypt.hashSync("password12",10),

    },
    {
        name:'Regular User 2',
        email:'user2@example.com',
        password:bcrypt.hashSync("password12",10),        

    }
]

export default users