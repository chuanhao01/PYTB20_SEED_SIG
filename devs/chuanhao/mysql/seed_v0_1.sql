USE PYTB_SEED_SIG;

DROP TABLE IF EXISTS USERS, EVENTS, SIGNUPS;

CREATE TABLE IF NOT EXISTS USERS (
	nric VARCHAR(255) NOT NULL,
	dob DATETIME NOT NULL,
	fullname VARCHAR(255) NOT NULL,
	contact_num VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	deleted INT(1) NOT NULL,
	time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(user_id)	
);

CREATE TABLE IF NOT EXISTS EVENTS (
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	event_date DATETIME NOT NULL,
	event_id VARCHAR(255) NOT NULL,
	status INT(2) NOT NULL,
	deleted INT(1) NOT NULL,
	time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(event_id)	
);

CREATE TABLE IF NOT EXISTS SIGNUPS (
	event_id VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	signup_id VARCHAR(255) NOT NULL,	
	status INT(2) NOT NULL,
	deleted INT(1) NOT NULL,
	time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(signup_id),
	FOREIGN KEY(event_id)
		REFERENCES EVENTS(event_id),
	FOREIGN KEY(user_id)
		REFERENCES USERS(user_id)
);
