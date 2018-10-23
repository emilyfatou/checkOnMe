package com.romha.checkonme;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

/**
 * Created by admin on 2/25/17.
 */

public class BaseActivity extends AppCompatActivity {

    public void showToast(String msg, Context context) {
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
    }

}
