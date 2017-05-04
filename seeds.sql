-- ------------- INDUSTRIES -------------
INSERT INTO Industry (name, img) VALUES ('Media','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');
INSERT INTO Industry (name, img) VALUES ('Software','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');
INSERT INTO Industry (name, img) VALUES ('Retail','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');

--  ------------ USERS ------------

-- Applicant 1
-- Password knight
INSERT INTO User (name, username, email, password, img, is_employer, location, industry_id) VALUES ('Scarlet Knight', 'JerseyCoder','sknight@gmail.com', '$2a$10$TtXMHq5ZJVUeuASp/ZEReetxs1BdozCXv3Q/swYXOgWDJw6VnrY/O', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'New Jersey', 2);
INSERT INTO Conversation (is_anonymous) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 1 Subject','Message 1 Text','Message 1 Attachment',1,1);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 1', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('S.B. in Chemical Engineering','Rutgers University','Relevant Courses: Chemistry, Engineering 101. GPA: 3.5. Tutor and undergraduate researcher', 'Education', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Full Stack Coding Bootcamp','Rutgers','Knowledge of JavaScript, HTML, CSS, Bootstrap, MySQL and React.', 'Education', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('SAT Tutor','Kaplan','I tutor high school juniors for the SAT math exam.', 'Experience', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Lab Technician','NJIT','I conduct chemistry experiments', 'Experience', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('The Acidity of Acids','Published in Science','Cited in a NYT pop science article: https://www.nytimes.com/ . Abstract: Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. ', 'Accomplishments', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Chemistry Club President','Rutgers University','4 year member and 2 year president of the Rugters Chemistry Club.', 'Leadership', 1);

-- ------------- EMPLOYERS ---------------

-- Employer 1 
INSERT INTO User (name, username, email, password, img, is_employer, location, industry_id) VALUES ('Alisa Media', 'MediaCo','Media@gmail.com', '$2a$10$BqyTSOHIrsLjDOY9Bo9TMetmxveqeUnnCHifBTJP4etlM4SHvdC0S', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSILcFz6Y_fnk_QiXss-ydysMMJq9QExhw3SfeY9FJ35TUGYGd-2g', true, 'Somerset, NJ', 1);
INSERT INTO Conversation (is_anonymous) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 2 Subject','Message 2 Text','Message 2 Attachment',2,2);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 2', 2);

-- Employer 2
INSERT INTO User (name, username, email, password, img, is_employer, location, industry_id) VALUES ('Gavin Belson', 'HooliCo','Gavin@hooli.com', '$2a$10$7OCsiUzhrDnWNhZ1z2S9muqnq7mpIqxVmczYKIAvlExhUCcLnYebi', 'https://vignette3.wikia.nocookie.net/silicon-valley/images/f/f0/Hooli.png/revision/latest?cb=20160811201728', true, 'Silicon Valley', 2);
INSERT INTO Conversation (is_anonymous) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);

-- Job Descriptions pulled from:  https://resources.workable.com/
-- Employer 3


INSERT INTO User (name, username, email, password, img, is_employer, location, industry_id) VALUES ('Erlich Bachman', 'PiedPiperCo','e@piedpiper.com', '$2a$10$qRtLMeamR87/z.GOd/ybvOKJnuKcVjrO.MoTqGCoTluKeawdT8U/2', 'https://res.cloudinary.com/crunchbase-production/image/upload/v1399404021/jszf5otv3hpaeakvub8z.png', true, 'Silicon Valley' , 2);
INSERT INTO Conversation (is_anonymous) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);


-- --------------- COMPANIES ---------------

INSERT INTO Company (name, industry_id, user_id) VALUES ('Media Company', 1, 2);
INSERT INTO Company (name, industry_id, user_id) VALUES ('Hooli', 2, 3);
INSERT INTO Company (name, industry_id, user_id) VALUES ('Pied Piper', 2, 4);

-- --------------- JOBS ---------------
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id) VALUES ('Billing Coordinator','Piscataway','We are looking for a trustworthy Billing coordinator to ensure the company tracks and collects debts consistently and correctly. Your job will be important for safeguarding our revenues.', 'Collaborating with finance and sales professionals to maintain accounts receivable. Compiling and process information such as prices, discounts, shipping rates etc. Ensuring customers are billed correctly for services offered','Proven experience as billing coordinator or similar position. Understanding of relevant laws and best practices. Proficient in MS office and data entry; working knowledge of ERP software is a plus',3,3);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id) VALUES ('Senior Software Engineer','Somerset','We are looking for a Senior Software Engineer to produce and implement functional software solutions. You will work with upper management to define software requirements and take the lead on operational and technical projects.', 'Directing software development projects. Producing, testing and debugging code. Leading engineers and developers','Extensive experience in software development, scripting and project management. Experience using system monitoring tools (e.g. New Relic) and automated testing frameworks. Knowledge of selected programming languages (e.g. Python, C++) and the Java/J2EE platform. In-depth knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB)',2,2);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id) VALUES ('Junior Software Engineer','Somerset','We are looking for a Junior Software Engineer to produce and implement functional software solutions.', 'Producing, testing and debugging code.','Some experience in software development and scripting. Graphic design a plus. Knowledge of Javscript and frameworks. Knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB) a plus.',2,2);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id) VALUES ('Web Editor','New Brunswick','We are looking for a passionate web editor to research, plan, write and edit web content. The successful candidate should be a skilled writer and researcher, with an eye for detail and an understanding of the special requirements of web writing. The goal is to produce creative web content to appeal to our audience.', 'Producing and publishing new content in a creative way. Liaising with clients and in-house team members to decide on new posts. Overseeing layout (images, graphics, videos and artwork)','Proven work experience as a web editor. Editing skills with a demonstrable portfolio of published work. Hands on experience with MS Office, InDesign, Photoshop or other publishing tools. In-depth knowledge of SEO',1,1);
