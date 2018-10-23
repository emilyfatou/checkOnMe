package com.romha.checkonme;

import android.app.Dialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.PopupWindow;
import android.widget.TextView;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.Message;

/**
 * Created by admin on 3/6/17.
 */

public class MessageActivity extends BaseActivity {

//    private static final int MY_PERMISSIONS_REQUEST_SEND_SMS = 5;
//    private boolean permissionGranted;
    private TextView recipients;
    private ImageView addContacts;

    StringBuilder addedContacts = new StringBuilder();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.message_compose_screen);

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

        final EditText inputMessage = (EditText) findViewById(R.id.message_area);
        Button sendButton = (Button) findViewById(R.id.send_button);
        recipients = (TextView) findViewById(R.id.text_recipients);
        addContacts = (ImageView) findViewById(R.id.add_contact);
        Button bodyInterface = (Button) findViewById(R.id.body_interface);

        bodyInterface.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MessageActivity.this, HumanInterfaceTest.class);
                intent.putExtra("calling-activity", ActivityConstants.ACTIVITY_MESSAGE);
                startActivity(intent);
            }
        });

        /* Display the message recipients */
        if (UserController.user.contact1Phone != null && UserController.user.contact2Phone != null)
            recipients.append(UserController.user.contact1Phone + ", " + UserController.user.contact2Phone);

//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");
//        recipients.append("0911746185" + ", " + "+251947843665");

        addContacts.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Dialog dialog = new Dialog(MessageActivity.this);
                dialog.setContentView(R.layout.add_contact_dialog);
                dialog.setCancelable(true);

                final EditText newContactNumber = (EditText) dialog.findViewById(R.id.new_contact_phone_no);

                Button button = (Button) dialog.findViewById(R.id.add_new_number);
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String newNumber = newContactNumber.getText().toString().trim();

                        if (!recipients.getText().toString().matches("To: "))
                            recipients.append(", " + newNumber);
                        else
                            recipients.append(newNumber);

                        dialog.cancel();

                        /* Add the new numbers to a string builder so that we can send out messages to them */
                        addedContacts.append(newNumber);
                        addedContacts.append("\\n");
                    }
                });

                dialog.show();
            }
        });

        sendButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String message = inputMessage.getText().toString();

                if (message.isEmpty())
                    inputMessage.setError("Please type a message to send");
                else {
                    /* Send the message to emergency contacts */
                    Message mes = new Message(MessageActivity.this, message)
                            .setRecipient(Message.CONTACTS);

                    mes.startSendMessage(UserController.user.contact1Phone);
//                    mes.startSendMessage(UserController.user.contact2Phone);

                    String[] lines = addedContacts.toString().split("\\n");
                    for(String s: lines){
                        mes.startSendMessage(s);
                    }

                    mes.saveMsgToDatabase();
//                    finish();
                    inputMessage.setText("");

//                    boolean res = mes.sendMessageToContacts();
//                    if (res) {
//                        mes.saveMsgToDatabase();
//                        showToast("Your message has been sent successfully", MessageActivity.this);
//                        finish();
//                    } else
//                        showToast("Your message could not be sent. Please try again.", MessageActivity.this);

                }

            }
        });

    }

    /**
     * Sends message to both of the user's emergency contacts
     * @param message
     *
    public boolean sendMessageToContacts(String message) {

        if (UserController.user.contact1Phone == null && UserController.user.contact2Phone == null) {
            showToast("You haven't set any emergency contacts. " +
                    "Please set your contacts by going to the menu in the home page.", MessageActivity.this);
            return false;
        }

        if (UserController.user.contact1Phone != null)
            sendMessage(UserController.user.contact1Phone, message);
        if (UserController.user.contact2Phone != null)
            sendMessage(UserController.user.contact2Phone, message);

        return true;
    }

    /**
     * Sends an SMS to the specified phone number
     * @param phone phone number
     * @param message SMS message
     *
    public void sendMessage(String phone, String message) {
        /* Ask permission from the user *
        askPermission();

        if (permissionGranted) {
            try {
                SmsManager smsManager = SmsManager.getDefault();
                smsManager.sendTextMessage(phone, null, message, null, null);
            } catch (Exception e) {
                e.printStackTrace();
                showToast("Error sending message \n" + e.getMessage(), this);
            }
        } else
            showToast("Permission denied!", this);
    }

    /**
     * Saves the message to the database
     * @param message
     *
    public void saveMsgToDatabase(String message) {
        UserController controller = new UserController(User.TABLE);

        if (UserController.user.messages == null)
            UserController.user.messages = message + "\n\n";
        else
            UserController.user.messages += message + "\n\n";

        controller.save(UserController.user);
    }

    private void askPermission() {

        if (ContextCompat.checkSelfPermission(this, Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED)
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.SEND_SMS}, MY_PERMISSIONS_REQUEST_SEND_SMS);
        else
            permissionGranted = true;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        if(requestCode ==  MY_PERMISSIONS_REQUEST_SEND_SMS) {
            // If request is cancelled, the result arrays are empty.
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED)
                permissionGranted = true;
            else
                permissionGranted = false;
        }
    }
*/
}
