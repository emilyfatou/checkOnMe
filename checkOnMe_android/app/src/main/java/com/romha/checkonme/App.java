package com.romha.checkonme;

import android.app.Application;

import com.romha.checkonme.database.DatabaseController;

/**
 * Created by admin on 3/4/17.
 */

public class App extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        DatabaseController.initialize(this);
    }
}
