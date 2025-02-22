import {
    pgTable,
    uuid,
    text,
    integer,
    boolean,
    timestamp,
    index,
  } from "drizzle-orm/pg-core";
  
// --------------------
// User Table
// --------------------
export const users = pgTable("User", {
    id: uuid("id").defaultRandom().primaryKey(),
    googleId: text("google_id").notNull().unique(),
    fullname: text("fullname"),
    age: integer("age"),
    birth: timestamp("birth", { mode: "date" }),
    gender: text("gender"),
    religion: text("religion"),
    bloodGroup: text("blood_group"),
    graduation: text("graduation"),
    school: text("school"),
    course: text("course"),
    telephone: text("telephone"),
    email: text("email").notNull().unique(),
    medicalCoverage: text("medical_coverage"),
    chronicDisease: text("chronic_disease"),
    selfMedicine: text("self_medicine"),
    drugAllergic: text("drug_allergic"),
    foodAllergic: text("food_allergic"),
    perferFood: text("perfer_food"),
    address: text("address"),
    homePhoneTel: text("home_phone_tel"),
    comcampAttendance: boolean("comcamp_attendance"),
    shirtSize: text("shirt_size"),
    everydayAttendence: boolean("everyday_attendence"),
    hasLaptop: boolean("has_laptop"),
    travel: text("travel"),
    parentFullname: text("parent_fullname"),
    parentRelation: text("parent_relation"),
    parentPhone: text("parent_phone"),
    hasSubmitAnswer: boolean("has_submit_answer")
        .notNull()
        .default(false),
});
  
// --------------------
// File Table
// --------------------
export const files = pgTable(
    "File",
    {
        id: uuid("id").defaultRandom().primaryKey(),
        userId: uuid("user_id")
        .notNull()
        .references(() => users.id)
        .unique(),
        facePhotoFilepath: text("face_photo_filepath"),
        thaiNationalIdCopyFilepath: text("thai_nationalid_copy_filepath"),
        parentPermissionFilepath: text("parent_permission_filepath"),
        p1Filepath: text("p1_filepath"),
        p7Filepath: text("p7_filepath"),
    },
    (table) => [
        index("file_user_id_index").on(table.userId),
    ]
);
  
// --------------------
// AnswerRegis Table
// --------------------
export const answerRegises = pgTable(
    "AnswerRegis",
    {
        id: uuid("id").defaultRandom().primaryKey(),
        userId: uuid("user_id")
        .notNull()
        .references(() => users.id)
        .unique(),
        answer1: text("answer1"),
        answer2: text("answer2"),
        answer3: text("answer3"),
        answer4: text("answer4"),
        answer5: text("answer5"),
        answer6_1: text("answer6_1"),
        answer6_2: text("answer6_2"),
    },
    (table) => [
        index("answer_regis_user_id_index").on(table.userId),
    ]
);
  
// --------------------
// AnswerAcademic Table
// --------------------
export const answerAcademics = pgTable(
    "AnswerAcademic",
    {
        id: uuid("id").defaultRandom().primaryKey(),
        userId: uuid("user_id")
        .notNull()
        .references(() => users.id)
        .unique(),
        algoAnswer: text("algo_answer"),
        chessNotation: text("chess_notation"),
        chessScore: integer("chess_score"),
    },
    (table) => ({
        userIdIndex: index("answer_academic_user_id_index").on(table.userId),
    })
);
  
  