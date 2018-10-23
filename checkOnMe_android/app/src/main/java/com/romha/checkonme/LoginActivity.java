package com.romha.checkonme;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.utils.Prefs;

/**
 * Created by admin on 2/25/17.
 */

public class LoginActivity extends BaseActivity {

    private EditText email;
    private EditText password;

    private String emailInput;
    private String passwordInput;

    private String emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_screen);

        /* Inflate all the views from the login screen */
        email = (EditText) findViewById(R.id.email_address);
        password = (EditText) findViewById(R.id.password);
        TextView forgot = (TextView) findViewById(R.id.forgot_password);
        Button signIn = (Button) findViewById(R.id.sign_in_button);
        TextView signUp = (TextView) findViewById(R.id.sign_up);

        /* Set on click listeners for signIn, signUp and forgot fields */
        forgot.setOnClickListener(listener);
        signIn.setOnClickListener(listener);
        signUp.setOnClickListener(listener);
    }

    private View.OnClickListener listener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            int id = v.getId();

            switch (id) {

                case R.id.forgot_password:
                    Intent intent1 = new Intent(LoginActivity.this, ForgotPasswordActivity.class);
                    startActivity(intent1);
                    break;

                case R.id.sign_in_button:
                    boolean isLoggedIn = confirmSignIn();
                    if (isLoggedIn) {
                        startLogin(emailInput, passwordInput);
                    }
                    break;

                case R.id.sign_up:
                    Intent intent = new Intent(LoginActivity.this, SignUpActivity.class);
                    startActivity(intent);
                    finish();
                    break;

            }
        }
    };

    private boolean confirmSignIn() {
        emailInput = email.getText().toString().trim();
        passwordInput = password.getText().toString().trim();

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

        return true;

//        /* Check if there is a record of the user in the database */
//        UserController controller = new UserController(User.TABLE);
//
//        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, emailInput);
//        if (controller.exists(whereClause)) {
//            User u = controller.searchUser(whereClause);
//
//            /* Check if the password is correct */
//            if (!passwordInput.equals(u.password)) {
//                password.setText("");
//                password.setError("Incorrect Password");
//                return false;
//            } else {
//                /* Assign the currently logged in user to the UserController's static user field */
//                UserController.user = u;
//            }
//
//        }else {
//            email.setText("");
//            password.setText("");
//            showToast("No record found with your email address", this);
//            return false;
//        }

//        return true;
    }

    private void startLogin(final String email, final String password) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("Logging in ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.login(email, password);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the login was successful or failed */
                if (aBoolean) {
                    /* Update the LOGIN field in our shared preferences file */
                    new Prefs(LoginActivity.this).setBoolean(Prefs.LOGIN, true);

                    /* Now start the Home Activity */
                    Intent i = new Intent(LoginActivity.this, HomeActivity.class);
                    startActivity(i);
                    finish();
                } else {
                    showToast("Login was not successful", LoginActivity.this);
                }

            }
        };

        asyncTask.execute();
    }

}
