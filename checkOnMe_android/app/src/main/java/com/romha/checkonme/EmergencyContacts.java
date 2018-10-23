package com.romha.checkonme;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;

import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.User;

import java.util.ArrayList;

/**
 * Created by admin on 2/28/17.
 */

public class EmergencyContacts extends BaseActivity {

    private EditText contact1Name;
    private EditText contact1Phone;
    private Spinner contact1Relation;
    private EditText contact2Name;
    private EditText contact2Phone;
    private Spinner contact2Relation;

    private ArrayList<String> relationship1 = new ArrayList<>();
    private ArrayList<String> relationship2 = new ArrayList<>();

    private String relation1;
    private String relation2;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.contacts_screen);

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

        contact1Name = (EditText) findViewById(R.id.contact1_name);
        contact1Phone = (EditText) findViewById(R.id.contact1_phone);
        contact1Relation = (Spinner) findViewById(R.id.relationship1);
        contact2Name = (EditText) findViewById(R.id.contact2_name);
        contact2Phone = (EditText) findViewById(R.id.contact2_phone);
        contact2Relation = (Spinner) findViewById(R.id.relationship2);

        relationship1.add("Parent");
        relationship1.add("Spouse");
        relationship1.add("Sibling");
        relationship1.add("Colleague");
        relationship1.add("Manager");
        relationship1.add("Clergy");
        relationship1.add("Neighbour");
        relationship1.add("Other");

        relationship2.add("Parent");
        relationship2.add("Spouse");
        relationship2.add("Sibling");
        relationship2.add("Colleague");
        relationship2.add("Manager");
        relationship2.add("Clergy");
        relationship2.add("Neighbour");
        relationship2.add("Other");

        /* Display the emergency contacts, if they have been set previously */
        startGetContacts();

        if (UserController.user.contact1Relation != null && !UserController.user.contact1Relation.matches("")) {
            relationship1.remove(UserController.user.contact1Relation);
            relationship1.add(0, UserController.user.contact1Relation);
        }
        else
            relationship1.add(0, "Relationship");

        if (UserController.user.contact2Relation != null && !UserController.user.contact2Relation.matches("")) {
            relationship2.remove(UserController.user.contact2Relation);
            relationship2.add(0, UserController.user.contact2Relation);
        }
        else
            relationship2.add(0, "Relationship");

        /* Set the list of relationships on the contactRelation spinners */
        ArrayAdapter<String> adapter1 = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, relationship1);
        contact1Relation.setAdapter(adapter1);
        ArrayAdapter<String> adapter2 = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, relationship2);
        contact2Relation.setAdapter(adapter2);

        findViewById(R.id.save_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /* Check if the user has applied any changes */
                String name1 = contact1Name.getText().toString().trim();
                String phone1 = contact1Phone.getText().toString().trim();
                String name2 = contact2Name.getText().toString().trim();
                String phone2 = contact2Phone.getText().toString().trim();

                relation1 = (String) contact1Relation.getSelectedItem();
                relation2 = (String) contact2Relation.getSelectedItem();

                if (    !name1.isEmpty() || !phone1.isEmpty()
                        || !name2.isEmpty() || !phone2.isEmpty()
                        || !relation1.isEmpty() || !relation2.isEmpty() ) {

                    /* Update the database and the API */
                    startUpdateContacts(name1, phone1, relation1, name2, phone2, relation2);
                }
            }
        });
    }

    private void startGetContacts() {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("RETRIEVING EMERGENCY CONTACTS ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.getProfile();
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */
                if (UserController.user.contact1Name != null)
                    contact1Name.setText(UserController.user.contact1Name);
                if (UserController.user.contact1Phone != null)
                    contact1Phone.setText(UserController.user.contact1Phone);
                if (UserController.user.contact2Name != null)
                    contact2Name.setText(UserController.user.contact2Name);
                if (UserController.user.contact2Phone != null)
                    contact2Phone.setText(UserController.user.contact2Phone);
            }
        };

        asyncTask.execute();
    }

    private void startUpdateContacts(final String name1, final String phone1, final String relation1,
                                     final String name2, final String phone2, final String relation2) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(this);
        p.setMessage("SAVING EMERGENCY CONTACTS ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.updateContacts(name1, phone1, relation1, name2, phone2, relation2);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */
                if (aBoolean) {
                    UserController.user.contact1Name = name1;
                    UserController.user.contact1Phone = phone1;
                    UserController.user.contact1Relation = relation1;
                    UserController.user.contact2Name = name2;
                    UserController.user.contact2Phone = phone2;
                    UserController.user.contact2Relation = relation2;

                    UserController controller = new UserController(User.TABLE);
                    controller.save(UserController.user);
                } else {
                    showToast("An error occurred while updating emergency contacts. Please try again.", EmergencyContacts.this);
                }

                /* Return to the navigation screen */
                finish();
            }
        };

        asyncTask.execute();
    }
}
