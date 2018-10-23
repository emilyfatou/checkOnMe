package com.romha.checkonme.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;

/**
 * Created by admin on 3/4/17.
 */

public class DatabaseController {

    private static DatabaseHelper databaseHelper;
    private static DatabaseController databaseController;
    private static SQLiteDatabase db;

    public static synchronized void initialize(Context context) {
        /* Initialise all variables */
        databaseController = new DatabaseController();
        databaseHelper = new DatabaseHelper(context);
    }

    public static synchronized DatabaseController getInstance() {
        /* Check that the controller is not null */
        if (databaseController == null) {
            throw new IllegalStateException("" +
                    "Please initialise the Database Controller by calling " +
                    "DatabaseController.initialize()");
        }

        return databaseController;
    }

    public static synchronized DatabaseHelper getDatabaseHelper() {
        /* Check that the databaseHelper is not null */
        if (databaseHelper == null) {
            throw new IllegalStateException("" +
                    "Please initialise the Database Helper by calling " +
                    "DatabaseController.initialize()");
        }

        return databaseHelper;
    }

    /**
     * Opens the database for writing or saving data
     * @return {@Link SQLiteDatabase}
     */
    public static synchronized SQLiteDatabase openDatabase() {
        if (db == null)
            db = databaseHelper.getWritableDatabase();

        return db;
    }

    /**
     * Closes the database
     */
    public static synchronized void closeDatabase() {
        if (db != null)
            db.close();
    }

}
