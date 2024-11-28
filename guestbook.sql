-- CREATE DATABASE guestbook;
USE guestbook;

DROP TABLE IF EXISTS guestbook;

CREATE TABLE guestbook (
	id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(250),
    lname VARCHAR(250),
    job VARCHAR(250),
    company VARCHAR(250),
    linkedIn VARCHAR(250),
    email VARCHAR(250),
    met VARCHAR(250),
    other VARCHAR(250),
    message VARCHAR(1000),
    mail_list VARCHAR(50),
    email_format VARCHAR(50),
    date_submitted TIMESTAMP DEFAULT NOW()
    );
    
    INSERT INTO guestbook (fname, lname, job, company, linkedIn, email, met, other, message, mail_list, email_format)
    VALUES ('Bob', 'Doe', 'Butler', 'Wow Company', 'www.linkedin.com/in/bob-doe', 'doe@gmail.com', 'Other', 'We met at the hotel', 'I am so grateful that we have met!', 'check', 'Text');
    
    SELECT * FROM guestbook;
    