
INSERT INTO "AdvertisementRanges" ("advertisement_id","range_id","createdAt","updatedAt") 
VALUES (1,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00'),
(10,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00'),
(21,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00'),
(19,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00'),
(15,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00'),
(18,18,'2021-10-15 08:30:08.377 +00:00','2021-10-15 08:30:08.377 +00:00') 
RETURNING "advertisement_id","range_id","createdAt","updatedAt"
