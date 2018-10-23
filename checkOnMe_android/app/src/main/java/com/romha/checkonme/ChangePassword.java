package com.romha.checkonme;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;

/**
 * Created by admin on 3/30/17.
 */
public class ChangePassword extends BaseActivity{

    EditText oldPassword;
    EditText newPassword;
    EditText repeatNewPassword;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.change_password);

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

        oldPassword = (EditText) findViewById(R.id.old_password);
        newPassword = (EditText) findViewById(R.id.new_password);
        repeatNewPassword = (EditText) findViewById(R.id.repeat_new_password);

        Button b = (Button) findViewById(R.id.save_button);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String old_password = oldPassword.getText().toString().trim();
                String new_password = newPassword.getText().toString().trim();
                String repeat_new_password = repeatNewPassword.getText().toString().trim();

                if (old_password.isEmpty() || new_password.isEmpty() || repeat_new_password.isEmpty()) {
                    showToast("Please fill in all the fields", ChangePassword.this);

                } else if (!new_password.equals(repeat_new_password)) {
                    newPassword.setText("");
                    repeatNewPassword.setText("");
                    newPassword.setError("New passwords don't match");

                } else {
                    /* Send a request to the API */
                    startChangePassword(old_password, new_password);

//                    boolean res = changePassword(old_password, new_password);
//                    if (res) {
//                        /* Save the new password to the database */
//                        UserController controller = new UserController(User.TABLE);
//                        UserController.user.password = new_password;
//                        controller.save(UserController.user);
//
//                        showToast("Your password has been changed successfully", ChangePassword.this);
//                        finish();
//                    } else {
//                        showToast("There was an error changing your password. " +
//                                "Please make sure you entered the correct fields.", ChangePassword.this);
//
//                        oldPassword.setText("");
//                        newPassword.setText("");
//                        repeatNewPassword.setText("");
//                    }

                }

            }
        });

        Button c = (Button) findViewById(R.id.cancel_action);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

    }

    private void startChangePassword(final String old_password, final String new_password) {

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
                return Api.changePassword(old_password, new_password);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */
                if (aBoolean) {
                    showToast("Your password has been changed successfully", ChangePassword.this);
                    finish();
                } else {
                    showToast("There was an error changing your password. " +
                            "Please make sure you entered the correct fields.", ChangePassword.this);

                    oldPassword.setText("");
                    newPassword.setText("");
                    repeatNewPassword.setText("");
                }
            }
        };

        asyncTask.execute();
    }

    private boolean changePassword(String oldPassword, String newPassword) {

        if (!oldPassword.equals(UserController.user.password) || oldPassword.equals(newPassword))
            return false;
        else
            return true;

    }

}
