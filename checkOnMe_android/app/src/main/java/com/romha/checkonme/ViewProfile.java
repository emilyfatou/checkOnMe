package com.romha.checkonme;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.EditText;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;

/**
 * Created by admin on 4/15/17.
 */

public class ViewProfile extends BaseActivity {
    private EditText firstName;
    private EditText lastName;
    private EditText email;
    private EditText phone;
    private EditText country;
    private EditText state;
    private EditText city;
    private FloatingActionButton edit_icon;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.view_profile_screen);

        Toolbar tlb = (Toolbar) findViewById(R.id.toolbar);
        tlb.setNavigationIcon(R.drawable.toolbar_back);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);

        tlb.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        displayProfile();

        edit_icon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(ViewProfile.this, EditProfile.class);
                startActivity(i);
                finish();
            }
        });
    }

    private void displayProfile() {

        firstName = (EditText) findViewById(R.id.first_name);
        lastName = (EditText) findViewById(R.id.last_name);
        email = (EditText) findViewById(R.id.email);
        phone = (EditText) findViewById(R.id.phone);
        country = (EditText) findViewById(R.id.country);
        state = (EditText) findViewById(R.id.state);
        city = (EditText) findViewById(R.id.city);
        edit_icon = (FloatingActionButton) findViewById(R.id.edit_icon);

        /* Retrieve the user's profile information from the API */
        startGetProfile();
    }

    private void startGetProfile() {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("RETRIEVING PROFILE ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.getProfile();
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Display the profile to the user */
                if (UserController.user.country != null)
                    country.setText(UserController.user.country);

                if (UserController.user.state != null)
                    state.setText(UserController.user.state);

                if (UserController.user.city != null)
                    city.setText(UserController.user.city);

                firstName.setText(UserController.user.firstName);
                lastName.setText(UserController.user.lastName);
                email.setText(UserController.user.email);
                phone.setText(UserController.user.phone);

            }
        };

        asyncTask.execute();
    }

}
