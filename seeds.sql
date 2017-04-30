

-- 1
INSERT INTO Industry (name, img) VALUES ('Industry 1','https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg');

INSERT INTO Company (name, industry_id) VALUES ('Company 1', 1);

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

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 1','Location 1','Description 1', 'Responsibilities 1','Qualifications 1',1,1,1);

--  2 
INSERT INTO Industry (name, img) VALUES ('Industry 2','http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg');

INSERT INTO Company (name, industry_id) VALUES ('Company 2', 2);

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('UserName2','User2@gmail.com', 'password', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'User 2 Location', 2, 2);

INSERT INTO Conversation (is_employer) VALUES (false);

INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 2 Subject','Message 2 Text','Message 2 Attachment',2,2);

INSERT INTO Newsfeed (content, user_id) VALUES ('Content 2', 2);

INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 2 ','Subheading 2','Details 2', 'Section Name 2', 2);

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 2','Location 2','Description 2', 'Responsibilities 2','Qualifications 2',2,2,2);

-- 3 
INSERT INTO Industry (name, img) VALUES ('Industry 3','http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg');

INSERT INTO Company (name, industry_id) VALUES ('Company 3', 3);

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('UserName3','User3@gmail.com', 'password', 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg', false, 'User 3 Location', 3, 3);

INSERT INTO Conversation (is_employer) VALUES (false);

INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);

INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);

INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 3 ','Subheading 3','Details 3', 'Section Name 3', 3);

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 3','Location 3','Description 3', 'Responsibilities 3','Qualifications 3',3,3,3);