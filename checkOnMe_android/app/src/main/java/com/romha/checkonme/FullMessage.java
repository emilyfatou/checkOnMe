package com.romha.checkonme;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.TextView;

import com.romha.checkonme.model.Message;

/**
 * Created by admin on 4/8/17.
 */

public class FullMessage extends BaseActivity {
    private TextView title;
    private TextView date;
    private TextView body;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.full_message);

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

        Message message = (Message) getIntent().getSerializableExtra("message");

        title = (TextView) findViewById(R.id.title1);
//        date = (TextView) findViewById(R.id.date);
        body = (TextView) findViewById(R.id.body);

        title.setText(message.recipient);
//        date.setText(message.date.toString());
        body.setText(message.content);
    }
}
