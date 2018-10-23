package com.romha.checkonme;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.TextView;

import com.romha.checkonme.adapters.CustomListAdapter;
import com.romha.checkonme.controllers.MessageController;
import com.romha.checkonme.model.Message;

import java.util.ArrayList;

/**
 * Created by admin on 3/25/17.
 */

public class MessageViewActivity extends BaseActivity {

    private ArrayList<Message> items;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.message_view_screen);

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

        TextView tv = (TextView) findViewById(R.id.no_messages);

        /* Instantiate the list view */
        ListView listView = (ListView) findViewById(R.id.msgView);

        /* Load all the user messages */
        MessageController controller = new MessageController(Message.TABLE);
        controller.load();
        items = controller.items;

        /* Bind our custom adapter to the list view */
        if (items != null) {
            tv.setVisibility(View.GONE);
            CustomListAdapter adapter = new CustomListAdapter(this, items);
            listView.setAdapter(adapter);

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    Message message = items.get(position);

                    Intent intent = new Intent(MessageViewActivity.this, FullMessage.class);
                    intent.putExtra("message", message);
                    startActivity(intent);
                }
            });
        }

        if (items.isEmpty()) {
            /* Display a text indicating there are no messages */
            tv.setVisibility(View.VISIBLE);
        }

    }
}
