package com.romha.checkonme;

import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.database.DatabaseController;
import com.romha.checkonme.database.DatabaseHelper;
import com.romha.checkonme.model.User;
import com.romha.checkonme.utils.Prefs;

/**
 * Created by admin on 2/25/17.
 */

public class SignUpActivity extends BaseActivity {

    private EditText first_name;
    private EditText last_name;
    private EditText phone;
    private EditText email;
    private EditText password;
    private EditText repeatPassword;
    private CheckBox cb;

    String firstName;
    String lastName;
    String emailInput;
    String passwordInput;
    String phoneInput;
    String repeatPasswordInput;

    String emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sign_up_screen);

        /* Inflate all the fields here */
        first_name = (EditText) findViewById(R.id.first_name);
        last_name = (EditText) findViewById(R.id.last_name);
        phone = (EditText) findViewById(R.id.phone);
        email = (EditText) findViewById(R.id.email_address);
        password = (EditText) findViewById(R.id.password);
        repeatPassword = (EditText) findViewById(R.id.repeat_password);
        Button b = (Button) findViewById(R.id.get_started);
        cb = (CheckBox) findViewById(R.id.check_box);
        TextView signIn = (TextView) findViewById(R.id.sign_in);

        /* Set on click listeners */
        b.setOnClickListener(listener);
        signIn.setOnClickListener(listener);
    }

    private View.OnClickListener listener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            int id = v.getId();

            switch (id) {

                case R.id.get_started:

                    /* Check if the checkbox is ticked off */
                    if (cb.isChecked()) {

                        boolean isSignedUp = confirmSignUp();
                        /* If sign up is successful, redirect user to the login page */
                        if (isSignedUp) {
                            startSignUp(firstName, lastName, phoneInput, emailInput, passwordInput);
//                            showToast("Signed Up successfully", SignUpActivity.this);
//
//                            Intent intent = new Intent(SignUpActivity.this, LoginActivity.class);
//                            startActivity(intent);
//                            finish();
                        }

                    }else {
                        /* If the checkbox is not ticked off, request the user to do so */
                        cb.setError("Please accept the license agreement");
                    }
                    break;

                case R.id.sign_in:
                    Intent intent = new Intent(SignUpActivity.this, LoginActivity.class);
                    startActivity(intent);
                    finish();
                    break;

            }
        }
    };

    private boolean confirmSignUp() {
        firstName = first_name.getText().toString().trim();
        lastName = last_name.getText().toString().trim();
        emailInput = email.getText().toString().trim();
        passwordInput = password.getText().toString().trim();
        phoneInput = phone.getText().toString().trim();
        repeatPasswordInput = repeatPassword.getText().toString().trim();

        /* Check if the user has entered a first name */
        if (firstName.isEmpty()) {
            first_name.setError("Please enter your first name");
            return false;
        }
        /* Check if the user has entered a last name */
        if (lastName.isEmpty()) {
            last_name.setError("Please enter your last name");
            return false;
        }
        /* Check if the user has entered a phone number */
        if (phoneInput.isEmpty()) {
            phone.setError("Please enter your phone number");
            return false;
        }
        /* Check if the user has entered an email address */
        if (emailInput.isEmpty()) {
            email.setError("Please enter your email address");
            return false;
        }
        /* Check if the email address is a valid one */
        if (!emailInput.matches(emailPattern)) {
            email.setError("Not a valid email address");
            return false;
        }
        /* Check if the user has entered a password */
        if (passwordInput.isEmpty()) {
            password.setError("Please enter your password");
            return false;
        }
        /* Check if the user has entered the repeat password field */
        if (repeatPasswordInput.isEmpty()) {
            repeatPassword.setError("Please re-enter your password");
            return false;
        }
        /* Check if the passwords entered match */
        if (!passwordInput.equals(repeatPasswordInput)) {
            password.setText("");
            repeatPassword.setText("");
            password.setError("The passwords don't match");
            return false;
        }

        return true;

//        /* Check if a user already exists with the entered email */
//        UserController controller = new UserController(User.TABLE);
////        DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
////        databaseHelper.onCreate(controller.db);
//
//        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, emailInput);
//        if (controller.exists(whereClause)) {
//            showToast("There is already an account with this email address.", this);
//            return false;
//        }else {
//            /* Add the user to the database */
//            User u = new User();
//            u.firstName = firstName;
//            u.lastName = lastName;
//            u.email = emailInput;
//            u.phone = phoneInput;
//            u.password = passwordInput;
//
//            controller.save(u);
//        }

        /* Validate the user's sign up by sending a request to the API */
//        boolean res = startSignUp(firstName, lastName, phoneInput, emailInput, passwordInput);
//        if (!res)
//            showToast("Sign Up was not successful", SignUpActivity.this);
//
//        return res;

//        return true;
    }

    private void startSignUp(final String firstName, final String lastName, final String phone, final String email, final String password) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("Signing Up ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.signUp(firstName, lastName, phone, email, password);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the sign up was successful or failed */
//                showToast("Sign Up was successful " + aBoolean.toString() , SignUpActivity.this);
                if (aBoolean) {
                    showToast("Signed Up successfully", SignUpActivity.this);

                    Intent intent = new Intent(SignUpActivity.this, LoginActivity.class);
                    startActivity(intent);
                    finish();
                } else {
                    showToast("Sign Up was not successful", SignUpActivity.this);
                }

            }
        };

        asyncTask.execute();
    }

}
