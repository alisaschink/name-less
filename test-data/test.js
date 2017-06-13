var Models = require('../models');

// ========== Query Functions ==========
function addRow(rowObj, modelName){
  return new Promise(function(resolve, reject){
    Models[modelName].create(rowObj)
    .then(
    // success
    function(){ resolve() },
    // error  
    function(){ reject() }
    )
  })
}

// =========== Test Variables ===============

//INDUSTRY
var industry_1 = {
  name: 'Media',
  img: 'https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg'
}

var industry_2 = {
  name: 'Software',
  img: 'https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg'
}

var industry_3 = {
  name: 'Retail',
  img: 'https://s-media-cache-ak0.pinimg.com/originals/30/dc/3a/30dc3afd1e8f395af2996217f1710bc9.jpg'
}

//COMPANIES
var company_1 = {
  name: 'Media Company',
  industry_id: 1,
  user_id: 2
}

var company_2 = {
  name: 'Hooli',
  industry_id: 2,
  user_id: 3
}

var company_3 = {
  name: 'Pied Piper',
  industry_id: 2,
  user_id: 4
}

// USERS
//Applicants
//applicant 1 password: Knight
var user_1 = {
  name: 'Scarlet Knight',
  username: 'JerseyCoder',
  email:  'sknight@gmail.com',
  password: '$2a$10$TtXMHq5ZJVUeuASp/ZEReetxs1BdozCXv3Q/swYXOgWDJw6VnrY/O',
  is_employer: false,
  img: 'http://www.motherearthnews.com/-/media/Images/MEN/Editorial/Articles/Magazine-Articles/2001/06-01/All-About-Raising-Llamas/Llama-jpg.jpg',
  location: 'New Jersey',
  industry_id: 2,
  info: "User one public profile information blurb User one public profile information blurbUser one public profile information blurbUser one public profile information blurbUser one public profile information blurbUser one public profile information blurb"
}

//Employers
//employer 1
var user_2 = {
  name: 'Alisa Media',
  username: 'MediaCo',
  email: 'Media@gmail.com',
  password: '$2a$10$BqyTSOHIrsLjDOY9Bo9TMetmxveqeUnnCHifBTJP4etlM4SHvdC0S',
  is_employer: true,
  img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSILcFz6Y_fnk_QiXss-ydysMMJq9QExhw3SfeY9FJ35TUGYGd-2g',
  location: 'Somerset, NJ',
  industry_id: 1,
  info: "Media company short bio Media company short bio Media company short bio Media company short bioMedia company short bio Media company short bioMedia company short bio"
}

//employer 2
var user_3 = {
  name: 'Gavin Belson',
  username: 'HooliCo',
  email: 'Gavin@hooli.com',
  password: '$2a$10$7OCsiUzhrDnWNhZ1z2S9muqnq7mpIqxVmczYKIAvlExhUCcLnYebi',
  is_employer: true,
  img: 'https://vignette3.wikia.nocookie.net/silicon-valley/images/f/f0/Hooli.png/revision/latest?cb=20160811201728',
  location: 'Silicon Valley', 
  industry_id: 2,
  info: "Hooli company short bio Hooli company short bio Hooli company short bio Hooli company short bio Hooli company short bio Hooli company short bio Hooli company short bio"
}

var user_4 = {
  name: 'Erlich Bachman',
  username: 'PiedPiperCo',
  email: 'e@piedpiper.com',
  password: '$2a$10$qRtLMeamR87/z.GOd/ybvOKJnuKcVjrO.MoTqGCoTluKeawdT8U/2', 
  is_employer: true,
  img: 'https://res.cloudinary.com/crunchbase-production/image/upload/v1399404021/jszf5otv3hpaeakvub8z.png',
  location: 'Silicon Valley',
  industry_id: 2,
  info: "Short bio section about pied piper Short bio section about pied piper Short bio section about pied piper Short bio section about pied piper Short bio section about pied piper Short bio section about pied piper "
}

//JOBS
var job_1 = {
  title: 'Billing Coordinator',
  location: 'Piscataway',
  description: 'We are looking for a trustworthy Billing coordinator to ensure the company tracks and collects debts consistently and correctly. Your job will be important for safeguarding our revenues.',
  responsibilities: 'Collaborating with finance and sales professionals to maintain accounts receivable. Compiling and process information such as prices, discounts, shipping rates etc. Ensuring customers are billed correctly for services offered',
  qualifications: 'Proven experience as billing coordinator or similar position. Understanding of relevant laws and best practices. Proficient in MS office and data entry; working knowledge of ERP software is a plus',
  company_id: 3,
  industry_id: 3 
}

var job_2 = {
  title: 'Senior Software Engineer',
  location: 'Somerset',
  description: 'We are looking for a Senior Software Engineer to produce and implement functional software solutions. You will work with upper management to define software requirements and take the lead on operational and technical projects.',
  responsibilities: 'Directing software development projects. Producing, testing and debugging code. Leading engineers and developers',
  qualifications: 'Extensive experience in software development, scripting and project management. Experience using system monitoring tools (e.g. New Relic) and automated testing frameworks. Knowledge of selected programming languages (e.g. Python, C++) and the Java/J2EE platform. In-depth knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB)',
  company_id: 2,
  industry_id: 2
}

