package com.romha.checkonme.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.romha.checkonme.model.Message;
import com.romha.checkonme.model.User;

/**
 * Created by admin on 3/4/17.
 */

public class DatabaseHelper extends SQLiteOpenHelper {

    public static final String DATABASE_NAME = "checkOnMe.db";
    public static final int DATABASE_VERSION = 1;
    private Context context;

    public String[][] TABLES = {
            {User.TABLE, User.CREATE_TABLE_SQL, User.DROP_TABLE_SQL},
            {Message.TABLE, Message.CREATE_TABLE_SQL, Message.DROP_TABLE_SQL}
    };

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        this.context = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        createTable(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        deleteTable(db);
        createTable(db);
    }

    private void createTable(SQLiteDatabase db) {
        for (String[] s: TABLES) {
            db.execSQL(s[1]);
        }
    }

    private void deleteTable(SQLiteDatabase db) {
        for (String[] s: TABLES) {
            db.execSQL(s[2]);
        }
    }
}
