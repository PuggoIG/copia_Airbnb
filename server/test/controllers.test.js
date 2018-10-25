const setUp = require('./setUp');
const request = require('supertest');
const app = require ('../server');
const {Users,Houses}= require('../models');

describe("Test Crud Houses", ()=>{
    beforeAll(()=>{
    setUp();
    })

    test("Test GET all houses",async()=>{
         const response = await request (app).get('/api/v1/houses')

         expect(response.statusCode).toBe(200)
    })
    })

    test("Test POST house",async()=>{
        let userSend={email:"test@test.com",password:"test",name:"test",lastname:"test"}
        await Users.create(userSend);
        let {body}= await request(app).post('/api/v1/users/login')
                                      .send(userSend)
        let sendHouse={	
            "name":"Casa bonita en la roma",
            "type":"H",
            "price":1200.00,
            "description":"Esta es una casa bien bonita en la roma y esta bien cool :)",
            "status":"A",
            "address":{
                "address_1":"Av alvaro obregon 168 Roma norte",
                "address_2":"Cuathemoc ",
                "zip_code":"06500",
                "country":"mexico",
                "city":"CDMX",
                "references":"Casa de porton azul bien cool"
            },
            "facilities":{
                "size":"L",
                "num_rooms":3,
                "num_bathrooms":2,
                "pet_friendly":false,
                "smoke_friendly":true,
                "tv":true,
                "wifi":true,
                "num_beds":4,
                "kitchen":false,
                "garage":0
            }
        }
        
        let response = await request(app).post('/api/v1/houses')
                                         .send(sendHouse)
                                         .set({
                                             'Authorization':`JWT ${body.token}`,
                                             'Content-Type':"application/json"
                                         })

        expect(response.statusCode).toBe(201)
        expect(response.body.name).toEqual(sendHouse.name)
    })
