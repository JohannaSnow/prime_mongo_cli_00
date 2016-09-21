Create a file, queries.js that will contain the queries that correctly address the criteria in the steps that follow.


 1) Find documents that have awards:

    db.bios.find({awards: {$exists: true}}).pretty();

2) Find documents that do not have awards:

    db.bios.find({awards: {$exists: false}}).pretty();

3)  Find documents that have contribs for OOP or UNIX:

    db.bios.find({$or:[{"contribs": "OOP"}, {"contribs": "UNIX"}]}).pretty();

 4)Find documents with "Turing Award" awards:

	  db.bios.find( { "awards.award" : "Turing Award" }).pretty();

 5)Find documents with IDs between 3 and 7:

    db.bios.find({$and:[{"_id": {$gt:3}}, {"_id": {$lt:7}}]}).pretty();

6) Find documents with awards that were awarded before the year 2000:

    db.bios.find({"awards.year": {$lt:2000}}).pretty();

 7)  Find documents with birth dates, but no death dates:

    db.bios.find({$and:[{birth: {$exists: true}}, {death: {$exists: false}}]}).pretty();
