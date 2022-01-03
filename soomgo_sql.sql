create database Soomgo;
use Soomgo;

CREATE TABLE tb_members (
    idx bigint AUTO_INCREMENT,
    mem_name varchar(20),
    email varchar(20),
    mem_password  varchar(20),
    hp varchar(13),
    gender boolean,
    sms_flag boolean,
    gosu_idx bigint,
    mem_site bigint,
    regdate datetime,
    PRIMARY KEY (idx)
);

CREATE TABLE tb_gosus (
    idx bigint AUTO_INCREMENT,
    mem_idx bigint,
    gosu_name varchar(100),
    hp varchar(20),
    gender int,
    mem_site int,
    r_service varchar(900),
    line_des varchar(900),
    my_place varchar(900),
    distance int,
    hp_time_start varchar(100),
    hp_time_end varchar(100),
    payment_type varchar(100),
    sumgopay_flag boolean,
    card_flag boolean,
    bank_flag boolean,
    cash_flag boolean,
    career varchar(20),
    staff_num varchar(20),
    buisness varchar(900),
    certificate varchar(900),
    tax boolean,
    des varchar(900),
    files varchar(900),
    qna1 varchar(900),
    qna2 varchar(900),
    qna3 varchar(900),
    qna4 varchar(900),
    qna5 varchar(900),
    home_url varchar(500),
    face_url varchar(500),
    twit_url varchar(500),
    insta_url varchar(500),
    blog_url varchar(500),
    kakao_url varchar(500),
    regdate datetime,
    cash int,
    cash_bonus int,
    PRIMARY KEY (idx),
    foreign key(mem_idx) references tb_members(idx)
);

CREATE TABLE tb_gosus_services(
    idx bigint AUTO_INCREMENT,
    gosu_idx bigint,
    cate3_idx bigint,
    regdate datetime,
    PRIMARY KEY (idx),
    foreign key(gosu_idx) references tb_gosus(idx),
    foreign key(cate3_idx) references tb_members(idx)
);

CREATE TABLE tb_gosus_personal(
    idx bigint AUTO_INCREMENT,
    gosu_idx bigint,
    email varchar(100),
    bank varchar(50),
    tb_account varchar(100),
    regdate datetime,
    PRIMARY KEY (idx),
    foreign key(gosu_idx) references tb_gosus(idx)
);

CREATE TABLE tb_gosus_services(
    idx bigint AUTO_INCREMENT,
    gosu_idx bigint,
    email varchar(100),
    bank varchar(60),
    tb_account varchar(100),
    tb_number varchar (100),
    files varchar(200),
    regdate datetime,
    PRIMARY KEY (idx),
    foreign key(gosu_idx) references tb_category3(idx)
);


CREATE TABLE tb_gosus_pictures(
    idx bigint AUTO_INCREMENT,
    gosu_idx bigint,
    files varchar(200),
    regdate datetime,
    PRIMARY KEY (idx),
    foreign key(gosu_idx) references tb_gosus(idx)
);


CREATE TABLE tb_category1(
    idx bigint AUTO_INCREMENT,
    cate_name varchar(100),
    regdate DATETIME default now(),
    PRIMARY KEY (idx)
);

CREATE TABLE tb_category2(
    idx bigint AUTO_INCREMENT,
    cate1_idx bigint,
    cate_name varchar(100),
    regdate DATETIME default now(),
    PRIMARY KEY (idx),
    foreign key(cate1_idx) references tb_category1(idx)
);

CREATE TABLE tb_category3(
    idx bigint AUTO_INCREMENT,
    cate1_idx bigint,
    cate2_idx bigint,
    cate_name varchar(100),
    regdate DATETIME,
    des_title varchar(100),
    des_text varchar(100),
    PRIMARY KEY (idx),
    foreign key(cate1_idx) references tb_category1(idx),
    foreign key(cate2_idx) references tb_category2(idx)
);

CREATE TABLE tb_cate_question_title(
    idx bigint AUTO_INCREMENT,
    cate_level int,
    cate_idx bigint,
    title varchar(100),
    max_choose int,
    regdate datetime,
    PRIMARY KEY (idx)
);

