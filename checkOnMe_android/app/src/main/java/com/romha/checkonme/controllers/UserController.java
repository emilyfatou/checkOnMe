package com.romha.checkonme.controllers;

import android.content.ContentValues;
import android.database.Cursor;

import com.romha.checkonme.model.User;

/**
 * Created by admin on 3/4/17.
 */

public class UserController extends Controller<User> {

    public static User user;

    public UserController(String table) {
        super(table);
    }

    /**
     * Returns all the records
     */
    @Override
    public void load() {
        super.load();

        /* Iterate through the cursor */
        while (cursor.moveToNext()) {
            /* Add all user records to the items */
//            items.add(getUser(cursor));

            user = getUser(cursor); // since we only have one user logged in at a time
        }
    }

    private User getUser(Cursor c) {
        User u = new User();

        u._id = c.getString(c.getColumnIndex(User.COL_ID));
        u.token = c.getString(c.getColumnIndex(User.COL_TOKEN));
        u.firstName = c.getString(c.getColumnIndex(User.COL_FIRST_NAME));
        u.lastName = c.getString(c.getColumnIndex(User.COL_LAST_NAME));
        u.phone = c.getString(c.getColumnIndex(User.COL_PHONE));
        u.email = c.getString(c.getColumnIndex(User.COL_EMAIL));
        u.password = c.getString(c.getColumnIndex(User.COL_PASSWORD));
        u.country = c.getString(c.getColumnIndex(User.COL_COUNTRY));
        u.state = c.getString(c.getColumnIndex(User.COL_STATE));
        u.city = c.getString(c.getColumnIndex(User.COL_CITY));
        u.contact1Name = c.getString(c.getColumnIndex(User.COL_CONTACT1_NAME));
        u.contact2Name = c.getString(c.getColumnIndex(User.COL_CONTACT2_NAME));
        u.contact1Phone = c.getString(c.getColumnIndex(User.COL_CONTACT1_PHONE));
        u.contact2Phone = c.getString(c.getColumnIndex(User.COL_CONTACT2_PHONE));
        u.contact1Relation = c.getString(c.getColumnIndex(User.COL_CONTACT1_RELATION));
        u.contact2Relation = c.getString(c.getColumnIndex(User.COL_CONTACT2_RELATION));
        u.picture = c.getString(c.getColumnIndex(User.COL_PICTURE));
        u.profile_id = c.getString(c.getColumnIndex(User.COL_PROFILE_ID));

        return u;
    }

    @Override
    public boolean save(User user) {
        /* Content Values instance, add the columns and their values */
        ContentValues values = new ContentValues();
        values.put(User.COL_ID, user._id);
        values.put(User.COL_TOKEN, user.token);
        values.put(User.COL_FIRST_NAME, user.firstName);
        values.put(User.COL_LAST_NAME, user.lastName);
        values.put(User.COL_PHONE, user.phone);
        values.put(User.COL_EMAIL, user.email);
        values.put(User.COL_PASSWORD, user.password);
        values.put(User.COL_COUNTRY, user.country);
        values.put(User.COL_STATE, user.state);
        values.put(User.COL_CITY, user.city);
        values.put(User.COL_CONTACT1_NAME, user.contact1Name);
        values.put(User.COL_CONTACT2_NAME, user.contact2Name);
        values.put(User.COL_CONTACT1_PHONE, user.contact1Phone);
        values.put(User.COL_CONTACT2_PHONE, user.contact2Phone);
        values.put(User.COL_CONTACT1_RELATION, user.contact1Relation);
        values.put(User.COL_CONTACT2_RELATION, user.contact2Relation);
        values.put(User.COL_PICTURE, user.picture);
        values.put(User.COL_PROFILE_ID, user.profile_id);

        /* Check if the record exists */
        String whereClause = String.format("%s = '%s'", User.COL_ID, user._id);

        if (!exists(whereClause)) {
            long num = db.insert(TABLE, null, values);
            return num != -1;
        }else {
            /* Exists */
            return update(values, User.COL_ID, user._id);
        }
    }

    /**
     * Searches for a record in a table and returns User
     * @param whereClause
     * @return {@Link User}
     */
    public User searchUser(String whereClause) {
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);

        if (c.moveToNext()) {
            /* The record exists */
            return getUser(c);
        }else {
            /* The record was not found */
            c.close();
            return null;
        }
    }

}
