package com.romha.checkonme;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.Message;
import com.romha.checkonme.model.User;

import java.util.Random;

/**
 * Created by admin on 3/8/17.
 */

public class ForgotPasswordActivity extends BaseActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.forgot_password_screen);

        final EditText phone = (EditText) findViewById(R.id.phone);
        Button b = (Button) findViewById(R.id.submit_button);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String phone_input = phone.getText().toString().trim();

                if (phone_input.isEmpty()) {
                    phone.setError("Enter your phone number here");
                } else {
                  /*  boolean res = startForgotPassword(phone_input);
                    if (res) {
                        showToast("You will receive a verification code in order to change your password", ForgotPasswordActivity.this);
                        finish();
                    } else {
                        showToast("Your request did not go through. Check your connectivity and try again!", ForgotPasswordActivity.this);
                    }*/

                    /* Check if there is a record of the user in the database */
                    UserController controller = new UserController(User.TABLE);

                    String whereClause = String.format("%s = '%s'", User.COL_PHONE, phone_input);
                    if (controller.exists(whereClause)) {
                        User u = controller.searchUser(whereClause);

                        /* Generate a random 4-digit number */
                        Random random = new Random();
                        String code = String.valueOf(random.nextInt(10000)+1000);

                        showToast(code, ForgotPasswordActivity.this);

                        /* Text the verification code to the user */
                        Message message = new Message(ForgotPasswordActivity.this, code);
                        message.startSendMessage(phone_input);

                        /* Start the verification code activity */
                        Intent intent = new Intent(ForgotPasswordActivity.this, VerificationCodeActivity.class);
                        intent.putExtra("user", u);
                        intent.putExtra("ver_code", code);
                        startActivity(intent);
                        finish();
                    }else {
                        phone.setText("");
                        phone.setError("Incorrect Phone Number");
                        showToast("No record found with your phone number", ForgotPasswordActivity.this);
                    }

                }

            }
        });
    }

    private void startForgotPassword(final String phone_number) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("Wait a moment ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.forgotPassword(phone_number);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */

            }
        };

        asyncTask.execute();
    }

}