CREATE TABLE tb_cate_question_answer(
    idx bigint AUTO_INCREMENT,
    title_idx bigint,
    des varchar(500),
    des_sub varchar(500),
    text_flag boolean,
    text_sample varchar(500),
    regdate datetime,
    PRIMARY KEY (idx),
    foreign key(title_idx) references tb_cate_question_title(idx)
);

CREATE TABLE tb_cate_question(
    idx bigint AUTO_INCREMENT,
    cate_level int,
    cate_idx bigint,
    cate_question_title_idx bigint,
    cate_question_answer_idx bigint,
    regdate datetime,
    PRIMARY KEY (idx)
);

create table tb_requests(
	idx bigint primary key,
    regdate datetime default now(),
    mem_idx bigint,
    cate3_idx bigint
);

create table tb_request_answer(
	idx bigint primary key,
    regdate datetime default now(),
    request_idx bigint,
    question_title_idx bigint,
    question_answer_idx bigint,
    answer_text varchar(200)
);

create table tb_estimates(
	idx bigint primary key,
    regdate datetime default now(),
    salary int,
    price int,
    content varchar(1000),
    files varchar(1000),
    mem_idx bigint,
    gosu_idx bigint
);

create table tb_estimate_often(
	idx bigint primary key,
    regdate datetime default now(),
    title varchar(100),
    salary int,
    price int,
    content varchar(1000),
    files varchar(1000),
    gosu_idx bigint
);

create table tb_baro(
	idx bigint primary key,
    regdate datetime default now(),
	gosu_idx bigint,
    cate3_idx bigint,
    map_type int,
    map_idx bigint,
    distance int,
    salary int,
    price int,
    content varchar(1000),
    files varchar(1000)
);

create table tb_deal(
	idx bigint primary key,
    regdate datetime default now(),
    mem_idx bigint,
    gosu_idx bigint,
    esti_idx bigint,
    price int,
    pay_idx bigint
);

create table tb_map(
	idx bigint primary key,
    regdate datetime default now(),
	gosu_idx bigint,
    cate3_idx bigint,
    service_place varchar(1000),
    sm_type int,
    mem_idx bigint,
    title varchar(100)
);

create table tb_faqs(
	idx bigint primary key,
    regdate datetime default now(),
    faq_type int,
    tb_subject varchar(100),
	title varchar(100),
    content varchar(1000)
);

create table tb_questions(
	idx bigint primary key,
    regdate datetime default now(),
    mem_idx bigint,
    ans_flag boolean,
    ans_date date,
    title varchar(100),
    que_content varchar(1000),
    ans_content varchar(1000),
    files varchar(100),
    email varchar(100)
);

create table tb_notices(
	idx bigint primary key,
    regdate datetime default now(),
	tb_subject varchar(100),
    title varchar(100),
    content varchar(1000),
    show_flag boolean,
    star boolean
);

create table tb_payments(
	idx bigint primary key,
    regdate datetime default now(),
    service_price int,
    service_date date,
    total_price int,
    gosu_idx bigint
);

create table tb_soomgocash(
	idx bigint primary key,
    regdate datetime default now(),
	cash int,
    sm_type int,
    gosu_idx bigint,
    details varchar(100),
    cash_bonus_idx bigint,
    pay_idx bigint
);

create table tb_cash_bonus(
	idx bigint primary key,
    regdate datetime default now(),
	cash int,
    gosu_idx bigint,
    details varchar(100)
);

create table tb_chats(
	idx bigint primary key,
    regdate datetime default now(),
    chat_text text,
    estimate_idx bigint,
	chat_type int,
	files varchar(100),
	bot_type int,
	chatroom_idx bigint,
	mem_idx bigint,
	gosu_idx bigint    
);

create table tb_chatroom(
	idx bigint primary key,
    regdate datetime default now(),
	like_flag boolean
);

create table tb_report(
	idx bigint primary key,
    regdate datetime default now(),
	mem_idx bigint,
    chat_text text,
    request_idx bigint,
    char_type int,
    files varchar(100),
    bot_type int,
    like_flag boolean
);

create table tb_magazine(
	idx bigint primary key,
	regdate datetime default now(),
    title varchar(100),
    img varchar(100),
    url varchar(100)
);