var job_3 = {
  title: 'Junior Software Engineer',
  location: 'Somerset',
  description: 'We are looking for a Junior Software Engineer to produce and implement functional software solutions.',
  responsibilities: 'Producing, testing and debugging code.',
  qualifications: 'Some experience in software development and scripting. Graphic design a plus. Knowledge of Javscript and frameworks. Knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB) a plus.',
  company_id: 2,
  industry_id: 2
}

var job_4 = {
  title: 'Web Editor',
  location: 'New Brunswick',
  description: 'We are looking for a passionate web editor to research, plan, write and edit web content. The successful candidate should be a skilled writer and researcher, with an eye for detail and an understanding of the special requirements of web writing. The goal is to produce creative web content to appeal to our audience.',
  responsibilities: 'Producing and publishing new content in a creative way. Liaising with clients and in-house team members to decide on new posts. Overseeing layout (images, graphics, videos and artwork)',
  qualifications: 'Proven work experience as a web editor. Editing skills with a demonstrable portfolio of published work. Hands on experience with MS Office, InDesign, Photoshop or other publishing tools. In-depth knowledge of SEO',
  company_id: 1,
  industry_id: 1
}

//CREDENTIALS
var credential_1 = {
  heading: 'B.S. in Chemical Engineering',
  subheading: 'Rutgers University',
  details:  'Relevant Courses: Chemistry, Engineering 101. GPA: 3.5. Tutor and undergraduate researcher',
  section_name: 'Education',
  user_id: 1
}
 
var credential_2 = {
  heading: 'Full Stack Coding Bootcamp',
  subheading: 'Rutgers',
  details: 'Knowledge of JavaScript, HTML, CSS, Bootstrap, MySQL and React.',
  section_name: 'Education',
  user_id: 1
}

var credential_3 = {
  heading: 'SAT Tutor',
  subheading: 'Kaplan',
  details: 'I tutor high school juniors for the SAT math exam.',
  section_name: 'Experience',
  user_id: 1
}

var credential_4 = {
  heading: 'Lab Technician',
  subheading: 'NJIT',
  details: 'I conduct chemistry experiments',
  section_name: 'Experience',
  user_id:1
}

var credential_5 = {
  heading: 'The Acidity of Acids',
  subheading: 'Published in Science',
  details: 'Cited in a NYT pop science article: https://www.nytimes.com/ . Abstract: Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. Lorem ipsum is an acid. Lorem ipsum is not a base. ',
  section_name: 'Accomplishments',
  user_id: 1
}

var credential_6 = {
  heading: 'Chemistry Club President',
  subheading: 'Rutgers University',
  details: '4 year member and 2 year president of the Rugters Chemistry Club.',
  section_name: 'Leadership',
  user_id: 1
}


//CONVERSATIONS
var conversation_1 = {
  is_anonymous: false,
  user_1:  1,
  user_2: 2,
  title: "convo 1!"
}

var conversation_2 = {
  is_anonymous: false,
  user_1: 1,
  user_2: 2,
  title: "convo 2!"
}

//MESSAGES
var message_1 = {
  subject: 'Message 1 Subject',
  text: 'Message 1 Text',
  attachment: 'Message 1 Attachment',
  conversation_id: 1,
  user_id: 1
}

var message_2 = {
  subject: 'Message 2 Subject',
  text:  'Message 2sdfasdf Text',
  attachment: 'Message 2 Attachment',
  conversation_id: 1,
  user_id: 1
}

var message_3 = {
  subject: 'Message 3 Subject',
  text: 'Message 3 Text',
  attachment: 'Message 3 Attachment',
  conversation_id: 1,
  user_id: 2
}


//NEWSFEED
var newsfeed_1 = {
  content: 'Content 2',
  user_id: 2
}

var newsfeed_2 = {
  content: 'Content 1',
  user_id: 1
}

var newsfeed_3 = {
  content: 'Content 3',
  user_id: 3
}


// ============ Call queries ==============
Models.sequelize.sync({ force: true }).then(function(){
  // 
  Promise.all([
    addRow(industry_1, 'Industry'),
    addRow(industry_2, 'Industry'),
    addRow(industry_3, 'Industry')
  ])
  .then(Promise.all([
    addRow(company_1, 'Company'),
    addRow(company_2, 'Company'),
    addRow(company_3, 'Company')
  ]))
  .then(Promise.all([
    addRow(user_1, 'User'),
    addRow(user_2, 'User'),
    addRow(user_3, 'User'),
    addRow(user_4, 'User') 
  ]))
  .then(Promise.all([
    addRow(job_1, 'Job'),
    addRow(job_2, 'Job'),
    addRow(job_3, 'Job'),
    addRow(job_4, 'Job')
  ]))
  .then(Promise.all([
    addRow(credential_1, 'Credential'),
    addRow(credential_2, 'Credential'),
    addRow(credential_3, 'Credential'),
    addRow(credential_4, 'Credential'),
    addRow(credential_5, 'Credential'),
    addRow(credential_6, 'Credential')
  ]))
  .then(Promise.all([
    addRow(conversation_1, 'Conversation'),
    addRow(conversation_2, 'Conversation')
  ]))
  .then(Promise.all([
    addRow(message_1, 'Message'),
    addRow(message_2, 'Message'),
    addRow(message_3, 'Message')
  ]))
  .then(Promise.all([
    addRow(newsfeed_1, 'Newsfeed'),
    addRow(newsfeed_2, 'Newsfeed'),
    addRow(newsfeed_3, 'Newsfeed')
  ]))
  .then(function(){
    console.log('All your queries worked! Check your database');
  }); // promise.all end
})