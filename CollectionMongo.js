1. db.collectionMongo.find()
2. db.collectionMongo.find({}, {restaurant_id:1 , name:1, borough:1, cuisine:1})
3. db.collectionMongo.find({},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})
4. db.collectionMongo.find({},{_id:0,restaurant_id:1 , name:1, borough:1, cuisine:1,'address.zipcode':1})
5. db.collectionMongo.find({borough:{$eq:'Bronx'}})
6. db.getCollection('collectionMongo').find({borough:{$eq:'Bronx'}}).limit(5)
7. db.getCollection('collectionMongo').find({borough:{$eq:'Bronx'}}).skip(5).limit(5)
8. db.getCollection('collectionMongo').find({'grades.score':{$gt:90}})
9. db.getCollection('collectionMongo').find({'grades.score':{$gt:80, $lt:100}})
10. db.getCollection('collectionMongo').find({'address.coord.0':{$lt:-95.754168}})
11. db.getCollection('collectionMongo').find({cuisine:{$not:{$eq:"American "}},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}})
12. db.getCollection('collectionMongo').find({$and:[{cuisine:{$not:{$eq:"American"}}},{'grades.score':{$gt:70}}, {'address.coord.0':{$lt:-65.754168}}]})
13.
14. db.getCollection('collectionMongo').find({$where: "this.name.startsWith('Wil')"},{_id:1, name:1, borough:1, cuisine:1})
15. db.getCollection('collectionMongo').find({$where: "this.name.endsWith('ces')"},{_id:1, name:1, borough:1, cuisine:1})
16. db.getCollection('collectionMongo').find({$where: "this.name.includes('Reg')"},{_id:1, name:1, borough:1, cuisine:1})
17. db.getCollection('collectionMongo').find({cuisine:{$in:['American ' ,'Chinese']}, borough:{$eq:'Bronx'}},{_id:0,cuisine:1,borough:1})
18. db.getCollection('collectionMongo').find({$or: [{borough: 'Staten Island'},{borough:'Brooklyn'},{borough:'Bronx'}]},{_id:1,name:1,borough:1,cuisine:1})
19. db.getCollection('collectionMongo').find({borough:{$nin:["Staten Island","Brooklyn","Bronx"]}},{_id:1,name:1,borough:1,cuisine:1})
20.
21. db.getCollection('collectionMongo').find({cuisine:{$nin:['Chinese','American ']},$where: "this.name.startsWith('Wil')"},{_id:1,name:1,borough:1,cuisine:1})
22. db.getCollection('collectionMongo').find({ $and: [{"grades.grade": 'A'},{"grades.score": 11},{"grades.date":ISODate("2014-08-11T00:00:00Z")}]},{_id:1,name:1,grades:1})
23. db.getCollection('collectionMongo').find({ $and: [{"grades.1.grade": 'A'},{"grades.1.score": 9},{"grades.1.date":ISODate("2014-08-11T00:00:00Z")}]},{_id:1,name:1,"grades.2":1})
24. db.getCollection('collectionMongo').find({'address.coord.1':{$gt:42, $lt:52}},{_id:1,name:1,'address.coord':1})