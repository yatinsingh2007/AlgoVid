const express = require('express');
const bcrypt = require('bcrypt');
const { prisma } = require('../../prisma/prismaConfig.js')
const jwt = require('jsonwebtoken');
const auth = express.Router();

auth.post('/login' , async (req , res) => {
    try{
        const { email , password } = req.body;
        if (!email || !password){
            return res.status(400).json({
                "error" : "Email and Password are required"
            })
        }

        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if (!user){
            return res.status(404).json({
                "error" : "User not found please create an account"
            })
        }
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if (!isPasswordValid){
            return res.status(401).json({
                "error" : "Invalid Password"
            })
        }
        const token = jwt.sign({
            id : user.id
        } , process.env.JWT_SECRET , { expiresIn : '7d' })

        return res.status(200).cookie('token', token, { httpOnly: true }).json({
            "message" : "Login Successful !"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            "error" : "Internal Server Error"
        })
    }
})

auth.post('/signup' , async (req , res) => {
    try{
        const { name , email , password } = req.body;
        if (!name || !email || !password){
            return res.status(400).json({
                "error" : "Name , Email and Password are required"
            })
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        await prisma.user.create({
            data : {
                name : name,
                email : email,
                password : hashedPassword
            }
        })
        return res.status(201).json({
            "message" : "User created successfully !"
        })
        
    }catch(err){
        console.log(err);
        if (err.code === 'P2002'){
            return res.status(409).json({
                "error" : "User with this email already exists"
            })
        }
        return res.status(500).json({
            "error" : "Internal Server Error"
        })
    }
})

auth.get('/logout' , (req , res) => {
    res.clearCookie('token');
    return res.status(200).json({
        "message" : "Logout Successful !"
    })
})

module.exports = { auth }