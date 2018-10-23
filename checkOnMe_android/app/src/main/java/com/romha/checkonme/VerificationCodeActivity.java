package com.romha.checkonme;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.romha.checkonme.model.User;

/**
 * Created by admin on 3/8/17.
 */

public class VerificationCodeActivity extends BaseActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.verification_code_screen);

        final EditText code = (EditText) findViewById(R.id.ver_code);
        Button b = (Button) findViewById(R.id.submit_button);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String verCode = code.getText().toString().trim();

                if (verCode.isEmpty()) {
                    code.setError("Enter the verification code here");
                } else {
                    User user = (User) getIntent().getSerializableExtra("user");
                    String ver_code = (String) getIntent().getSerializableExtra("ver_code");

                    /* Check if the verification code is correct */
                    if (verCode.equals(ver_code)) {
                        /* Start the Reset Password Activity */
                        Intent intent = new Intent(VerificationCodeActivity.this, ResetPasswordActivity.class);
                        intent.putExtra("user", user);
                        startActivity(intent);
                        finish();
                    } else {
                        code.setText("");
                        code.setError("Incorrect Code");
                    }

                }
            }
        });
    }
}
