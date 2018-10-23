package com.romha.checkonme;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.User;

/**
 * Created by admin on 3/30/17.
 */
public class ResetPasswordActivity extends BaseActivity{
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.reset_password);

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

        final EditText newPassword = (EditText) findViewById(R.id.new_password);
        final EditText repeatNewPassword = (EditText) findViewById(R.id.repeat_new_password);

        Button b = (Button) findViewById(R.id.save_button);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String new_password = newPassword.getText().toString().trim();
                String repeat_new_password = repeatNewPassword.getText().toString().trim();

                if (new_password.isEmpty() || repeat_new_password.isEmpty()) {
                    showToast("Please fill in all the fields", ResetPasswordActivity.this);
                } else if (!new_password.equals(repeat_new_password)) {
                    newPassword.setText("");
                    repeatNewPassword.setText("");
                    newPassword.setError("New passwords don't match");
                } else {
                    /* Assign the new password to the user */
                    UserController controller = new UserController(User.TABLE);

                    User user = (User) getIntent().getSerializableExtra("user");
                    user.password = new_password;
                    controller.save(user);

                    /* Launch the login activity */
                    Intent intent = new Intent(ResetPasswordActivity.this, LoginActivity.class);
                    startActivity(intent);
                    finish();
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

}
