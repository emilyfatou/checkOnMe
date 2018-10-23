package com.romha.checkonme;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.User;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Locale;

/**
 * Created by admin on 2/28/17.
 */

public class EditProfile extends BaseActivity {

    private EditText firstName;
    private EditText lastName;
    private EditText phone;
    private EditText email;
    private Spinner country;
    private EditText state;
    private EditText city;
    private String countryText;

    private ArrayList<String> countries = new ArrayList<>();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.edit_profile_screen);

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

        firstName = (EditText) findViewById(R.id.first_name);
        lastName = (EditText) findViewById(R.id.last_name);
        phone = (EditText) findViewById(R.id.phone);
        email = (EditText) findViewById(R.id.email);
        country = (Spinner) findViewById(R.id.country);
        state = (EditText) findViewById(R.id.state);
        city = (EditText) findViewById(R.id.city);

        /* Get a list of all countries of the world */
        String locale_country;

        Locale[] locale = Locale.getAvailableLocales();

        for (Locale loc: locale) {
            locale_country = loc.getDisplayCountry();
            if (!locale_country.isEmpty() && !countries.contains(locale_country)) {
                countries.add(locale_country);
            }
        }

        /* Sort out the countries alphabetically */
        Collections.sort(countries);

        /* Display the profile of the user */
        displayProfile();

        /* Set the list of countries on the country spinner */
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, countries);
        country.setAdapter(adapter);

        country.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                countryText = (String) parent.getItemAtPosition(position);
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        findViewById(R.id.save_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String first_name = firstName.getText().toString().trim();
                String last_name = lastName.getText().toString().trim();
                String phone_number = phone.getText().toString().trim();
                String email_address = email.getText().toString().trim();
                String stateInput = state.getText().toString().trim();
                String cityInput = city.getText().toString().trim();

                /* Check if the user has applied any changes */
                if (!first_name.isEmpty() || !last_name.isEmpty()
                    || !phone_number.isEmpty() || !email_address.isEmpty()
                    || !countryText.isEmpty() || !stateInput.isEmpty()
                        || !cityInput.isEmpty()) {

                    /* Update the database and the API */
                    startUpdateProfile(first_name, last_name, phone_number, email_address, countryText, stateInput, cityInput);
                }
            }
        });
    }

    private void displayProfile() {

        if (UserController.user != null) {
            firstName.setText(UserController.user.firstName);
            lastName.setText(UserController.user.lastName);
            email.setText(UserController.user.email);
            phone.setText(UserController.user.phone);

            if (UserController.user.country != null)
                countries.add(0, UserController.user.country);
            else
                countries.add(0, "Select your country");

            if (UserController.user.state != null)
                state.setText(UserController.user.state);
            if (UserController.user.city != null)
                city.setText(UserController.user.city);

        } else
            countries.add(0, "Select your country");

    }

    private void startUpdateProfile(final String first_name, final String last_name, final String phone, final String email,
                                       final String country, final String state, final String city) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("UPDATING PROFILE ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.updateProfile(first_name, last_name, phone, email, country, state, city);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */
                if (aBoolean) {
                    UserController.user.firstName = first_name;
                    UserController.user.lastName = last_name;
                    UserController.user.phone = phone;
                    UserController.user.email = email;
                    UserController.user.country = country;
                    UserController.user.state = state;
                    UserController.user.city = city;

                    UserController controller = new UserController(User.TABLE);
                    controller.save(UserController.user);
                } else {
                    showToast("An error occurred while updating your profile. Please try again.", EditProfile.this);
                }

                /* Return to the previous screen */
                Intent i = new Intent(EditProfile.this, ViewProfile.class);
                startActivity(i);
                finish();
            }
        };

        asyncTask.execute();
    }
}
