package com.romha.checkonme.controllers;

import android.content.ContentValues;
import android.database.Cursor;

import com.romha.checkonme.model.Message;

/**
 * Created by admin on 3/4/17.
 */

public class MessageController extends Controller<Message> {

//    public static Message message;

    public MessageController(String table) {
        super(table);
    }

    /**
     * Returns all the records
     */
    @Override
    public void load() {
//        super.load();

        /* Select all the messages of the logged in user from the database table */
        String whereClause = String.format("%s = '%s'", Message.COL_USER_ID, UserController.user._id);
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        cursor = db.rawQuery(sql, null);

        /* Iterate through the cursor */
        while (cursor.moveToNext()) {
            /* Add all Message records to the items */
            items.add(getMessage(cursor));
        }

    }

    private Message getMessage(Cursor c) {
        Message u = new Message();

        u.recipient = c.getString(c.getColumnIndex(Message.COL_RECIPIENT));
//        u.date = c.getString(c.getColumnIndex(Message.COL_DATE));
        u.content = c.getString(c.getColumnIndex(Message.COL_CONTENT));
        u.user_id = c.getString(c.getColumnIndex(Message.COL_USER_ID));

        return u;
    }

    @Override
    public boolean save(Message message) {
        /* Content Values instance, add the columns and their values */
        ContentValues values = new ContentValues();
        values.put(Message.COL_RECIPIENT, message.recipient);
//        values.put(Message.COL_DATE, message.date);
        values.put(Message.COL_CONTENT, message.content);
        values.put(Message.COL_USER_ID, message.user_id);

        long num = db.insert(TABLE, null, values);
        return num != -1;

    }

    /**
     * Searches for a record in a table and returns Message
     * @param whereClause
     * @return {@Link Message}
     */
    public Message searchMessage(String whereClause) {
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);

        if (c.moveToNext()) {
            /* The record exists */
            return getMessage(c);
        }else {
            /* The record was not found */
            c.close();
            return null;
        }
    }

}
