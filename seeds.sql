

-- 1
INSERT INTO Industry (name, img) VALUES ('Industry 1','Industry 1 Image');

INSERT INTO Company (name, industry_id) VALUES ('Company 1', 1);

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('User Name 1','User1@gmail.com', '$2a$10$6dXauFqPyY2/dQEN3ubuP.9hGfwoPaaLqtJ35DNi07TWjtyR1i9EO', 'User 1 Image', false, 'User 1 Location', 1, 1);

INSERT INTO Conversation (is_employer) VALUES (false);

INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 1 Subject','Message 1 Text','Message 1 Attachment',1,1);

INSERT INTO Newsfeed (content, user_id) VALUES ('Content 1', 1);

INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 1 ','Subheading 1','Details 1', 'Section Name 1', 1);

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 1','Location 1','Description 1', 'Responsibilities 1','Qualifications 1',1,1,1);

--  2 
INSERT INTO Industry (name, img) VALUES ('Industry 2','Industry 2 Image');

INSERT INTO Company (name, industry_id) VALUES ('Company 2', 2);

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('User Name 2','User2@gmail.com', 'password', 'User 2 Image', false, 'User 2 Location', 2, 2);

INSERT INTO Conversation (is_employer) VALUES (false);

INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 2 Subject','Message 2 Text','Message 2 Attachment',2,2);

INSERT INTO Newsfeed (content, user_id) VALUES ('Content 2', 2);

INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 2 ','Subheading 2','Details 2', 'Section Name 2', 2);

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 2','Location 2','Description 2', 'Responsibilities 2','Qualifications 2',2,2,2);

-- 3 
INSERT INTO Industry (name, img) VALUES ('Industry 3','Industry 3 Image');

INSERT INTO Company (name, industry_id) VALUES ('Company 3', 3);

INSERT INTO User (name, email, password, img, is_employer, location, industry_id, company_id) VALUES ('User Name 3','User3@gmail.com', 'password', 'User 3 Image', false, 'User 3 Location', 3, 3);

INSERT INTO Conversation (is_employer) VALUES (false);

INSERT INTO Message (subject, text, attachment, conversation_id, user_id) VALUES ('Message 3 Subject','Message 3 Text','Message 3 Attachment',3,3);

INSERT INTO Newsfeed (content, user_id) VALUES ('Content 3', 3);

INSERT INTO Credential (heading, subheading, details, section_name, user_id) VALUES ('Heading 3 ','Subheading 3','Details 3', 'Section Name 3', 3);

INSERT INTO Job (title, location, description, responsibilities, qualifications, industry_id, company_id, user_id) VALUES ('Title 3','Location 3','Description 3', 'Responsibilities 3','Qualifications 3',3,3,3);