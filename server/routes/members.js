// const express = require("express");
import express from 'express';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path'
import { fileURLToPath } from 'url';


let membersRoutes = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
const membersDataPath = path.join(__dirname, '..', 'json_files', 'members.json'); // path to our JSON file
const absencesDataPath = path.join(__dirname, '..', 'json_files', 'absences.json'); // path to our JSON file

const getMembersData = () => {
    const jsonData = fs.readFileSync(membersDataPath)
    return JSON.parse(jsonData)   
}

const getAbsencesData = () => {
    const jsonData = fs.readFileSync(absencesDataPath)
    return JSON.parse(jsonData)   
}

//get all members
membersRoutes.get('/members', (req, res) => {
    const members = getMembersData()
    if(members){
        res.status(200).send(members)
    }
    else{
        res.sendStatus(404);
    }
})

//get member by user id
membersRoutes.get('/members/:userId', (req, res) => {
    const userId = req.params.userId;
    const members = getMembersData();
    const { payload } = members;
    const member = payload.find(m => m.userId === Number(userId));
    if(member){
        res.status(200).send(member)
    }
    else{
        res.sendStatus(404);
    }
})

//get all absences
membersRoutes.get('/absences', (req, res) => {
    const absences = getAbsencesData()
    if(absences){
        res.status(200).send(absences)
    }
    else{
        res.sendStatus(404);
    }
})

//get absences by id
membersRoutes.get('/absences/:id', (req, res) => {
    const id = req.params.id;
    const absences = getAbsencesData()
    const { payload } = absences;
    const data = payload.find(m => m.id === Number(id));
    if(data){
        res.status(200).send(data)
    }
    else{
        res.sendStatus(404);
    }
})


//get all absences for specific member
membersRoutes.get('/members/absences/:memberId', (req, res) => {
    const memberId = req.params.memberId;
    const absences = getAbsencesData()
    const { payload } = absences;
    const data = payload.filter(m => m.userId === Number(memberId));
    if(data){
        res.status(200).send(data)
    }
    else{
        res.sendStatus(404);
    }
})

//get absences types
membersRoutes.get('/getAbsenceTypes', (req, res) => {
    const absences = getAbsencesData()
    const { payload } = absences;
    const uniqueTypes = Array.from(new Set(payload.map(x => x.type)));
   
    if(uniqueTypes){
        res.status(200).send(uniqueTypes)
    }
    else{
        res.sendStatus(404);
    }  
})


//get total absences
membersRoutes.get('/getTotalAbsences', (req, res) => {
    const absences = getAbsencesData()
    if(absences){
        res.status(200).send({ total : absences.payload.length})
    }
    else{
        res.sendStatus(404);
    }
})


export default membersRoutes;