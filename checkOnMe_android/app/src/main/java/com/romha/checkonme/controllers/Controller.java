package com.romha.checkonme.controllers;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.romha.checkonme.database.DatabaseController;

import java.util.ArrayList;

/**
 * Created by admin on 3/4/17.
 */

public abstract class Controller<T> {

    public DatabaseController databaseController;
    public SQLiteDatabase db;

    /* Define a general Table Name */
    public String TABLE;

    /* Define a general select statement */
    public String SELECT_ALL;

    /* Will contain records we select from the table */
    public ArrayList<T> items = new ArrayList<>();

    /* Contains the result of the database query */
    public Cursor cursor;

    public Controller(String table) {
        TABLE = table;
        SELECT_ALL = "SELECT * FROM " + TABLE;

        databaseController = DatabaseController.getInstance();
        db = DatabaseController.openDatabase();
    }

    public void load() {
        /* Select all the records from the database table */
        cursor = db.rawQuery(SELECT_ALL, null);
    }

    public abstract boolean save(T t);

    public boolean update(ContentValues v, String col, String value) {
        /* col = 'value' */
        String whereClause = String.format("%s = '%s'", col, value);
        int num = db.update(TABLE, v, whereClause, null);

        return num > 0;
    }

    /**
     * Deletes the entire table
     * @return {true/false}
     */
    public boolean clearTable() {
        int num = db.delete(TABLE, null, null);
        return num > 0;
    }

    /**
     * Deletes specific records from the table based on the whereClause
     * @param whereClause
     * @return {true/false}
     */
    public boolean delete(String whereClause) {
        int num = db.delete(TABLE, whereClause, null);
        return num > 0;
    }

    /**
     * Checks whether a record exists in a Table
     * @param whereClause
     * @return {true/false}
     */
    public boolean exists(String whereClause) {
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);

        if (c.moveToNext()) {
            /* The record exists */
            c.close();
            return true;
        }else {
            /* The record was not found */
            c.close();
            return false;
        }
    }

}
