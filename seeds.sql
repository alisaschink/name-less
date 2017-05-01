-- Industries and companies 
INSERT INTO Industry (name, img) VALUES ('Media','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');
INSERT INTO Company (name, industry_id) VALUES ('Media Company', 1);
INSERT INTO Industry (name, img) VALUES ('Software','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');
INSERT INTO Company (name, industry_id) VALUES ('Hooli', 2);
INSERT INTO Company (name, industry_id) VALUES ('Pied Piper', 2);
INSERT INTO Industry (name, img) VALUES ('Retail','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');
INSERT INTO Company (name, industry_id) VALUES ('JC Penney', 3);

--  ------------ Users ------------

-- Applicant 1
INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('UserName1','User1@gmail.com', '$2a$10$6dXauFqPyY2/dQEN3ubuP.9hGfwoPaaLqtJ35DNi07TWjtyR1i9EO', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'User 1 Location', 1, 1);
INSERT INTO Conversation (is_employer) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 1 Subject','Message 1 Text','Message 1 Attachment',1,1);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 1', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('S.B. in Chemical Engineering','Rutgers University','Relevant Courses: Chemistry, Engineering 101. GPA: 3.5. Tutor and undergraduate researcher', 'Education', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Full Stack Coding Bootcamp','Rutgers','Knowledge of JavaScript, HTML, CSS, Bootstrap, MySQL and React.', 'Education', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('SAT Tutor','Kaplan','I tutor high school juniors for the SAT math exam.', 'Experience', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Lab Technician','NJIT','I conduct chemistry experiments', 'Experience', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('The Acidity of Acids','Published in Science','Cited in a NYT pop science article: https://www.nytimes.com/ . Abstract: Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. ', 'Accomplishments', 1);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Chemistry Club President','Rutgers University','4 year member and 2 year president of the Rugters Chemistry Club.', 'Leadership', 1);

--  Appliant 2 
INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('UserName2','User2@gmail.com', 'password', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'User 2 Location', 2, 2);
INSERT INTO Conversation (is_employer) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 2 Subject','Message 2 Text','Message 2 Attachment',2,2);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 2', 2);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 2 ','Subheading 2','Details 2', 'Section Name 2', 2);

-- Applicant 3 
INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('UserName3','User3@gmail.com', 'password', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'User 3 Location', 3, 3);
INSERT INTO Conversation (is_employer) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 3 ','Subheading 3','Details 3', 'Section Name 3', 3);

--  ------------ Employers ------------
-- Job Descriptions pulled from:  https://resources.workable.com/
-- Employer 1

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('Employer1User4','employer1@gmail.com', 'password', 'https://s-media-cache-ak0.pinimg.com/originals/47/34/e9/4734e94c777828ca15bf65f77eec0d3c.jpg', false, 'User 4 Location', 3, 3);
INSERT INTO Conversation (is_employer) VALUES (false);
INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);
INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);
INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 3 ','Subheading 3','Details 3', 'Section Name 3', 3);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Billing Coordinator','Piscataway','We are looking for a trustworthy Billing coordinator to ensure the company tracks and collects debts consistently and correctly. Your job will be important for safeguarding our revenues.', 'Collaborating with finance and sales professionals to maintain accounts receivable. Compiling and process information such as prices, discounts, shipping rates etc. Ensuring customers are billed correctly for services offered','Proven experience as billing coordinator or similar position. Understanding of relevant laws and best practices. Proficient in MS office and data entry; working knowledge of ERP software is a plus',3,3,4);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Senior Software Engineer','Somerset','We are looking for a Senior Software Engineer to produce and implement functional software solutions. You will work with upper management to define software requirements and take the lead on operational and technical projects.', 'Directing software development projects. Producing, testing and debugging code. Leading engineers and developers','Extensive experience in software development, scripting and project management. Experience using system monitoring tools (e.g. New Relic) and automated testing frameworks. Knowledge of selected programming languages (e.g. Python, C++) and the Java/J2EE platform. In-depth knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB)',2,2,4);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Junior Software Engineer','Somerset','We are looking for a Junior Software Engineer to produce and implement functional software solutions.', 'Producing, testing and debugging code.','Some experience in software development and scripting. Graphic design a plus. Knowledge of Javscript and frameworks. Knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB) a plus.',2,2,4);
INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Web Editor','New Brunswick','We are looking for a passionate web editor to research, plan, write and edit web content. The successful candidate should be a skilled writer and researcher, with an eye for detail and an understanding of the special requirements of web writing. The goal is to produce creative web content to appeal to our audience.', 'Producing and publishing new content in a creative way. Liaising with clients and in-house team members to decide on new posts. Overseeing layout (images, graphics, videos and artwork)','Proven work experience as a web editor. Editing skills with a demonstrable portfolio of published work. Hands on experience with MS Office, InDesign, Photoshop or other publishing tools. In-depth knowledge of SEO',1,1,4);
-- INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Lame Job','Jersey City','This job is a very bad job', 'Responsibilities 3','Qualifications 3',3,3,4);


