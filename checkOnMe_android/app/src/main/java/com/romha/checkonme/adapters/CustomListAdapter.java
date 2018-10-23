package com.romha.checkonme.adapters;

import android.app.Activity;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.romha.checkonme.R;
import com.romha.checkonme.model.Message;

import java.util.ArrayList;

/**
 * Created by admin on 4/3/17.
 */

public class CustomListAdapter extends ArrayAdapter<Message> {
    private ArrayList<Message> items = new ArrayList<>();
    private Activity activity;
    private int item_layout = R.layout.sample_message;

    public CustomListAdapter(Activity activity, ArrayList<Message> items) {
        super(activity, R.layout.sample_message, items);
        this.activity = activity;
        this.items = items;
    }

    private static class ViewHolder {
        TextView recipient;
        TextView message;
    }

    @NonNull
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        Message m = getItem(position);

        ViewHolder viewHolder;

        if (convertView == null) {
            viewHolder = new ViewHolder();

            LayoutInflater inflater = LayoutInflater.from(getContext());
            convertView = inflater.inflate(item_layout, parent, false);

            viewHolder.recipient = (TextView) convertView.findViewById(R.id.recipient);
            viewHolder.message = (TextView) convertView.findViewById(R.id.message);

            convertView.setTag(viewHolder);
        } else {
            viewHolder = (ViewHolder) convertView.getTag();
        }

        viewHolder.recipient.setText(m.recipient);
        viewHolder.message.setText(m.content);

        return convertView;
    }
}
