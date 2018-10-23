package com.romha.checkonme.model;

import java.io.Serializable;

/**
 * Created by admin on 3/4/17.
 */

public class User implements Serializable {
    public String _id;
    public String token;
    public String firstName;
    public String lastName;
    public String phone;
    public String email;
    public String password;
    public String country;
    public String state;
    public String city;
    public String contact1Name;
    public String contact2Name;
    public String contact1Phone;
    public String contact2Phone;
    public String contact1Relation;
    public String contact2Relation;
    public String picture;
    public String profile_id;

    /* Table Name */
    public static String TABLE = "user";

    /* List of Columns */
    public static String COL_ID = "id";
    public static String COL_TOKEN = "token";
    public static String COL_FIRST_NAME = "first_name";
    public static String COL_LAST_NAME = "last_name";
    public static String COL_PHONE = "phone";
    public static String COL_EMAIL = "email";
    public static String COL_PASSWORD = "password";
    public static String COL_COUNTRY = "country";
    public static String COL_STATE = "state";
    public static String COL_CITY = "city";
    public static String COL_CONTACT1_NAME = "contact1_name";
    public static String COL_CONTACT2_NAME = "contact2_name";
    public static String COL_CONTACT1_PHONE = "contact1_phone";
    public static String COL_CONTACT2_PHONE = "contact2_phone";
    public static String COL_CONTACT1_RELATION = "contact1_relation";
    public static String COL_CONTACT2_RELATION = "contact2_relation";
    public static String COL_PICTURE = "picture";
    public static String COL_PROFILE_ID = "profile_id";

    /* Create Table SQL statement */
    public static String CREATE_TABLE_SQL = String.format("CREATE TABLE IF NOT EXISTS %s (" +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT," +
            "%s TEXT" +
            ")",
            TABLE,
            COL_ID,
            COL_TOKEN,
            COL_FIRST_NAME,
            COL_LAST_NAME,
            COL_PHONE,
            COL_EMAIL,
            COL_PASSWORD,
            COL_COUNTRY,
            COL_STATE,
            COL_CITY,
            COL_CONTACT1_NAME,
            COL_CONTACT2_NAME,
            COL_CONTACT1_PHONE,
            COL_CONTACT2_PHONE,
            COL_CONTACT1_RELATION,
            COL_CONTACT2_RELATION,
            COL_PICTURE,
            COL_PROFILE_ID
    );

    public static String DROP_TABLE_SQL = "DROP TABLE " + TABLE;

    @Override
    public String toString() {
        return "User{" +
                "_id='" + _id + '\'' +
                ", token='" + token + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", country='" + country + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                ", contact1Name='" + contact1Name + '\'' +
                ", contact2Name='" + contact2Name + '\'' +
                ", contact1Phone='" + contact1Phone + '\'' +
                ", contact2Phone='" + contact2Phone + '\'' +
                ", contact1Relation='" + contact1Relation + '\'' +
                ", contact2Relation='" + contact2Relation + '\'' +
                ", picture='" + picture + '\'' +
                ", profile_id='" + profile_id + '\'' +
                '}';
    }
}
