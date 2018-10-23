package com.romha.checkonme.utils;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by admin on 2/25/17.
 */

public class Prefs {
    private SharedPreferences prefs;
    private SharedPreferences.Editor editor;
    private static final String PREFS = "checkOnMe_prefs";

    /* Keys for our shared preference */
    public static final String TOUR = "tour";
    public static final String LOGIN = "login";
    public static final String ID = "id";

    public Prefs(Context context) {
        prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    public void setBoolean(String key, boolean value) {
        if (editor == null)
            editor = prefs.edit();

        editor.putBoolean(key, value);
        editor.apply();
    }

    public boolean getBoolean(String key) {
        return prefs.getBoolean(key, false);
    }

    public void setString(String key, String value) {
        if (editor == null)
            editor = prefs.edit();

        editor.putString(key, value);
        editor.apply();
    }

    public String getString(String key) {
        return prefs.getString(key, null);
    }
}
