package com.romha.checkonme;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.romha.checkonme.controllers.MessageController;
import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.Message;
import com.romha.checkonme.model.User;
import com.romha.checkonme.utils.Prefs;
import com.romha.checkonme.utils.Utility;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by admin on 2/25/17.
 */

public class HomeActivity extends BaseActivity {

    private DrawerLayout drawerLayout;
    private TextView fullName;
    private ImageView imgView;

    private int REQUEST_CAMERA = 0, SELECT_FILE = 1;
    private String userChosenTask;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_screen);

        /* Set up your profile name */
        fullName = (TextView) findViewById(R.id.full_name);
//        fullName.setText(UserController.user.firstName + " " + UserController.user.lastName);

        /* Set up your profile picture */
        imgView = (ImageView) findViewById(R.id.profile_pic);

        /* Set the Image in ImageView after decoding the String stored in the database */
//        imgView.setImageBitmap(BitmapFactory
//                .decodeFile(UserController.user.picture));

        imgView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                selectImage();
            }
        });

        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);

        Toolbar tlb = (Toolbar) findViewById(R.id.toolbar);
        tlb.setNavigationIcon(R.drawable.ic_menu_black);
        setSupportActionBar(tlb);

        tlb.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                drawerLayout.openDrawer(GravityCompat.START);
            }
        });

        Button buttonContacts = (Button) findViewById(R.id.send_message);
        Button buttonEMS = (Button) findViewById(R.id.emergency);
        Button buttonDestination = (Button) findViewById(R.id.final_destination);

        buttonContacts.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /* Open the message dialog box */
                Intent intent = new Intent(HomeActivity.this, MessageActivity.class);
                startActivity(intent);
            }
        });

        buttonEMS.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /* First, send the emergency message to EMS & Contacts */
                Message message = new Message(HomeActivity.this)
                        .setRecipient(Message.EMS);

//                message.startSendMessage(UserController.user.contact1Phone);
//                message.startSendMessage(UserController.user.contact2Phone);

                /* Then, display the clickable human body interface */
                Intent intent = new Intent(HomeActivity.this, HumanInterfaceTest.class);
                intent.putExtra("calling-activity", ActivityConstants.ACTIVITY_HOME);
                startActivity(intent);
            }
        });

        buttonDestination.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /* Send user's GPS location to emergency contacts */
                Message mes = new Message(HomeActivity.this, "I have been transported to a hospital. ")
                        .setRecipient(Message.CONTACTS);

                mes.getGPSLocation();

//                mes.startSendMessage(UserController.user.contact1Phone);
//                mes.startSendMessage(UserController.user.contact2Phone);
            }
        });

        initDrawerMenuItems();
    }

    private void initDrawerMenuItems() {

        findViewById(R.id.menu_item_home).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                drawerLayout.closeDrawer(GravityCompat.START);
            }
        });
        findViewById(R.id.menu_item_profile).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HomeActivity.this, ViewProfile.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.menu_item_contact).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HomeActivity.this, EmergencyContacts.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.menu_item_messages).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HomeActivity.this, MessageViewActivity.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.menu_item_change_password).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HomeActivity.this, ChangePassword.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.menu_item_logout).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AlertDialog.Builder builder = new AlertDialog.Builder(HomeActivity.this);

                builder.setMessage("Are you sure you want to logout?");
                builder.setCancelable(false);

                builder.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        /* Update the LOGIN field in our shared preferences file */
                        new Prefs(HomeActivity.this).setBoolean(Prefs.LOGIN, false);

                        /* Delete the database tables */
                        UserController controller = new UserController(User.TABLE);
                        controller.clearTable();
                        MessageController messageController = new MessageController(Message.TABLE);
                        messageController.clearTable();

                        /* Redirect user to the login page */
                        Intent intent = new Intent(HomeActivity.this, LoginActivity.class);
                        startActivity(intent);

                        finish();
                    }
                });

                builder.setNegativeButton("No", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

                AlertDialog alert = builder.create();
                alert.show();
            }
        });

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == Activity.RESULT_OK) {
            if (requestCode == SELECT_FILE)
                onSelectFromGalleryResult(data);
            else if (requestCode == REQUEST_CAMERA)
                onCaptureImageResult(data);
        }

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case Utility.MY_PERMISSIONS_REQUEST_READ_EXTERNAL_STORAGE:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    if(userChosenTask.equals("Take Photo"))
                        cameraIntent();
                    else if(userChosenTask.equals("Choose from Library"))
                        galleryIntent();
                } else {
                    //code for deny
                    showToast("Permission denied", this);
                }
                break;
        }
    }

    private void selectImage() {
        final CharSequence[] items = { "Take Photo", "Choose from Library",
                "Cancel" };

        AlertDialog.Builder builder = new AlertDialog.Builder(HomeActivity.this);
        builder.setTitle("Add Photo!");
        builder.setItems(items, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int item) {
                boolean result=Utility.checkPermission(HomeActivity.this);

                if (items[item].equals("Take Photo")) {
                    userChosenTask ="Take Photo";
                    if(result)
                        cameraIntent();

                } else if (items[item].equals("Choose from Library")) {
                    userChosenTask ="Choose from Library";
                    if(result)
                        galleryIntent();

                } else if (items[item].equals("Cancel")) {
                    dialog.dismiss();
                }
            }
        });
        builder.show();
    }

    private void galleryIntent()
    {
        Intent intent = new Intent();
        intent.setType("image/*");
        intent.setAction(Intent.ACTION_GET_CONTENT);//
        startActivityForResult(Intent.createChooser(intent, "Select File"),SELECT_FILE);
    }

    private void cameraIntent()
    {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(intent, REQUEST_CAMERA);
    }

    private void onCaptureImageResult(Intent data) {
        Bitmap thumbnail = (Bitmap) data.getExtras().get("data");
        ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        thumbnail.compress(Bitmap.CompressFormat.JPEG, 90, bytes);

        File destination = new File(Environment.getExternalStorageDirectory(),
                System.currentTimeMillis() + ".jpg");

        FileOutputStream fo;
        try {
            destination.createNewFile();
            fo = new FileOutputStream(destination);
            fo.write(bytes.toByteArray());
            fo.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        imgView.setImageBitmap(thumbnail);
    }

    @SuppressWarnings("deprecation")
    private void onSelectFromGalleryResult(Intent data) {

        Bitmap bm = null;
        if (data != null) {
            try {
                bm = MediaStore.Images.Media.getBitmap(getApplicationContext().getContentResolver(), data.getData());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        imgView.setImageBitmap(bm);
    }

    @Override
    protected void onStop() {
        new Prefs(this).setString(Prefs.ID, UserController.user._id);
        super.onStop();
    }
}