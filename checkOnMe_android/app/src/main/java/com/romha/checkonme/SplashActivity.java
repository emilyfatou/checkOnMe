package com.romha.checkonme;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.view.View;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.User;
import com.romha.checkonme.utils.Prefs;

/**
 * Created by admin on 2/25/17.
 */

public class SplashActivity extends BaseActivity {

    private boolean view_clicked = false;
    private boolean closed = false;
    private static final int SPLASH_TIMEOUT = 2000;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);

        findViewById(R.id.main_content).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                view_clicked = true;
                initNext();
            }
        });

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                if (view_clicked) return;
                if (closed) return;
                initNext();
            }
        }, SPLASH_TIMEOUT);
    }

    private void initNext() {

        Prefs prefs = new Prefs(this);

        /* Check that this is the first installation and start Tour Activity */
        /*if (!prefs.getBoolean(Prefs.TOUR)) {
            Intent intent = new Intent(this, TourActivity.class);
            startActivity(intent);
        } else {*/
            /* Check that this is the first login and start the Login Activity */
            if (!prefs.getBoolean(Prefs.LOGIN)) {
                Intent intent = new Intent(this, LoginActivity.class);
                startActivity(intent);
            } else {
                /* Get the logged in user's email from the shared preferences
                and assign that user to the User controller's static user field */
                UserController controller = new UserController(User.TABLE);

                String id = prefs.getString(Prefs.ID);
                String whereClause = String.format("%s = '%s'", User.COL_ID, id);
                UserController.user = controller.searchUser(whereClause);

                /* Start the Home Activity */
                Intent intent = new Intent(this, HomeActivity.class);
                startActivity(intent);
            }
        //}

        finish();
    }

    @Override
    public void onBackPressed() {
        closed = true;
        super.onBackPressed();
    }
}
