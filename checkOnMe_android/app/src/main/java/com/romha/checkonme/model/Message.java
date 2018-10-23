package com.romha.checkonme.model;

import android.Manifest;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.AsyncTask;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v4.os.ResultReceiver;
import android.widget.Toast;

import com.romha.checkonme.BaseActivity;
import com.romha.checkonme.HomeActivity;
import com.romha.checkonme.HumanInterfaceTest;
import com.romha.checkonme.MessageActivity;
import com.romha.checkonme.R;
import com.romha.checkonme.backend.Api;
import com.romha.checkonme.controllers.MessageController;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.services.FetchAddressIntentService;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by admin on 4/21/17.
 */

public class Message extends BaseActivity implements Serializable {

    LocationManager manager;
    LocationListener listener;

    private static final int MY_PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 10;
    private boolean locationPermissionGranted;

    public String content;
    private String address;
    public String recipient;
    public Date date;
    public String user_id;

    private Activity context;

    /* Will hold the user's current location */
    private Location userLocation;

    /* Will hold the result of the reverse geo-coding service */
    private AddressResultReceiver mResultReceiver;

    /* Recipient choices */
    public static final String EMS = "ems";
    public static final String CONTACTS = "contacts";

    /* Table Name */
    public static String TABLE = "message";

    /* List of Columns */
    public static String COL_RECIPIENT = "recipient";
    public static String COL_DATE = "date";
    public static String COL_CONTENT = "content";
    public static String COL_USER_ID = "user_id";

    /* Create Table SQL statement */
    public static String CREATE_TABLE_SQL = String.format("CREATE TABLE IF NOT EXISTS %s (" +
                    "%s TEXT," +
                    "%s TEXT," +
                    "%s TEXT," +
                    "%s TEXT" +
                    ")",
            TABLE,
            COL_USER_ID,
            COL_RECIPIENT,
            COL_DATE,
            COL_CONTENT
    );

    public static String DROP_TABLE_SQL = "DROP TABLE " + TABLE;

    public Message() {
        context = null;
        content = null;
        date = null;
        recipient = null;
        user_id = UserController.user._id;
    }

    public Message(Activity context) {
        this.context = context;
        content = "I am in trouble. I need your help! ";// I am currently located at lat: " + userLocation.getLatitude()
                //+ " lon: " + userLocation.getLongitude();
        getGPSLocation();
        date = new Date();
        user_id = UserController.user._id;
    }

    public Message(Activity context, String content) {
        this.context = context;
        this.content = content;
        date = new Date();
        user_id = UserController.user._id;
    }

    public Message setRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }

    public void getGPSLocation() {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(context);
        p.setMessage("Retrieving Location ....");
        p.show();

        /* Acquire a reference to the system Location Manager */
        manager = (LocationManager) context.getSystemService(Context.LOCATION_SERVICE);

        /* Define a listener that responds to location updates */
        listener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {

                p.dismiss();
                /* Called when a new location is found by the network location provider */
//                userLocation = location;
                content += "I am currently located at latitude: " + location.getLatitude()
                + " and longitude: " + location.getLongitude();

//                content += "I am currently located at http://maps.google.com/maps?saddr="
//                        + location.getLatitude()+","+location.getLongitude();

//                showToast("GPS Content: " + content, context);
                startSendMessage(UserController.user.contact1Phone);
//                startSendMessage(UserController.user.contact2Phone);

                saveMsgToDatabase();
//                finish();

                endGPS();

                /* Fetch the street address from the geographical location */
//                startIntentService();
            }

            @Override
            public void onStatusChanged(String provider, int status, Bundle extras) {

            }

            @Override
            public void onProviderEnabled(String provider) {
                Toast.makeText( context,
                        "GPS Enabled",
                        Toast.LENGTH_LONG).show();
            }

            @Override
            public void onProviderDisabled(String provider) {
                Toast.makeText( context,
                        "GPS Disabled. Please enable your GPS!",
                        Toast.LENGTH_LONG ).show();
                /* Bring up the "Settings" dialog so that user can enable GPS */
                Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                startActivity(intent);
            }
        };

        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED &&
                ActivityCompat.checkSelfPermission(context, Manifest.permission.ACCESS_COARSE_LOCATION)
                        != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(context, new String[]{Manifest.permission.ACCESS_FINE_LOCATION,
                    Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.INTERNET},
                    MY_PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION);

        } else {
            manager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, listener);
//            userLocation = manager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
//            showToast(userLocation.getLatitude() + ", " + userLocation.getLongitude(), context);
        }

    }

    public void endGPS() {

        try {
            manager.removeUpdates(listener);
            manager = null;
        } catch(SecurityException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {

        if(requestCode ==  MY_PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION) {
            // If request is cancelled, the result arrays are empty.
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                try {
                    manager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, listener);
                } catch (SecurityException e) {
                    e.printStackTrace();
                }
            }
            else
                showToast("GPS Permission denied", this);
        }

    }

    public void startSendMessage(final String receiver) {

        /* Progress Dialog */
        final ProgressDialog p = new ProgressDialog(context);
        p.setMessage("Sending Message ....");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected void onPreExecute() {
                super.onPreExecute();

                /* Display the dialog box */
                p.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return Api.sendMessage(content, receiver);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);

                /* Dismiss the Dialog, operation is complete */
                p.dismiss();

                /* Tell the user that the operation was successful or failed */
                if (aBoolean) {
//                    saveMsgToDatabase();
                    showToast("Your message has been sent successfully", context);
//                    context.finish();
                } else
                    showToast("Your message could not be sent. Please try again.", context);

            }
        };

        asyncTask.execute();
    }

    /**
     * Saves the message to the database
     */
    public void saveMsgToDatabase() {
        MessageController controller = new MessageController(Message.TABLE);

        Message m = new Message();
        m.user_id = user_id;
        m.content = content;
//        m.date = date;
        if (recipient.equals(Message.EMS))
            m.recipient = "To: 911, " + UserController.user.contact1Phone + ", " + UserController.user.contact2Phone;
        else if (recipient.equals(Message.CONTACTS))
            m.recipient = "To: " + UserController.user.contact1Phone + ", " + UserController.user.contact2Phone;
        else
            m.recipient = null;

        controller.save(m);
    }

    protected void startIntentService() {
        Intent intent = new Intent(context, FetchAddressIntentService.class);
        intent.putExtra(FetchAddressIntentService.Constants.RECEIVER, mResultReceiver);
        intent.putExtra(FetchAddressIntentService.Constants.LOCATION_DATA_EXTRA, userLocation);
        startService(intent);
    }

    class AddressResultReceiver extends ResultReceiver {
        public AddressResultReceiver(android.os.Handler handler) {
            super(handler);
        }

        @Override
        protected void onReceiveResult(int resultCode, Bundle resultData) {

            // Display the address string
            // or an error message sent from the intent service.
            address = resultData.getString(FetchAddressIntentService.Constants.RESULT_DATA_KEY);
//            displayAddressOutput();
//            content += "I need your help! I am currently located at: " + address;

//            /* Send the message */
//            boolean res = sendMessageToContacts();
//            if (res) {
//                saveMsgToDatabase();
//                showToast("An emergency message has been sent successfully", context);
//
//                /* Then, display the clickable human body interface */
//                Intent intent = new Intent(context, HumanInterface.class);
//                startActivity(intent);
//            } else
//                showToast("An emergency message could not be sent. Please try again.", context);

            // Show a toast message if an address was found.
            if (resultCode == FetchAddressIntentService.Constants.SUCCESS_RESULT) {
                showToast(getString(R.string.address_found), context);
            }

        }
    }

}
